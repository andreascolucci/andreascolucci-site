import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n/useTranslation";
import { Language } from "@/i18n/translations";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "it", label: "IT" },
  { code: "es", label: "ES" },
];

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const { language, setLanguage } = useLanguage();
  const { t, translations } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const currentLang = lang || language;

  const navItems = [
    { href: `/${currentLang}`, label: t(translations.nav.home) },
    { href: `/${currentLang}/work`, label: t(translations.nav.work) },
    { href: `/${currentLang}/about`, label: t(translations.nav.about) },
    { href: `/${currentLang}/contact`, label: t(translations.nav.contact) },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const switchLanguage = (newLang: Language) => {
    setLanguage(newLang);
    const pathWithoutLang = location.pathname.replace(/^\/(en|it|es)/, "");
    navigate(`/${newLang}${pathWithoutLang || ""}`);
  };

  const isActive = (href: string) => location.pathname === href;

  // Focus trap + Escape key for mobile menu
  useEffect(() => {
    if (!isOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const getFocusable = () => Array.from(menu.querySelectorAll<HTMLElement>(focusableSelectors));

    // Move focus into menu on open
    const focusables = getFocusable();
    focusables[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        hamburgerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const els = getFocusable();
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6 py-5">
        <div className="flex items-center justify-between">
          <Link
            to={`/${currentLang}`}
            className="mono text-xs md:text-[13px] font-medium uppercase tracking-[0.12em] text-foreground hover:text-muted-foreground transition-colors truncate max-w-[180px] lg:max-w-none"
            onClick={closeMenu}
          >
            <span className="hidden lg:inline">Andreas Colucci - Event Tech & Operations Consultant</span>
            <span className="lg:hidden">Andreas Colucci</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      "mono text-xs uppercase tracking-[0.15em] transition-colors story-link",
                      isActive(item.href)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 border-l border-border pl-8">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => switchLanguage(l.code)}
                  className={cn(
                    "mono text-[10px] uppercase tracking-[0.2em] px-2 py-1 transition-colors",
                    currentLang === l.code
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => switchLanguage(l.code)}
                  className={cn(
                    "mono text-[10px] uppercase tracking-[0.15em] px-2 py-2 min-w-[32px] min-h-[32px] flex items-center justify-center transition-colors",
                    currentLang === l.code
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              ref={hamburgerRef}
              onClick={toggleMenu}
              className="p-2 text-foreground hover:text-muted-foreground transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <ul className="container mx-auto px-4 py-8 space-y-6">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "block text-2xl tracking-tight transition-colors py-1",
                      isActive(item.href)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
