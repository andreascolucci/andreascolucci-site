import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { caseSlugs, caseStudyImages, caseStudyImageFits } from "@/data/caseStudyImages";

const DOMAIN = "https://andreascolucci.com";

const WorkDetail = () => {
  const { lang = "en", slug = "" } = useParams<{ lang: string; slug: string }>();
  const { t, language, translations } = useTranslation();
  const cs = translations.caseStudies;

  const idx = caseSlugs.indexOf(slug);
  if (idx < 0) return <Navigate to={`/${lang}/work`} replace />;

  const study = cs.cases[idx];
  const image = caseStudyImages[idx];
  const fit = caseStudyImageFits[idx] === "contain" ? "object-contain" : "object-cover";
  const title = t(study.title);
  const url = `${DOMAIN}/${lang}/work/${slug}`;
  const description = `${title} — ${t(study.highlight)}. ${t(study.context)}`.slice(0, 300);

  const caseLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#case`,
    name: title,
    headline: title,
    about: t(study.highlight),
    description: t(study.context),
    inLanguage: language,
    url,
    image: `${DOMAIN}${image}`,
    creator: { "@id": `${DOMAIN}/#person` },
    isPartOf: { "@id": `${DOMAIN}/#website` },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/${lang}` },
      { "@type": "ListItem", position: 2, name: t(cs.title), item: `${DOMAIN}/${lang}/work` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-6">
      <Helmet>
        <title>{`${title} — Andreas Colucci`}</title>
        <html lang={language} />
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${title} — Andreas Colucci`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <link rel="alternate" hrefLang="en" href={`${DOMAIN}/en/work/${slug}`} />
        <link rel="alternate" hrefLang="it" href={`${DOMAIN}/it/work/${slug}`} />
        <link rel="alternate" hrefLang="es" href={`${DOMAIN}/es/work/${slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}/en/work/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(caseLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <div className="container mx-auto">
        <Link
          to={`/${lang}/work`}
          className="mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          {t(cs.back_to_work)}
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <span className="mono block mb-5 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-signal">//</span> CASE {study.number}
          </span>
          <h1 className="heading-display text-[clamp(2.2rem,6vw,5rem)] leading-[0.98] mb-6">{title}</h1>
          <p className="mono text-base md:text-xl text-foreground">{t(study.highlight)}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-16 ${fit === "object-contain" ? "bg-black" : ""}`}
        >
          <img src={image} alt={`${title} — event operations`} width={1920} height={1080} className={`w-full h-full ${fit}`} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 max-w-6xl">
          <div className="space-y-10">
            <div>
              <span className="label-text block mb-3">{t(cs.context_label)}</span>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">{t(study.context)}</p>
            </div>
            <div>
              <span className="label-text block mb-3">{t(cs.role_label)}</span>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t(study.role)}</p>
            </div>
            <div>
              <span className="label-text block mb-3">{t(cs.outcome_label)}</span>
              <p className="text-base md:text-lg text-foreground leading-relaxed">{t(study.outcome)}</p>
            </div>
          </div>

          {/* facts rail */}
          <aside className="relative">
            <div className="precision-grid absolute -inset-4 opacity-40 pointer-events-none" aria-hidden="true" />
            <div className="relative border border-border bg-background">
              <span className="absolute -top-px -left-px w-3.5 h-3.5 border-t-2 border-l-2 border-signal" aria-hidden="true" />
              <div className="px-5 pt-4 pb-3 border-b border-border">
                <span className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">// key facts</span>
              </div>
              <ul>
                {study.details[language].map((d, i) => (
                  <li key={i} className="mono text-xs md:text-sm text-foreground px-5 py-3 border-t border-border first:border-t-0 leading-snug">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-base text-muted-foreground">{t(cs.cta_text)}</p>
          <Link
            to={`/${lang}/contact`}
            className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors self-start"
          >
            {t(cs.cta_button)}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WorkDetail;
