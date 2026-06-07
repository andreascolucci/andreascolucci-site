import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import StatusLine from "@/components/StatusLine";
import { useTranslation } from "@/i18n/useTranslation";
import { useSEO } from "@/hooks/useSEO";

const Contact = () => {
  const seo = useSEO();
  const { t, translations } = useTranslation();
  const c = translations.contactPage;
  const cs = translations.contactSection;

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-6">
      {seo}
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-10">
          <StatusLine />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <span className="label-text block mb-4">{t(c.kicker)}</span>
          <h1 className="heading-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] mb-8">{t(c.title)}</h1>
          <p className="text-lg text-muted-foreground max-w-xl">{t(c.subtitle)}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="md:col-span-5">
            <div className="space-y-10">
              <div>
                <span className="label-text block mb-3">{t(cs.email_label)}</span>
                <a href="mailto:hello@andreascolucci.com" className="text-foreground hover:text-muted-foreground transition-colors story-link">hello@andreascolucci.com</a>
              </div>
              <div>
                <span className="label-text block mb-3">{t(cs.linkedin_label)}</span>
                <a href="https://www.linkedin.com/in/andreascolucci/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors story-link">{t(cs.linkedin_text)}</a>
              </div>
              <div className="border-t border-border pt-10">
                <span className="label-text block mb-3">{t(translations.availability.label)}</span>
                <p className="text-base text-foreground">{t(c.availability_text)}</p>
                <p className="text-sm text-muted-foreground mt-1">{t(c.availability_note)}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
