import AnimatedHeader from "./AnimatedHeader";
import Container from "./Container";
import Images from "./images";
import testone from "@/public/photos/testone.png";
import testtwo from "@/public/photos/testtwo.png";
import testthree from "@/public/photos/testthree.png";
import hasatwork from "@/public/photos/hasatwork.png";
import leftupone from "@/public/photos/leftupone.png";
import leftuptwo from "@/public/photos/leftuptwo.png";
import rightupone from "@/public/photos/rightupone.png";
import rightuptwo from "@/public/photos/rightuptwo.png";
import rightupthree from "@/public/photos/rightupthree.png";
import { useTranslations } from "next-intl";
import MotionDiv, { MotionH2 } from "./MotionDiv";
import {
  animatedFeaturesHero,
  animatedFeaturesLeft,
  animatedFeaturesRight,
} from "@/utils/motionObjects";

function Services() {
  const t = useTranslations("Services");

  const leftImages = [
    {
      url: leftupone,
      addClass: "translate-y-[10%] -rotate-6 w-[220px] h-[220px]",
      clas: "object-cover rounded-xl object-top",
    },
    {
      url: leftuptwo,
      addClass:
        "translate-x-[10%] translate-y-[-30%] z-10 rotate-3 w-[240px] h-[220px]",
      clas: "object-cover rounded-xl object-center",
    },
  ];

  const rightImages = [
    {
      url: rightupthree,
      addClass:
        "w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] xl:h-[200px] xl:w-[200px] rounded-xl -ml-24 xl:-ml-10",
      clas: "object-cover",
    },
    {
      url: rightuptwo,
      addClass:
        "w-[170px] h-[150px] lg:w-[200px] lg:h-[200px] xl:h-[250px] z-[10] xl:w-[250px] scale-125 rounded-xl",
      clas: "object-cover",
    },
    {
      url: rightupone,
      addClass:
        "w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] xl:h-[200px] xl:w-[200px] rounded-xl -mr-24 xl:-mr-12",
      clas: "object-cover",
    },
  ];

  const testImages = [
    {
      url: testone,
      addClass: "h-[120px] w-[120px] shadow-xl -rotate-12 rounded-xl",
      clas: "object-cover",
    },
    {
      url: testtwo,
      addClass: "z-[10] h-[120px] w-[120px] -mt-3 shadow-xl rounded-xl",
      clas: "object-cover",
    },
    {
      url: testthree,
      addClass: "h-[120px] w-[120px] shadow-xl rotate-12 rounded-xl",
      clas: "object-cover",
    },
  ];

  return (
    <section className="mt-16 lg:mt-12 overflow-hidden">
      <Container clas=" flex flex-col space-y-10 mb-12 ">
        <AnimatedHeader title={t("hero")} />
        <MotionH2
          {...animatedFeaturesHero}
          className="text-3xl md:text-4xl lg:text-5xl text-center mx-auto lg:max-w-[70%] font-fontRaleway font-medium"
        >
          {t("description")}
        </MotionH2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-7 font-fontRaleway gap-5 xs:px-10 sm:px-20 md:px-[15%] lg:px-2 2xl:px-0 3xl:px-28">
          {/* Left Column */}
          <MotionDiv
            {...animatedFeaturesLeft}
            className="flex items-center justify-center 2xl:col-span-3 xl:col-span-2 bg-bgColor shadow-xl rounded-xl py-2"
          >
            <div className="flex flex-col items-center justify-center space-y-7">
              {leftImages.map((img, i) => (
                <Images
                  key={i}
                  url={img.url}
                  addClass={img.addClass}
                  clas={img.clas}
                />
              ))}
              <SectionText
                title={t("stepOne_title")}
                text={t("stepOne_text")}
                containerClass="pb-10"
              />
            </div>
          </MotionDiv>

          {/* Right Column */}
          <MotionDiv
            {...animatedFeaturesRight}
            className="2xl:col-span-4 xl:col-span-3 overflow-hidden flex flex-col items-center justify-center space-y-7 lg:space-y-[143px] xl:space-y-[73px] 3xl:xl:space-y-[120px] bg-bgColor shadow-xl rounded-xl 3xl:pb-12"
          >
            <div className="flex justify-between items-center w-full pt-12">
              {rightImages.map((img, i) => (
                <Images
                  key={i}
                  url={img.url}
                  clas={img.clas}
                  addClass={img.addClass}
                />
              ))}
            </div>
            <SectionText
              title={t("stepTwo_title")}
              text={t("stepTwo_text")}
              titleClass="xl:px-12"
              containerClass="px-0 pt-16"
            />
          </MotionDiv>

          {/* Step 3 Section */}
          <MotionDiv
            {...animatedFeaturesLeft}
            className="2xl:col-span-5 xl:col-span-3 overflow-hidden flex flex-col 2xl:flex-row -space-y-16 xl:max-2xl:-space-y-28 bg-bgColor shadow-xl rounded-xl py-2"
          >
            <div className="flex flex-col space-y-7 max-2xl:justify-between max-2xl:p-7 2xl:py-12 2xl:pl-7 2xl:space-y-28">
              <i className="ri-arrow-right-double-line text-6xl w-fit text-primary bg-white rounded-xl shadow-xl"></i>
              <SectionText
                title={t("stepThree_title")}
                text={t("stepThree_text")}
                containerClass="items-start text-start px-0"
              />
            </div>
            <div className="relative">
              <Images
                url={hasatwork}
                clas="object-cover object-left"
                addClass="absolute 2xl:top-52 top-28 left-10 w-[650px] h-[500px] rounded-xl"
              />
            </div>
          </MotionDiv>

          {/* Step 4 Section */}
          <MotionDiv
            {...animatedFeaturesRight}
            className="2xl:col-span-2 xl:col-span-2 overflow-hidden flex flex-col justify-between items-center justify-center bg-transparent border-2 border-textColor border-dashed shadow-xl rounded-xl py-2"
          >
            <div className="flex -space-x-4 pt-10">
              {testImages.map((img, i) => (
                <Images
                  key={i}
                  url={img.url}
                  clas={img.clas}
                  addClass={img.addClass}
                />
              ))}
            </div>
            <h3 className="font-medium text-center text-xl xl:text-2xl w-[90%] mx-auto py-12">
              {t("stepFour_text")}
            </h3>
            <div className=" -mb-12 -mr-12 w-[90%] h-[200px] border-2 border-white gap-1 p-1 bg-gray-400 grid rounded-xl grid-cols-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="col-span-1 bg-white rounded-lg"></div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}

export default Services;

// ====================== Section Text Component ======================
const SectionText = ({
  title,
  text,
  titleClass = "",
  textClass = "",
  containerClass = "",
}: {
  title: string;
  text: string;
  titleClass?: string;
  textClass?: string;
  containerClass?: string;
}) => (
  <div className={`flex flex-col space-y-5 text-center px-3 ${containerClass}`}>
    <h3 className={`text-2xl text-primary font-medium ${titleClass}`}>{title}</h3>
    <p className={`text-black text-md mx-auto xl:px-6 ${textClass}`}>{text}</p>
  </div>
);
