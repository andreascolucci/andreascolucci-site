import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CaseStudyCard from "@/components/CaseStudyCard";
import { useTranslation } from "@/i18n/useTranslation";
import { caseStudyImages, caseStudyImageFits, caseSlugs } from "@/data/caseStudyImages";

const CaseStudiesSection = () => {
  const { t, language, translations } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const cs = translations.caseStudies;

  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-20">
          <span className="label-text block mb-4">{t(cs.label)}</span>
          <h2 className="heading-display text-3xl md:text-5xl">{t(cs.title)}</h2>
        </motion.div>

        <div>
          {cs.cases.map((study, index) => (
            <CaseStudyCard
              key={study.number}
              number={study.number}
              title={t(study.title)}
              highlight={t(study.highlight)}
              context={t(study.context)}
              details={study.details[language]}
              role={t(study.role)}
              outcome={t(study.outcome)}
              image={caseStudyImages[index]}
              index={index}
              imageFit={caseStudyImageFits[index]}
              slug={caseSlugs[index]}
              lang={lang || "en"}
            />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-base md:text-lg text-foreground">{t(cs.cta_text)}</p>
          <Link to={`/${lang || "en"}/contact`} className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors self-start">
            {t(cs.cta_button)}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
