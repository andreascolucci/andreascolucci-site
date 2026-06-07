import caseCampovolo from "@/assets/events/campovolo.webp";
import caseKappaFutur from "@/assets/events/kappa-futur.webp";
import caseMonegros from "@/assets/monegros-new.jpg";
import caseSonar from "@/assets/sonar-new.webp";
import caseElrow from "@/assets/case-elrow.jpg";
import caseMotogp from "@/assets/events/motogp.jpg";
import caseOlimpico from "@/assets/events/olimpico.jpg";

export const caseStudyImages = [
  caseCampovolo,
  caseKappaFutur,
  caseMonegros,
  caseSonar,
  caseElrow,
  caseMotogp,
  caseOlimpico,
];

// URL slug per case study, in the same order as the cases / images above.
export const caseSlugs = [
  "campovolo",
  "kappa-futurfestival",
  "monegros-desert-festival",
  "sonar",
  "elrow-town-madrid",
  "motogp-catalunya",
  "stadio-olimpico",
];

export const caseStudyImageFits: (("cover" | "contain") | undefined)[] = [
  undefined,
  undefined,
  undefined,
  "contain",
  undefined,
  undefined,
  undefined,
];
