import farmer from "@/public/photos/farmer.png";
import plant from "@/public/photos/plant.png";
import truck from "@/public/photos/truck.png";
import { useTranslations } from "next-intl";
import Container from "./Container";
import MotionDiv, { MotionH2 } from "./MotionDiv";
import {
  whoShouldUseLeft,
  whoShouldUseRight,
  digitalizationTextOne,
  digitalizationTextTwo,
  digitalizationTextThree,
  digitalizationTextFour,
  digitalizationTitle,
  digitalizationHero,
} from "@/utils/motionObjects";
import Images from "./images";

function Digitalization() {
  const t = useTranslations("Digitalization");
  return (
    <section className="w-full relative font-fontRaleway py-8 border-b border-secondary overflow-hidden">
      <Container clas=" flex flex-col space-y-12 py-32 xl:py-16  lg:space-y-16 xl:space-y-24 3xl:space-y-24 items-center justify-center ">
        <div className="flex flex-col -space-y-9 font-fontNunito  items-center justify-center">
          <MotionH2
            {...digitalizationTitle}
            className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-center"
          >
            {t("title")}
          </MotionH2>
          <MotionH2
            {...digitalizationHero}
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-medium sm:w-[75%] lg:w-[60%]"
          >
            {t("hero")}
          </MotionH2>
        </div>
        <DigitalizationTextSection />
      </Container>

      <DigitalizationImageSection />
    </section>
  );
}

export default Digitalization;

//======================== Text Section ============================
function DigitalizationTextSection() {
  const data = Data();
  return (
    <div
      className="relative flex flex-col text-center max-lg:space-y-12 lg:justify-between
     2xl:-space-y-12 lg:pb-16 2xl:pb-32  w-full h-[420px] lg:h-[500px]"
    >
      {data.map((item) => (
        <MotionH2 key={item.id} {...item.animate} className={item.class}>
          {item.title}
        </MotionH2>
      ))}
    </div>
  );
}

//======================== Image Section ============================
function DigitalizationImageSection() {
  const data = ImageData();
  return (
    <>
      {data.map((item) => (
        <MotionDiv key={item.id} {...item.animate} className={item.class}>
          <Images url={item.url} addClass={item.addclass} clas="" />
        </MotionDiv>
      ))}
    </>
  );
}

//======================== Text Data ============================
function Data() {
  const t = useTranslations("Digitalization");
  const textData = [
    {
      id: 0,
      title: t("textOne"),
      animate: digitalizationTextOne,
      class:
        "text-lg md:text-xl xl:text-2xl p-2 w-fit mx-auto bg-bgColor font-medium rounded-xl text-secondary",
    },
    {
      id: 1,
      title: t("textTwo"),
      animate: digitalizationTextTwo,
      class:
        "lg:absolute xl:left-0 2xl:left-[1%] 3xl:left-[8%] lg:top-[40%]   text-lg md:text-xl xl:text-2xl p-2 w-fit mx-auto bg-bgColor font-medium rounded-xl text-secondary",
    },
    {
      id: 2,
      title: t("textThree"),
      animate: digitalizationTextThree,
      class:
        "lg:absolute  lg:-right-5 2xl:-right-[5%]  3xl:right-[4%] lg:top-[40%] text-lg md:text-xl xl:text-2xl p-2 w-fit mx-auto bg-bgColor font-medium rounded-xl text-secondary",
    },
    {
      id: 3,
      title: t("textFour"),
      animate: digitalizationTextFour,
      class:
        "text-lg md:text-xl xl:text-2xl p-2 w-fit mx-auto bg-bgColor font-medium rounded-xl text-secondary",
    },
  ];
  return textData;
}

//======================== Image Data ============================
function ImageData() {
  const imageData = [
    {
      id: 0,
      url: farmer,
      class:
        "absolute top-12 left-2 md:left-[10%] lg:left-[5%] lg:top-40 xl:top-[15%] xl:left-[7%] 2xl:left-[15%]",
      addclass:
        " w-24 h-24  lg:w-36 lg:h-36 -rotate-12 hover:scale-110 transition-all duration-300 ease-in-out ",
      animate: whoShouldUseLeft,
    },
    {
      id: 1,
      url: plant,
      class:
        "absolute top-12 right-2  md:right-[10%] lg:right-[5%] lg:top-40 xl:top-[12%] xl:right-[7%] 2xl:right-[15%] bottom-0",
      addclass:
        " w-24 h-24  lg:w-36 lg:h-36 rotate-12 hover:scale-110 transition-all duration-300 ease-in-out ",
      animate: whoShouldUseRight,
    },
    {
      id: 2,
      url: truck,
      class:
        " hidden lg:block absolute  lg:top-[48%] lg:right-[45%] 2xl:right-[46%] 2xl:top-[46%] 3xl:top-[45%] 3xl:right-[47%]",
      addclass:
        " w-24 h-24  lg:w-36 lg:h-36 hover:scale-110 transition-all duration-300 ease-in-out ",
      animate: whoShouldUseLeft,
    },

    {
      id: 3,
      url: plant,
      class:
        "absolute bottom-20 left-2 md:left-[10%] lg:left-[7%] lg:bottom-48 xl:bottom-[15%] xl:left-[10%] 2xl:left-[15%]",
      addclass:
        " w-24 h-24  lg:w-36 lg:h-36 rotate-12 hover:scale-110 transition-all duration-300 ease-in-out ",
      animate: whoShouldUseLeft,
    },
    {
      id: 4,
      url: farmer,
      class:
        "absolute bottom-20 right-2 md:right-[10%] lg:right-[7%] lg:bottom-48 xl:bottom-[15%] xl:right-[10%] 2xl:right-[15%]",
      addclass:
        " w-24 h-24  lg:w-36 lg:h-36 -rotate-12 hover:scale-110 transition-all duration-300 ease-in-out ",
      animate: whoShouldUseRight,
    },
  ];
  return imageData;
}
