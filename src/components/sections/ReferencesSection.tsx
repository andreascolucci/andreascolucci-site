import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

const ReferencesSection = () => {
  const { t, translations } = useTranslation();
  const r = translations.references;

  return (
    <section className="py-28 md:py-36 px-4 md:px-6 bg-background border-t border-border">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-20">
          <span className="label-text block mb-4">{t(r.label)}</span>
          <h2 className="heading-display text-3xl md:text-5xl leading-[1]">{t(r.title)}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {r.items.map((ref, index) => (
            <motion.div key={ref.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.15 }} viewport={{ once: true }} className="relative border-t-2 border-border pt-6">
              <span className="mono block mb-6 text-[10px] tracking-[0.25em] text-muted-foreground"><span className="text-signal">//</span> reference {String(index + 1).padStart(2, "0")}</span>
              <blockquote className="text-base md:text-lg leading-relaxed text-foreground mb-8">{t(ref.quote)}</blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{ref.name}</p>
                <p className="text-base text-muted-foreground">{t(ref.role)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
