import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, translations } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const f = translations.footer;
  const currentLang = lang || "en";

  const navLinks = [
    { to: `/${currentLang}`, label: t(translations.nav.home) },
    { to: `/${currentLang}/work`, label: t(translations.nav.work) },
    { to: `/${currentLang}/about`, label: t(translations.nav.about) },
    { to: `/${currentLang}/contact`, label: t(translations.nav.contact) },
    { to: `/${currentLang}/faq`, label: t(translations.nav.faq) },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="px-4 md:px-6 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="md:col-span-3">
              <span className="label-text block mb-6">{t(f.navigation)}</span>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-foreground hover:text-muted-foreground transition-colors text-base story-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="md:col-span-4">
              <span className="label-text block mb-6">{t(f.contact)}</span>
              <div className="space-y-3">
                <a href="mailto:hello@andreascolucci.com" className="text-foreground hover:text-muted-foreground transition-colors text-base story-link inline-block">hello@andreascolucci.com</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="md:col-span-3">
              <span className="label-text block mb-6">{t(f.connect)}</span>
              <a href="https://www.linkedin.com/in/andreascolucci/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors text-base group">
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="md:col-span-2 flex md:justify-end">
              <Link to={`/${currentLang}/contact`} className="inline-flex items-center justify-center w-28 h-28 bg-foreground text-background rounded-full hover:scale-105 transition-transform">
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-center leading-tight whitespace-pre-line">{t(f.work_with_me)}</span>
              </Link>
            </motion.div>
          </div>

          <div className="mt-20 pt-8 border-t border-border flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted-foreground tracking-wider">© {currentYear} Andreas Colucci. {t(f.copyright)}</p>
              <p className="text-xs text-muted-foreground tracking-wider">{t(f.tagline)}</p>
            </div>
            <a
              href="https://logichedinamiche.it/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sito realizzato da Logiche Dinamiche"
              className="group inline-flex items-center justify-center gap-2.5 self-center"
            >
              <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Powered by</span>
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-foreground transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                style={{ color: "#C6F24E" }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                  <g transform="skewX(-7)" stroke="currentColor" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8 V32 H22" />
                    <path d="M25 8 V32" />
                    <path d="M25 8 H28 A12 12 0 0 1 28 32 H25" />
                  </g>
                  <circle cx="11" cy="8.2" r="2.6" fill="currentColor" />
                </svg>
              </span>
              <span className="text-sm font-medium text-foreground">
                Logiche <span className="font-semibold">Dinamiche</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
