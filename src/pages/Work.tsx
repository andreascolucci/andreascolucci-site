import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import CaseStudyCard from "@/components/CaseStudyCard";
import { useTranslation } from "@/i18n/useTranslation";
import { useSEO } from "@/hooks/useSEO";
import { caseStudyImages, caseStudyImageFits, caseSlugs } from "@/data/caseStudyImages";

const Work = () => {
  const seo = useSEO();
  const { lang } = useParams<{ lang: string }>();
  const { t, language, translations } = useTranslation();
  const w = translations.workPage;
  const cs = translations.caseStudies;

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-6">
      {seo}
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <span className="label-text block mb-4">{t(w.kicker)}</span>
          <h1 className="heading-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] mb-8">{t(w.title)}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{t(w.subtitle)}</p>
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
      </div>
    </main>
  );
};

export default Work;
