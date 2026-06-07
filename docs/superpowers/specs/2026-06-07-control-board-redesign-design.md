# Design spec — "Control board editoriale" restyle

- **Date:** 2026-06-07
- **Status:** Approved direction (brainstorming), pending implementation
- **Site:** andreascolucci.com (React + Vite SPA, prerendered, trilingual EN/IT/ES)
- **Branch:** `redesign-control-board`

## Goal

Evolve the current light editorial design into something **distinctive and "engineered"** that
expresses Andreas's domain — control of complex, high-pressure event operations at scale —
while keeping its **understated authority** (audience: festival/event directors, not SMBs).

Not a flashy agency look; not a dark rebuild. A *distinctive evolution* of the existing DNA.

## Locked decisions (from brainstorming)

1. **Ambition:** distinctive evolution (keep editorial DNA, add a real signature + targeted motion).
2. **Signature concept:** precision **operational grid** + **data-as-design** (numbers as protagonists) + **kinetic typography**.
3. **Palette:** keep light/monochrome base + **ONE warm "signal" accent** (amber/orange), used surgically.

## Design system — "control board editoriale"

### Tokens
- **Base palette:** unchanged — `--background: 0 0% 98%`, `--foreground: 0 0% 8%`, hairline `--border: 0 0% 88%`. Sharp corners (`--radius: 0`) kept.
- **Signal accent (new):** a warm signal orange, starting value ~`#EA580C` (HSL ≈ `18 90% 48%`), exposed as `--signal`. Tune exact hue on preview. **Usage budget: ≤ ~3 spots per viewport** — `● live` dot, the *active* state of counting numbers, one key rule/underline, link-hover. Never as a fill for large areas.
- **Type:**
  - Display: **Playfair Display** (kept) — headlines.
  - Body: **Inter** (kept).
  - **NEW — Mono:** for data, labels, status, coordinates. Start with a system mono stack (`ui-monospace, SFMono-Regular, Menlo, monospace`, zero extra load); optionally self-host a refined mono (e.g. Geist/IBM Plex Mono) later if it earns its weight. Exposed as a `.mono` / `font-mono` utility.
- **Precision grid:** thin hairline grid (existing border color) with small coordinate **ticks** and optional monospace coordinate labels. Used as: hero right-side motif, section structure, and the frame around data blocks.

### Components (new / reworked)
- **StatusLine** — top, monospace, small: e.g. `AVAILABLE — SELECTED PROJECTS 2026   ● live`. The `●` uses `--signal` with a slow pulse. Pulls from existing availability copy (no new content).
- **KineticHeadline** — wraps the existing headline; reveals **line by line** (clip/mask + slight `y` + micro weight/tracking settle). Content unchanged.
- **StatBlock / DataGrid** — the marquee numbers (`300+` events, `20+` countries, `110K` / `160K` peaks) as monospace figures with labels, inside the precision grid, that **count up** when they enter the viewport. **Real final values live in the HTML markup** (animation only enhances). Active digit / final flash uses `--signal`.
- **PrecisionGrid** — decorative blueprint grid (CSS background hairlines + tick marks) that **draws in** on load; fills the empty hero right half and recurs as a motif.
- **Micro-interactions** — refined hover on links/buttons (signal underline draw, arrow shift), consistent rhythm.

## Per-page application

- **Home (Phase 1 — the showcase):** new hero = StatusLine + KineticHeadline (left) + PrecisionGrid with StatBlock (right, fills today's void). Existing CTAs/availability kept, polished hovers.
- **Work (Phase 2):** the 7 case studies in a **precise grid**; each card gains a monospace **data micro-line** (`event · year · location · capacity`). (Note: the underlying per-event facts may need confirming — keep to facts already on the site; do not invent.)
- **About (Phase 3):** narrative kept; the empty right column becomes a **technical "spec rail"** of facts (role, years, events, countries, education, languages) in mono — reinforces the data motif and uses dead space.
- **FAQ / Contact (Phase 4):** monospace section index + light "console" framing; FAQ Q&A and FAQPage schema unchanged.

## Motion spec

Signature moments only (not motion everywhere):
- **Hero load sequence:** PrecisionGrid draws in (~400ms) → StatusLine fades → headline reveals line-by-line (stagger ~80–120ms) → StatBlock counts up (~800–1200ms, ease-out).
- **On scroll:** sections reveal (existing `whileInView` pattern, refined); StatBlocks on other pages count up when in view (`once: true`).
- **Hovers:** signal underline draw, arrow translate.
- **Tech:** **CSS-first + framer-motion** (already in the stack). **No GSAP** — the count-up + mask reveal + grid draw are achievable with framer-motion/CSS and keep the perf budget. Count-up via a small hook (`framer-motion` `animate`/`useMotionValue`) or minimal custom hook.

## Guardrails (quality bar — informed by LD lessons)

- **`prefers-reduced-motion`:** full static fallback — final headline visible, numbers show final value instantly, grid static. No essential content depends on motion.
- **No layout shift (CLS):** reserve space for grid/stat blocks; count-up animates a fixed-width field.
- **SEO/AEO intact:** the **real numbers and all copy stay in the HTML** (the prerender captures final state; count-up never leaves `0` in the markup). No change to existing JSON-LD, meta, hreflang, prerender route list, sitemap, robots, llms.txt.
- **Prerender compatible:** motion is client-side; `scripts/prerender.mjs` already forces final visible state into the static HTML. Verify the captured home shows the real numbers + full headline (CI grep safety net still passes).
- **Performance:** keep Lighthouse ≥ current; no heavy new deps (at most one self-hosted mono font, deferred). Respect the existing prerender + vendor-split setup.
- **Trilingual:** all new chrome (StatusLine, labels) localized via `translations.ts`.

## Tech approach

- Reuse Tailwind tokens + `src/index.css` layer; add `--signal` and a `.mono` utility.
- New components under `src/components/` (StatusLine, KineticHeadline, StatBlock, PrecisionGrid).
- Wire into `HeroSection.tsx` first; data values sourced from existing `translations.ts` stats (no invented facts).
- Keep everything else (routing, SEO hook, prerender, structured data) untouched.

## Phasing & rollout

1. **Phase 1 — Home hero** (this iteration): build, verify in local preview, show Andreas. **No deploy until he approves the look.**
2. Phase 2 — Work grid + data lines.
3. Phase 3 — About spec rail.
4. Phase 4 — FAQ/Contact polish + cross-page consistency pass.

Each phase: build → local preview verification (no console errors, reduced-motion fallback, prerender shows real content) → Andreas approves → deploy.

## Success criteria

- Distinctive and memorable, yet still reads as senior/authoritative (not flashy/agency).
- Fills the current "empty/static" feel; the data + grid express scale and control.
- Zero regression in SEO/AEO (numbers in markup, schema/meta/prerender intact).
- `prefers-reduced-motion` works; no CLS; performance held.

## Non-goals

- No dark rebuild; no accent beyond the single signal color; no animation on everything; no GSAP.
- No copy rewrites or new factual claims; no changes to the structured-data/AEO work just shipped.
