"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import AnimatedHeader from "./AnimatedHeader";
import Container from "./Container";

import {
  animatedFeatureCard,
  animatedFeaturesHero,
} from "@/utils/motionObjects";
import MotionDiv, { MotionH2 } from "./MotionDiv";

// ==================== Features Component ====================
export default function Features() {
  const t = useTranslations("Features");
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const featuresData = FeaturesData();

  const featuresDetails = [
    { title: t("features_sectionOne_hero") },
    { title: t("features_sectionTwo_hero") },
    { title: t("features_sectionThree_hero") },
    { title: t("features_sectionFour_hero") },
    { title: t("features_sectionFive_hero") },
    { title: t("features_sectionSix_hero") },
  ];

  const handleFeatureChange = (id: number) => {
    if (activeFeature === id || isAnimating) return;

    setIsAnimating(true);
    setActiveFeature(id);

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Auto-rotate features every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setActiveFeature((prev) => (prev + 1) % featuresData.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [featuresData.length, isAnimating]);

  return (
    <Container clas="my-16 lg:mt-12 lg:mb-24 overflow-hidden">
      <div className="flex flex-col space-y-10 lg:space-y-16">
        <div className="text-center">
          <AnimatedHeader title={t("title")} />

          <div className="space-y-6 mt-8">
            <MotionH2
              {...animatedFeaturesHero}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-fontNunito 
              font-bold mx-auto max-w-[90%] lg:max-w-[80%]"
            >
              {t("heroOne")}
            </MotionH2>

            <div className="mx-auto max-w-[90%] md:max-w-[80%] lg:max-w-[70%] space-y-4">
              <MotionH2
                {...animatedFeaturesHero}
                className="text-lg md:text-xl lg:text-2xl text-secondary
                font-fontNunito font-medium"
              >
                {t("heroTwo")}
              </MotionH2>

              <MotionH2
                {...animatedFeaturesHero}
                className="text-base md:text-lg lg:text-xl text-gray-600
                font-fontNunito"
              >
                {t("heroThree")}
              </MotionH2>
            </div>
          </div>
        </div>

        {/* Feature Image Section - Moved up for better visual flow */}
        <div
          id={t("sectionTitle")}
          className="relative mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <div
            className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl 
            overflow-hidden bg-primary"
          >
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 md:p-10 text-white">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                  {featuresDetails[activeFeature].title}
                </h3>
                <p className="text-lg sm:text-xl opacity-90 max-w-2xl">
                  {featuresData[activeFeature].texts[0]}
                </p>
              </div>
            </div>
          </div>

          {/* Feature navigation indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuresData.map((feature) => (
              <button
                key={feature.id}
                onClick={() => handleFeatureChange(feature.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeFeature === feature.id
                    ? "bg-primary w-10"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View feature: ${feature.title}`}
              />
            ))}
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuresData.map((item, index) => (
              <MotionDiv
                {...animatedFeatureCard}
                transition={{
                  ...animatedFeatureCard.transition,
                  delay: index * 0.15,
                }}
                key={item.id}
                onClick={() => handleFeatureChange(item.id)}
                className={`
                  relative overflow-hidden group cursor-pointer
                  bg-white rounded-xl shadow-sm hover:shadow-md
                  border-2 transition-all duration-300 ease-in-out p-6 sm:p-8
                  ${
                    activeFeature === item.id
                      ? "border-primary"
                      : "border-gray-100 hover:border-primary/50"
                  }
                `}
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`
                      w-12 h-12 flex items-center justify-center rounded-lg
                      ${
                        activeFeature === item.id
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary group-hover:bg-primary/20"
                      }
                      transition-colors duration-300
                    `}
                    >
                      <i className={`${item.icon} text-2xl`}></i>
                    </div>
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <h4
                  className="text-lg font-bold text-gray-800 mb-4 min-h-[3.5rem] 
                 group-hover:text-primary transition-colors duration-300"
                >
                  {item.hero}
                </h4>

                <ul className="space-y-3 mb-6">
                  {item.texts.map((text, idx) => (
                    <li key={idx} className="flex items-center h-[40px]">
                      <span className="text-primary mr-2 ">•</span>
                      <span className="text-gray-600 text-sm">{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-end">
                  <button
                    className={`
                    inline-flex items-center text-sm font-medium
                    ${
                      activeFeature === item.id
                        ? "text-primary"
                        : "text-gray-600 group-hover:text-primary"
                    }
                    transition-colors duration-300
                  `}
                  >
                    {item.detail}
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Subtle indicator for active card */}
                <div
                  className={`
                  absolute bottom-0 left-0 h-1 bg-primary transition-all duration-500 ease-out
                  ${
                    activeFeature === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-1/3"
                  }
                `}
                ></div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

// ==================== Features Data ====================
function FeaturesData() {
  const t = useTranslations("Features");
  const featuresData = [
    {
      id: 0,
      title: t("features_sectionOne_title"),
      hero: t("features_sectionOne_hero"),
      texts: [
        t("features_sectionOne_text1"),
        t("features_sectionOne_text2"),
        t("features_sectionOne_text3"),
        t("features_sectionOne_text4"),
      ],
      detail: t("features_sectionOne_detail"),
      icon: "ri-map-pin-line",
    },
    {
      id: 1,
      title: t("features_sectionTwo_title"),
      hero: t("features_sectionTwo_hero"),
      texts: [
        t("features_sectionTwo_text1"),
        t("features_sectionTwo_text2"),
        t("features_sectionTwo_text3"),
        t("features_sectionTwo_text4"),
      ],
      detail: t("features_sectionTwo_detail"),
      icon: "ri-syringe-line",
    },
    {
      id: 2,
      title: t("features_sectionThree_title"),
      hero: t("features_sectionThree_hero"),
      texts: [
        t("features_sectionThree_text1"),
        t("features_sectionThree_text2"),
        t("features_sectionThree_text3"),
        t("features_sectionThree_text4"),
      ],
      detail: t("features_sectionThree_detail"),
      icon: "ri-plant-line",
    },
    {
      id: 3,
      title: t("features_sectionFour_title"),
      hero: t("features_sectionFour_hero"),
      texts: [
        t("features_sectionFour_text1"),
        t("features_sectionFour_text2"),
        t("features_sectionFour_text3"),
        t("features_sectionFour_text4"),
      ],
      detail: t("features_sectionFour_detail"),
      icon: "ri-shopping-cart-line",
    },
    {
      id: 4,
      title: t("features_sectionFive_title"),
      hero: t("features_sectionFive_hero"),
      texts: [
        t("features_sectionFive_text1"),
        t("features_sectionFive_text2"),
        t("features_sectionFive_text3"),
        t("features_sectionFive_text4"),
      ],
      detail: t("features_sectionFive_detail"),
      icon: "ri-truck-line",
    },
    {
      id: 5,
      title: t("features_sectionSix_title"),
      hero: t("features_sectionSix_hero"),
      texts: [
        t("features_sectionSix_text1"),
        t("features_sectionSix_text2"),
        t("features_sectionSix_text3"),
        t("features_sectionSix_text4"),
      ],
      detail: t("features_sectionSix_detail"),
      icon: "ri-tools-line",
    },
  ];
  return featuresData;
}
