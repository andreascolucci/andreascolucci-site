import { useTranslation } from "@/i18n/useTranslation";

// Monospace "console" status line with a pulsing signal dot.
const StatusLine = () => {
  const { t, translations } = useTranslation();
  return (
    <div className="flex items-center gap-3 mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="signal-dot" aria-hidden="true" />
      <span>{t(translations.hero.status)}</span>
    </div>
  );
};

export default StatusLine;
