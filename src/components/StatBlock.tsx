import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";
import { useCountUp } from "@/hooks/useCountUp";

type Stat = { value: number; suffix: string; label: Record<"en" | "it" | "es", string> };

const StatRow = ({ stat, label, enabled, index }: { stat: Stat; label: string; enabled: boolean; index: number }) => {
  const n = useCountUp(stat.value, enabled, 1000 + index * 180);
  const final = `${stat.value}${stat.suffix}`;
  return (
    <div className="flex items-baseline justify-between gap-4 border-t border-border py-5 first:border-t-0">
      <span
        data-final={final}
        className="mono tabular-nums text-foreground text-[2.75rem] md:text-5xl lg:text-[3.4rem] leading-none tracking-tight"
      >
        {n}
        <span className="text-signal">{stat.suffix}</span>
      </span>
      <span className="mono text-[10px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground text-right max-w-[8.5rem] leading-snug">
        {label}
      </span>
    </div>
  );
};

const StatBlock = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  const { t, translations } = useTranslation();
  const stats = translations.hero.stats as Stat[];

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, clipPath: "inset(0 100% 0 0)" }}
      animate={reduce ? undefined : { opacity: 1, clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      className={`relative border border-border ${className}`}
    >
      {/* crop marks */}
      <span className="absolute -top-px -left-px w-3.5 h-3.5 border-t-2 border-l-2 border-signal" aria-hidden="true" />
      <span className="absolute -bottom-px -right-px w-3.5 h-3.5 border-b-2 border-r-2 border-foreground/40" aria-hidden="true" />

      {/* header strip */}
      <div className="flex items-center justify-between px-5 md:px-6 pt-4 pb-3 border-b border-border">
        <span className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">// track record</span>
        <span className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">live</span>
      </div>

      <div className="px-5 md:px-6 py-1">
        {stats.map((s, i) => (
          <StatRow key={i} stat={s} label={t(s.label)} enabled={!reduce} index={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default StatBlock;
