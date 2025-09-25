import BenefitsItem from "./BenefitsItem";
import Container from "./Container";
import { Button } from "./ui/button";
import zaman from "@/public/photos/zaman.svg";
import maliyet from "@/public/photos/maliyet.svg";
import verim from "@/public/photos/verimlilik.svg";
import hata from "@/public/photos/hata.svg";
import MotionDiv, { MotionH2 } from "./MotionDiv";
import { useTranslations } from "next-intl";
import { animatedBenfitOne } from "@/utils/motionObjects";
import { Link } from "@/i18n/navigation";

// ====================== Benefits Component ======================
function Benefits() {
  const t = useTranslations("Benefits");

  // const benefits = [
  //   {
  //     id: 1,
  //     title: t("benefit1_title"),
  //     description: t("benefit1_description"),
  //     icon: zaman,
  //   },
  //   {
  //     id: 2,
  //     title: t("benefit2_title"),
  //     description: t("benefit2_description"),
  //     icon: maliyet,
  //   },
  //   {
  //     id: 3,
  //     title: t("benefit3_title"),
  //     description: t("benefit3_description"),
  //     icon: verim,
  //   },
  //   {
  //     id: 4,
  //     title: t("benefit4_title"),
  //     description: t("benefit4_description"),
  //     icon: hata,
  //   },
  // ];

  const benefits = [
    {
      id: 1,
      title: t("benefit_sectionOne_title"),
      description: [
        t("benefit_sectionOne_text1"),
        t("benefit_sectionOne_text2"),
        t("benefit_sectionOne_text3"),
      ],
      detail: t("benefit_sectionOne_detail"),
      icon: zaman,
    },
    {
      id: 2,
      title: t("benefit_sectionTwo_title"),
      description: [
        t("benefit_sectionTwo_text1"),
        t("benefit_sectionTwo_text2"),
        t("benefit_sectionTwo_text3"),
      ],
      detail: t("benefit_sectionTwo_detail"),
      icon: maliyet,
    },
    {
      id: 3,
      title: t("benefit_sectionThree_title"),
      description: [
        t("benefit_sectionThree_text1"),
        t("benefit_sectionThree_text2"),
        t("benefit_sectionThree_text3"),
      ],
      detail: t("benefit_sectionThree_detail"),
      icon: hata,
    },
    {
      id: 4,
      title: t("benefit_sectionFour_title"),
      description: [
        t("benefit_sectionFour_text1"),
        t("benefit_sectionFour_text2"),
        t("benefit_sectionFour_text3"),
      ],
      detail: t("benefit_sectionFour_detail"),
      icon: verim,
    },
  ];
  return (
    <section className="md:px-3 2xl:px-16 3xl:px-32 my-12">
      <Container clas=" flex flex-col max-lg:space-y-16 lg:flex-row  justify-center items-center  ">
        <BenefitItemsGrid benefits={benefits} />
      </Container>
    </section>
  );
}

export default Benefits;

// ====================== Text Section ======================
function BenefitTextSection({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex flex-col max-lg:py-12 items-center justify-center font-fontRaleway text-center space-y-12 ">
      <MotionH2
        {...animatedBenfitOne}
        className="max-md:w-[70%] md:max-lg:w-[70%] text-5xl md:text-6xl lg:text-7xl/[90px] font-fontNunito font-semibold text-primary tracking-[5px]"
      >
        {t("title")}
      </MotionH2>
      <MotionH2
        {...animatedBenfitOne}
        transition={{ ...animatedBenfitOne.transition, delay: 0.8 }}
        className="text-xl md:text-2xl/[45px] font-normal font-fontNunito sm:max-w-[70%] lg:max-w-[80%] 3xl:max-w-[74%]"
      >
        {t("hero")}
      </MotionH2>
      <MotionDiv
        {...animatedBenfitOne}
        transition={{ ...animatedBenfitOne.transition, delay: 1 }}
      >
        <Button
          asChild
          className="animate-shimmer rounded-full py-6 px-8 text-[18px] hover:text-gray-200 
          bg-[linear-gradient(110deg,#567d46,45%,#6b8f5a,55%,#567d46)]
          bg-[length:200%_100%] text-white w-max"
        >
          <Link href="/plans">{t("button")}</Link>
        </Button>
      </MotionDiv>
    </div>
  );
}

// ====================== Items Section ======================
function BenefitItemsGrid({
  benefits,
}: {
  benefits: {
    id: number;
    title: string;
    description: string[];
    detail: string;
    icon: string;
  }[];
}) {
  const t = useTranslations("Benefits");
  return (
    <div className="flex flex-col xl:flex-row max-xl:space-y-5
     lg:max-2xl:w-full gap-x-12 items-center ">
      <MotionDiv
        {...animatedBenfitOne}
        className="flex flex-col md:flex-row xl:flex-col md:gap-x-5 lg:max-xl:gap-x-24 gap-y-5"
      >
        {benefits.map((item, index) =>
          index === 0 || index === 1 ? (
            <BenefitsItem
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              detail={item.detail}
              icon={item.icon}
            />
          ) : null
        )}
      </MotionDiv>
      <BenefitTextSection t={t} />
      <MotionDiv
        {...animatedBenfitOne}
        initial={{ ...animatedBenfitOne.initial, x: 30 }}
        whileInView={{ ...animatedBenfitOne.whileInView, x: 0 }}
        className="flex flex-col md:flex-row xl:flex-col md:gap-x-5 lg:max-xl:gap-x-24 gap-y-5"
      >
        {benefits.map((item, index) =>
          index === 2 || index === 3 ? (
            <BenefitsItem
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              detail={item.detail}
              icon={item.icon}
            />
          ) : null
        )}
      </MotionDiv>
    </div>
  );
}
