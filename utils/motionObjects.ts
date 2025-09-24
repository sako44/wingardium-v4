import { Scale } from "lucide-react";

//AnimatedHeader.tsx
export const animatedHeaderOne = {
  initial: { y: -30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    duration: 1.2,
    type: "spring",
    delay: 0.2,
  },
  viewport: { once: true },
};

//Faq.tsx +Form.tsx
export const animatedBenfitOne = {
  initial: { x: -30, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: {
    duration: 1.5,
    type: "spring",
    delay: 0.5,
  },
  viewport: { once: true },
};

//contac.tsx + form.tsx
export const animatedContactLeft = {
  initial: { x: -30, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: {
    duration: 1.5,
    type: "spring",
    delay: 0.7,
  },
  viewport: { once: true },
};
export const animatedContactRight = {
  initial: { x: 30, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: {
    duration: 1.5,
    type: "spring",
    delay: 0.9,
  },
  viewport: { once: true },
};

//Footer.tsx
export const animatedFooter = {
  initial: { x: -20, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: {
    duration: 1.2,
    type: "spring",
    delay: 0.5,
  },
  viewport: { once: true },
};

//Landing.tsx

export const animatedLandingLogo = {
  initial: { y: -30, opacity: 0, rotateY: 0, scrollY: 120 },
  whileInView: { y: 0, opacity: 1, rotateY: 360, scrollY: 0 },
  transition: {
    duration: 2.5,
    type: "spring",
    delay: 0.4,
  },
  viewport: { once: true },
};

export const animatedLandingOne = {
  initial: { y: -15, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    duration: 0.8,
    type: "spring",
    bounce: 0.1,
    delay: 0.4,
  },
  viewport: { once: true },
};
export const animatedLeftOne = {
  initial: { x: -30, y: -30, opacity: 0, rotateZ: 0 },
  whileInView: { x: 0, y: 0, opacity: 1, rotateZ: 10 },
  transition: {
    duration: 1.5,
    type: "spring",
    delay: 0.2,
  },
  viewport: { once: true },
};
export const animatedLeftTwo = {
  initial: { x: -30, y: 30, opacity: 0, rotateZ: 0 },
  whileInView: { x: 0, y: 0, opacity: 1, rotateZ: 3 },
  transition: {
    duration: 1.5,
    type: "spring",
    delay: 0.2,
  },
  viewport: { once: true },
};
export const animatedRightOne = {
  initial: { x: 30, y: 30, opacity: 0, rotateZ: 0 },
  whileInView: { x: 0, y: 0, opacity: 1, rotateZ: -3 },
  transition: {
    duration: 1.5,
    type: "spring",
    delay: 0.2,
  },
  viewport: { once: true },
};
export const animatedRightTwo = {
  initial: { x: 30, y: -30, opacity: 0, rotateZ: 0 },
  whileInView: { x: 0, y: 0, opacity: 1, rotateZ: -12 },
  transition: {
    duration: 1.5,
    type: "spring",
    delay: 0.2,
  },
  viewport: { once: true },
};

export const animatedLandingTwo = {
  initial: { y: -15, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    duration: 0.8,
    type: "spring",
    bounce: 0.1,
    delay: 0.6,
  },
  viewport: { once: true },
};
export const animatedLandingThree = {
  initial: { y: -10, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    duration: 0.8,
    type: "spring",
    bounce: 0.1,
    delay: 0.7,
  },
  viewport: { once: true },
};

//NavBar.tsx
export const animatedNavBar = {
  initial: { y: -10, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    duration: 1,
    type: "spring",
    delay: 0.5,
  },
  viewport: { once: true },
};

//Pricing.tsx
export const animatedPlansOne = {
  initial: { y: -30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    duration: 1.2,
    type: "spring",
    delay: 0.4,
  },
  viewport: { once: true },
};
export const animatedPlansTwo = {
  initial: { y: -20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    duration: 1.5,
    type: "spring",
    delay: 0.5,
  },
  viewport: { once: true },
};

//Reviews.tsx
export const animatedReviews = {
  initial: { y: -30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    duration: 1.2,
    type: "spring",
    delay: 0.1,
  },
  viewport: { once: true },
};

//features.tsx
export const animatedFeatureCard = {
  initial: { y: -30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    duration: 1,
    type: "spring",
  },
  viewport: { once: true },
};

//services.tsx
export const animatedFeaturesHero = {
  initial: { y: -30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    duration: 1.2,
    type: "spring",
    delay: 0.5,
  },
  viewport: { once: true },
};
export const animatedFeaturesLeft = {
  initial: { x: -30, y: -15, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  transition: {
    duration: 1.2,
    type: "spring",
    delay: 0.2,
  },
  viewport: { once: true },
};
export const animatedFeaturesRight = {
  initial: { x: 30, y: 15, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  transition: {
    duration: 1.2,
    type: "spring",
    delay: 0.2,
  },
  viewport: { once: true },
};

//whoShouldUse.tsx
export const whoShouldUseLeft = {
  initial: { x: -30, y: -15, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  transition: {
    duration: 1.2,
    type: "spring",
    delay: 0.2,
  },
  viewport: { once: true },
};
export const whoShouldUseRight = {
  initial: { x: 30, y: 15, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  transition: {
    duration: 1.2,
    type: "spring",
    delay: 0.2,
  },
  viewport: { once: true },
};

// Digitalization.tsx
export const digitalizationTitle = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 0, y: 30 },
  transition: {
    duration: 1.2,
    type: "spring",
    delay: 1.5,
  },
  viewport: { once: true },
};

export const digitalizationHero = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1.2,
    type: "spring",
    delay: 2.1,
  },
  viewport: { once: true },
};

export const digitalizationTextOne = {
  initial: { opacity: 0, y: 200, rotateY: 0 },
  whileInView: { opacity: 1, y: 0, rotateY: 360 },
  transition: {
    duration: 2.5,
    type: "spring",
    delay: 2,
  },
  viewport: { once: true },
};
export const digitalizationTextTwo = {
  initial: { opacity: 0, x: 200, rotateY: 0 },
  whileInView: { opacity: 1, x: 0, rotateY: 360 },
  transition: {
    duration: 2.5,
    type: "spring",
    delay: 2,
  },
  viewport: { once: true },
};
export const digitalizationTextThree = {
  initial: { opacity: 0, x: -200, rotateY: 0 },
  whileInView: { opacity: 1, x: 0, rotateY: 360 },
  transition: {
    duration: 2.5,
    type: "spring",
    delay: 2,
  },
  viewport: { once: true },
};
export const digitalizationTextFour = {
  initial: { opacity: 0, y: -200, rotateY: 0 },
  whileInView: { opacity: 1, y: 0, rotateY: 360 },
  transition: {
    duration: 2.5,
    type: "spring",
    delay: 2,
  },
  viewport: { once: true },
};

//Offer.tsx
export const animatedOfferText = {
  initial: { y: -50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    duration: 1.2,
    type: "spring",
    delay: 0.4,
  },
  viewport: { once: true },
};
