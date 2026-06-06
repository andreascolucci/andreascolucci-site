import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";
import { useSEO } from "@/hooks/useSEO";

const Faq = () => {
  const seo = useSEO();
  const { t, translations } = useTranslation();
  const f = translations.faqPage;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: f.items.map((item) => ({
      "@type": "Question",
      name: t(item.q),
      acceptedAnswer: { "@type": "Answer", text: t(item.a) },
    })),
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-6">
      {seo}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="label-text block mb-4">{t(f.kicker)}</span>
          <h1 className="heading-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] mb-8">{t(f.title)}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{t(f.subtitle)}</p>
        </motion.div>

        <div className="max-w-3xl border-t border-border">
          {f.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
              viewport={{ once: true }}
              className="border-b border-border py-8"
            >
              <h2 className="heading-display text-xl md:text-2xl mb-3">{t(item.q)}</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">{t(item.a)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Faq;
