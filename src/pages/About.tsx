import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";
import { useSEO } from "@/hooks/useSEO";

const About = () => {
  const seo = useSEO();
  const { t, language, translations } = useTranslation();
  const a = translations.aboutPage;
  const principles = a.principles[language];

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-6">
      {seo}
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="label-text block mb-4">{t(a.kicker)}</span>
          <h1 className="heading-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] mb-8">{t(a.title)}</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_18rem] gap-12 lg:gap-16 mb-24 items-start">
          {/* Narrative */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-2xl space-y-8">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">{t(a.intro)}</p>
            {a.bodyParagraphs[language].map((p, i) => (
              <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </motion.div>

          {/* Spec rail */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="precision-grid absolute -inset-4 opacity-40 pointer-events-none" aria-hidden="true" />
            <div className="relative border border-border bg-background">
              <span className="absolute -top-px -left-px w-3.5 h-3.5 border-t-2 border-l-2 border-signal" aria-hidden="true" />
              <div className="px-5 pt-4 pb-3 border-b border-border">
                <span className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">// {t(a.specs_label)}</span>
              </div>
              <dl>
                {a.specs.map((s, i) => (
                  <div key={i} className="flex items-baseline justify-between gap-4 px-5 py-3 border-t border-border first:border-t-0">
                    <dt className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t(s.label)}</dt>
                    <dd className="mono text-xs md:text-sm text-foreground text-right">{t(s.value)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.aside>
        </div>

        {/* Principles */}
        <div className="border-t border-border pt-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-12">
            <span className="label-text block mb-4">{t(a.principles_label)}</span>
            <h2 className="heading-display text-2xl md:text-4xl">{t(a.principles_title)}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {principles.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.08 }} viewport={{ once: true }} className="border-t border-border pt-6">
                <h3 className="text-base md:text-lg font-medium text-foreground mb-2 tracking-tight">{item.title}</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
