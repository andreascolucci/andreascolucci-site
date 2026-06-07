import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const Work = lazy(() => import("./pages/Work"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Faq = lazy(() => import("./pages/Faq"));
const WorkDetail = lazy(() => import("./pages/WorkDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const SUPPORTED_LANGS: Language[] = ["en", "it", "es"];

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const language = SUPPORTED_LANGS.includes(lang as Language) ? (lang as Language) : "en";

  return (
    <LanguageProvider initialLanguage={language} key={language}>
      <ScrollToTop />
      <Navigation />
      {children}
      <Footer />
    </LanguageProvider>
  );
};

const getDefaultLanguage = (): Language => {
  const browserLang = navigator.language?.split("-")[0]?.toLowerCase();
  if (SUPPORTED_LANGS.includes(browserLang as Language)) {
    return browserLang as Language;
  }
  return "en";
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Navigate to={`/${getDefaultLanguage()}`} replace />} />
              <Route path="/:lang" element={<LanguageWrapper><Index /></LanguageWrapper>} />
              <Route path="/:lang/work" element={<LanguageWrapper><Work /></LanguageWrapper>} />
              <Route path="/:lang/work/:slug" element={<LanguageWrapper><WorkDetail /></LanguageWrapper>} />
              <Route path="/:lang/about" element={<LanguageWrapper><About /></LanguageWrapper>} />
              <Route path="/:lang/contact" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
              <Route path="/:lang/faq" element={<LanguageWrapper><Faq /></LanguageWrapper>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
