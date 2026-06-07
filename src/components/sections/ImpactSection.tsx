import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";
import { useCountUp } from "@/hooks/useCountUp";

const parseStat = (v: string) => ({
  num: parseInt(v.replace(/[^0-9]/g, ""), 10) || 0,
  suffix: v.replace(/[0-9.,]/g, ""),
});

const StatFigure = ({ value, label, index, animate }: { value: string; label: string; index: number; animate: boolean }) => {
  const { num, suffix } = parseStat(value);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const n = useCountUp(num, animate && inView, 1100 + index * 130);
  return (
    <motion.div
      ref={ref}
      initial={animate ? { opacity: 0, y: 30 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="relative border-t-2 border-border pt-8"
    >
      <span className="mono absolute top-0 right-0 -translate-y-[140%] text-[10px] tracking-[0.25em] text-muted-foreground">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p data-final={value} className="mono tabular-nums text-foreground text-4xl sm:text-5xl md:text-6xl leading-none mb-4 tracking-tight">
        {(animate && inView ? n : num).toLocaleString("en-US")}
        <span className="text-signal">{suffix}</span>
      </p>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{label}</p>
    </motion.div>
  );
};

const ImpactSection = () => {
  const { t, translations } = useTranslation();
  const reduce = useReducedMotion();
  const imp = translations.impact;

  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-20 flex items-end justify-between gap-6">
          <div>
            <span className="label-text block mb-4">{t(imp.label)}</span>
            <h2 className="heading-display text-3xl md:text-5xl">{t(imp.title)}</h2>
          </div>
          <span className="mono hidden md:block text-[10px] tracking-[0.25em] text-muted-foreground">track record / verified</span>
        </motion.div>

        <div className="relative">
          <div className="precision-grid absolute -inset-x-4 -inset-y-2 opacity-40 pointer-events-none" aria-hidden="true" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 md:gap-12">
            {imp.stats.map((stat, index) => (
              <StatFigure key={stat.value} value={stat.value} label={t(stat.label)} index={index} animate={!reduce} />
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="mt-20 pt-10 border-t border-border max-w-3xl">
          <p className="text-lg md:text-xl font-light leading-relaxed text-foreground">
            {t(imp.statement1)}
            <br />
            <span className="text-muted-foreground">{t(imp.statement2)}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
