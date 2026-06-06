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

          <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground tracking-wider">© {currentYear} Andreas Colucci. {t(f.copyright)}</p>
            <p className="text-xs text-muted-foreground tracking-wider">{t(f.tagline)}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
