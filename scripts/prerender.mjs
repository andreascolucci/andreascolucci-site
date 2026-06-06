// Static prerender for GitHub Pages.
//
// Why: the site is a client-rendered SPA. On GitHub Pages every path that is not
// a real file is served as 404.html WITH an HTTP 404 status, so Googlebot sees
// every /:lang and /:lang/<page> URL as "not found" and never indexes them.
//
// What this does: after `vite build`, it boots a headless Chromium against the
// built `dist/`, lets the React app + react-helmet-async render each known route,
// freezes the resulting HTML (content + per-page <title>/meta/canonical/lang) into
// a real file at dist/<route>/index.html. GitHub Pages then serves each URL with
// HTTP 200 and full HTML — crawlers and no-JS clients see the real content.
//
// External requests (fonts, the world-atlas CDN, Supabase) are blocked during
// capture so prerendering is fast and never hangs on the network in CI.

import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const PORT = 4188;
const ORIGIN = `http://localhost:${PORT}`;

// Must stay in sync with the routes in src/App.tsx and public/sitemap.xml.
const LANGS = ["en", "it", "es"];
const PAGES = ["", "/work", "/about", "/contact", "/faq"];
const ROUTES = LANGS.flatMap((l) => PAGES.map((p) => `/${l}${p}`));

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".webp": "image/webp",
  ".ico": "image/x-icon", ".txt": "text/plain", ".xml": "application/xml",
  ".woff2": "font/woff2", ".woff": "font/woff",
};

// Tiny static file server with SPA fallback to index.html (so /en etc. boot the app).
function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent(req.url.split("?")[0]);
        let filePath = join(DIST, urlPath);
        if (urlPath.endsWith("/")) filePath = join(filePath, "index.html");
        const missing = !existsSync(filePath) || (await stat(filePath)).isDirectory();
        if (missing) {
          if (extname(urlPath)) { res.statusCode = 404; res.end("not found"); return; }
          filePath = join(DIST, "index.html"); // SPA fallback
        }
        const data = await readFile(filePath);
        res.setHeader("Content-Type", MIME[extname(filePath)] || "application/octet-stream");
        res.end(data);
      } catch (err) {
        res.statusCode = 500; res.end(String(err));
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function capture(page, route) {
  await page.goto(ORIGIN + route, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForSelector("#root h1", { timeout: 15000 });
  // Let react-helmet flush <head> and mount animations begin.
  await page.waitForTimeout(700);
  // Freeze framer-motion entrance states (opacity/transform) into the static HTML
  // so crawlers and no-JS users see visible content. This only mutates the snapshot;
  // the live client re-renders #root from scratch, so animations are unaffected.
  await page.evaluate(() => {
    document.querySelectorAll("#root *").forEach((el) => {
      const s = getComputedStyle(el);
      if (parseFloat(s.opacity) < 1) el.style.opacity = "1";
      if (s.transform && s.transform !== "none") el.style.transform = "none";
    });
  });
  return await page.content();
}

async function main() {
  if (!existsSync(join(DIST, "index.html"))) {
    throw new Error("dist/index.html not found — run `vite build` first.");
  }
  const server = await startServer();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

  // Block every non-localhost request: deterministic, offline-safe, fast.
  await page.route("**/*", (route) => {
    const host = new URL(route.request().url()).hostname;
    return host === "localhost" ? route.continue() : route.abort();
  });

  const results = [];
  for (const route of ROUTES) {
    const html = await capture(page, route);
    results.push({ route, html });
    console.log(`  prerendered ${route.padEnd(16)} ${(html.length / 1024).toFixed(0)}kb`);
  }

  // The home "/" client-redirects to /<lang>; capture the resolved (EN) home and
  // write it as dist/index.html so "/" returns a real 200 page (canonical -> /en).
  const homeHtml = await capture(page, "/");
  results.push({ route: "/", html: homeHtml });
  console.log(`  prerendered ${"/".padEnd(16)} ${(homeHtml.length / 1024).toFixed(0)}kb`);

  await browser.close();
  server.close();

  // Write flat files (en.html, en/work.html) rather than directory indexes
  // (en/index.html). GitHub Pages serves `en.html` for the request `/en` with a
  // 200 and no trailing-slash redirect, so the served URL matches the canonical
  // and sitemap entries exactly (which use no trailing slash).
  for (const { route, html } of results) {
    const outPath = route === "/" ? join(DIST, "index.html") : join(DIST, `${route}.html`);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");
  }
  console.log(`\n✓ prerendered ${results.length} routes into dist/`);
}

main().catch((err) => {
  console.error("prerender failed:", err);
  process.exit(1);
});
