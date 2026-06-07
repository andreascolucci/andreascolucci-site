import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

interface CaseStudyCardProps {
  number: string;
  title: string;
  highlight: string;
  context: string;
  details: readonly string[];
  role: string;
  outcome: string;
  image: string;
  index: number;
  imageFit?: "cover" | "contain";
}

const CaseStudyCard = ({ number, title, highlight, context, details, role, outcome, image, index, imageFit = "cover" }: CaseStudyCardProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { t, translations } = useTranslation();

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);
  const cs = translations.caseStudies;
  const isReversed = index % 2 !== 0;
  const fitClass = imageFit === "contain" ? "object-contain" : "object-cover";

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 md:py-24 border-t border-border"
      >
        {/* Hero image */}
        <motion.div
        className={`relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-12 md:mb-16 cursor-pointer group ${imageFit === "contain" ? "bg-black" : ""}`}
          onClick={() => setLightboxOpen(true)}
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={image}
            alt={`${title} — event operations`}
            loading="lazy"
            width={1920}
            height={1080}
            className={`w-full h-full ${fitClass} transition-transform duration-700 group-hover:scale-105`}
          />
          <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/5 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-foreground/30 to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <span className="mono text-background text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-90">
              <span className="text-signal">//</span> CASE {number}
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 ${isReversed ? 'md:direction-rtl' : ''}`}>
          <div className={`${isReversed ? 'md:col-start-7 md:col-span-6' : 'md:col-span-5'}`} style={{ direction: 'ltr' }}>
            <h3 className="heading-display text-2xl md:text-4xl mb-4 tracking-tight">
              {title}
            </h3>
            <p className="heading-display text-xl md:text-2xl text-muted-foreground mb-6">
              {highlight}
            </p>
            <p className="text-base text-foreground font-medium mb-6 leading-relaxed italic">
              {context}
            </p>
              <ul className="space-y-2">
              {details.map((detail, i) => (
                  <li key={i} className="text-base md:text-lg text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 bg-muted-foreground rounded-full mt-1.5 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${isReversed ? 'md:col-start-1 md:col-span-5 md:row-start-1' : 'md:col-start-7 md:col-span-6'} space-y-8`} style={{ direction: 'ltr' }}>
            <div>
              <span className="label-text block mb-2">{t(cs.role_label)}</span>
                <p className="text-base md:text-lg text-foreground leading-relaxed">{role}</p>
            </div>
            <div>
              <span className="label-text block mb-2">{t(cs.outcome_label)}</span>
                <p className="text-base md:text-lg text-foreground leading-relaxed">{outcome}</p>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-4 md:p-8 cursor-pointer"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-background hover:text-background/70 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <motion.img
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={`${title} — full view`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default CaseStudyCard;
