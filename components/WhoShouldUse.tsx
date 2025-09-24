import { useTranslations } from "next-intl";
import Container from "./Container";
import AnimatedHeader from "./AnimatedHeader";
import Images from "./images";
import { StaticImageData } from "next/image";
import {
  animatedFeaturesHero,
  whoShouldUseRight,
  whoShouldUseLeft,
} from "@/utils/motionObjects";
import MotionH2 from "./MotionDiv";
import MotionDiv from "./MotionDiv";

function WhoShouldUse() {
  const whoSouldData = Data();
  const t = useTranslations("whoShouldUse");
  return (
    <section>
      <Container clas=" my-16 lg:mt-12 lg:mb-24 overflow-x-hidden">
        <div className="flex flex-col lg:items-center overflow-y-hidden space-y-6 lg:space-y-12">
          <AnimatedHeader title={t("title")} />
          <MotionH2
            {...animatedFeaturesHero}
            className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-fontNunito mx-auto
             font-semibold text-center max-w-[95%] 2xl:max-w-[85%]"
          >
            {t("hero")}
          </MotionH2>
          <MotionH2
            {...animatedFeaturesHero}
            transition={{ delay: 0.8 }}
            className="text-md md:text-xl  xl:text-2xl text-secondary
             font-fontNunito mx-auto font-semibold text-center max-w-[85%] sm:max-w-[80%] lg:max-w-[90%]  2xl:max-w-[70%]"
          >
            {t("intro")}
          </MotionH2>
          <div className="w-full flex flex-col space-y-24 overflow-hidden">
            {whoSouldData.map((item) => (
              <div
                key={item.id}
                className=" flex flex-col xl:flex-row lg:max-xl:-space-y-5 xl:items-center  justify-between w-full "
              >
                <LeftSection item={item} />
                <RightSection url={item.image} id={item.id} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhoShouldUse;

//========================= Left Section ==============================
function LeftSection({
  item,
}: {
  item: {
    id: number;
    title: string;
    hero: string;
    groupTitle: string;
    texts: string[];
    detail: string;
  };
}) {
  return (
    <MotionDiv
      {...whoShouldUseLeft}
      transition={{
        ...whoShouldUseLeft.transition,
        delay: 0.3 * item.id,
      }}
      className={` ${
        item.id % 2 !== 0 ? " bg-secondary text-bgColor " : "  bg-bgColor "
      } " relative font-fontNunito flex flex-col space-y-7 my-8 p-5 lg:w-[80%] xl:w-[60%]  rounded-r-[10%] xs:rounded-r-[20%] sm:rounded-r-[30%] md:rounded-r-full  "`}
    >
      <h2 className=" text-xl w-[95%] md:w-[85%] lg:w-[80%] xl:w-[70%] xl:text-2xl font-semibold font-fontRaleway">
        {item.title}
      </h2>
      <p className="md:w-[90%] 3xl:w-[70%] font-normal">{item.hero}</p>
      <div className="text-xl flex space-x-2 2xl:items-center lg:text-xl font-semibold">
        <i
          className={` ${
            item.id % 2 !== 0 ? " text-primary  " : " text-secondary "
          }" ri-bar-chart-horizontal-fill "`}
        ></i>
        <p className="xl:w-[90%]">{item.groupTitle}</p>
      </div>
      <ul className="space-y-3">
        {item.texts.map((text, index) => (
          <li
            key={index}
            className="text-md flex space-x-1 lg:max-xl:items-center 2xl:items-center lg:text-lg"
          >
            <i
              className={` ${
                item.id % 2 !== 0 ? " text-primary  " : " text-secondary "
              } " ri-arrow-right-fill "`}
            ></i>
            <span className="xl:w-[80%]">{text}</span>
          </li>
        ))}
      </ul>
      <p className="text-base lg:text-lg font-bold lg:w-[80%] xl:w-[75%]">
        {item.detail}
      </p>
    </MotionDiv>
  );
}

//========================= Right Section ==============================
function RightSection({ url, id }: { url: StaticImageData; id: number }) {
  return (
    <MotionDiv
      {...whoShouldUseRight}
      transition={{
        ...whoShouldUseRight.transition,
        delay: 0.4 * id,
      }}
      className=" relative max-xl:self-end -mb-44  "
    >
      <Images
        url={url}
        addClass=" w-[500px] h-[300px] lg:w-[550px] lg:h-[400px] xl:w-[400px] xl:h-[70%] 2xl:w-[550px] 2xl:h-[400px] 3xl:h-[420px] rounded-l-full  "
        clas=" object-cover   "
      />
    </MotionDiv>
  );
}

//========================= Data ==============================
import tarim from "@/public/photos/tarim.png";
import ciftci from "@/public/photos/ciftci.png";
import muhendis from "@/public/photos/muhendis.png";
import isletim from "@/public/photos/isletim.png";
import organik from "@/public/photos/organik.png";
function Data() {
  const t = useTranslations("whoShouldUse");
  const benefitsData = [
    {
      id: 0,
      title: t("farmers_title"),
      hero: t("farmers_hero"),
      groupTitle: t("farmers_groupTitle"),
      texts: [
        t("farmers_benefits_one"),
        t("farmers_benefits_two"),
        t("farmers_benefits_three"),
        t("farmers_benefits_four"),
      ],
      detail: t("farmers_note"),
      image: ciftci,
    },
    {
      id: 1,
      title: t("cooperatives_title"),
      hero: t("cooperatives_hero"),
      groupTitle: t("cooperatives_groupTitle"),
      texts: [
        t("cooperatives_benefits_one"),
        t("cooperatives_benefits_two"),
        t("cooperatives_benefits_three"),
        t("cooperatives_benefits_four"),
      ],
      detail: t("cooperatives_note"),
      image: tarim,
    },
    {
      id: 2,
      title: t("engineers_title"),
      hero: t("engineers_hero"),
      groupTitle: t("engineers_groupTitle"),
      texts: [
        t("engineers_benefits_one"),
        t("engineers_benefits_two"),
        t("engineers_benefits_three"),
        t("engineers_benefits_four"),
      ],
      detail: t("engineers_note"),
      image: muhendis,
    },
    {
      id: 3,
      title: t("enterprises_title"),
      hero: t("enterprises_hero"),
      groupTitle: t("enterprises_groupTitle"),
      texts: [
        t("enterprises_benefits_one"),
        t("enterprises_benefits_two"),
        t("enterprises_benefits_three"),
        t("enterprises_benefits_four"),
      ],
      detail: t("enterprises_note"),
      image: isletim,
    },
    {
      id: 4,
      title: t("organic_title"),
      hero: t("organic_hero"),
      groupTitle: t("organic_groupTitle"),
      texts: [
        t("organic_benefits_one"),
        t("organic_benefits_two"),
        t("organic_benefits_three"),
        t("organic_benefits_four"),
      ],
      detail: t("organic_note"),
      image: organik,
    },
  ];
  return benefitsData;
}
