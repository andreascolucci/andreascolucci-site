import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

// Lazy-load the interactive map: its react-simple-maps bundle and the ~756KB
// world-atlas topojson are pulled in only when the section nears the viewport,
// keeping them off the home page's initial load path.
const WorldMap = lazy(() => import("@/components/WorldMap"));

const GlobalExperienceSection = () => {
  const { t, translations } = useTranslation();
  const g = translations.globalExperience;
  const mapRef = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShowMap(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-20">
          <span className="label-text block mb-4">{t(g.label)}</span>
          <h2 className="heading-display text-3xl md:text-5xl">{t(g.title)}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="mb-20 max-w-3xl">
          <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-foreground mb-6">
            {t(g.stat1)}
            <br />
            {t(g.stat2)}
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t(g.description)}</p>
        </motion.div>

        <div ref={mapRef} className="min-h-[300px]">
          {showMap && (
            <Suspense fallback={null}>
              <WorldMap />
            </Suspense>
          )}
        </div>
      </div>
    </section>
  );
};

export default GlobalExperienceSection;
