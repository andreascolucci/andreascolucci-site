import { motion, useReducedMotion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import StatusLine from "@/components/StatusLine";
import StatBlock from "@/components/StatBlock";

const HeroSection = () => {
  const { t, translations } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const h = translations.hero;
  const reduce = useReducedMotion();

  // Line-by-line headline reveal (clipped). Static when reduced motion.
  const line = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { y: "115%" },
          animate: { y: "0%" },
          transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  const fade = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } };

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-6 pt-24 pb-14">
      <div className="container mx-auto w-full">
        <motion.div {...fade(0)}>
          <StatusLine />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-14 items-center mt-10 md:mt-14">
          {/* ── Left: kinetic headline + intent ───────────────────────── */}
          <div>
            <motion.span
              {...fade(0.1)}
              className="heading-display block text-xl md:text-2xl text-muted-foreground mb-6"
            >
              {t(h.name)}
            </motion.span>

            <h1 className="heading-display text-[clamp(2.2rem,5.2vw,4.8rem)] leading-[0.96] mb-8">
              <span className="block overflow-hidden pb-[0.05em]">
                <motion.span className="block" {...line(0.15)}>
                  {t(h.headline1)}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.05em]">
                <motion.span className="block" {...line(0.28)}>
                  {t(h.headline2)}
                </motion.span>
              </span>
            </h1>

            <motion.p
              {...fade(0.5)}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-6 leading-relaxed"
            >
              {t(h.subtitle)}
            </motion.p>

            <motion.p {...fade(0.6)} className="text-base md:text-lg text-foreground max-w-xl mb-12 leading-relaxed">
              {t(h.cta_line)}
            </motion.p>

            <motion.div {...fade(0.7)} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12">
              <Link
                to={`/${lang || "en"}/contact`}
                className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors"
              >
                {t(h.cta_primary)}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="https://www.linkedin.com/in/andreascolucci/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] border border-foreground text-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
              >
                LinkedIn
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.div {...fade(0.85)} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <p className="text-sm text-muted-foreground">{t(h.availability)}</p>
              <a
                href="mailto:hello@andreascolucci.com"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors story-link"
              >
                hello@andreascolucci.com
              </a>
            </motion.div>
          </div>

          {/* ── Right: blueprint backdrop + data readout (desktop) ─────── */}
          <div className="hidden lg:block relative">
            <div className="precision-grid absolute -inset-6 opacity-60" aria-hidden="true" />
            <span
              className="mono absolute -top-3 left-0 text-[10px] tracking-[0.25em] text-muted-foreground"
              aria-hidden="true"
            >
              OPS / SCALE
            </span>
            <StatBlock className="relative bg-background" />
          </div>
        </div>

        {/* data readout (mobile / tablet) */}
        <div className="lg:hidden mt-12 relative">
          <div className="precision-grid absolute -inset-4 opacity-50" aria-hidden="true" />
          <StatBlock className="relative bg-background" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
