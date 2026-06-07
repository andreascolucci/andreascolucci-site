import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { Language } from "@/i18n/translations";

type ServiceItemBase = {
  title: Record<Language, string>;
  closing: Record<Language, string>;
};
type ServiceItemWithDescription = ServiceItemBase & { description: Record<Language, string> };
type ServiceItemWithList = ServiceItemBase & { items: Record<Language, readonly string[]> };
type ServiceItem = ServiceItemWithDescription | ServiceItemWithList;

const ServicesSection = () => {
  const { t, language, translations } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const s = translations.services;

  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-20">
          <span className="label-text block mb-4">{t(s.label)}</span>
          <h2 className="heading-display text-3xl md:text-5xl">{t(s.title)}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {(s.items as ServiceItem[]).map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="relative border-t border-border pt-8 flex flex-col">
              <span className="mono absolute top-0 right-0 -translate-y-[150%] text-[10px] tracking-[0.25em] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4 tracking-tight">{t(service.title)}</h3>
              {"description" in service && (
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">{t((service as ServiceItemWithDescription).description)}</p>
              )}
              {"items" in service && (
                <ul className="space-y-2 mb-6">
                  {(service as ServiceItemWithList).items[language].map((item) => (
                    <li key={item} className="text-base md:text-lg text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 bg-foreground rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-base md:text-lg text-foreground font-semibold leading-relaxed mt-auto pt-4 border-t border-border/50">{t(service.closing)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-base text-muted-foreground">{t(s.cta_text)}</p>
          <Link to={`/${lang || "en"}/contact`} className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors self-start">
            {t(s.cta_button)}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
