import leftOne from "@/public/photos/lanFour.png";
import leftTwo from "@/public/photos/lanOne.png";
import rightOne from "@/public/photos/lanThree.png";
import rightTwo from "@/public/photos/lanFive.svg";
import {
  animatedRightTwo,
  animatedRightOne,
  animatedLeftTwo,
  animatedLeftOne,
  animatedLandingLogo,
} from "@/utils/motionObjects";
import Images from "./images";
import { Button } from "./ui/button";
import MotionDiv, { MotionH2 } from "./MotionDiv";
import {
  animatedLandingOne,
  animatedLandingTwo,
  animatedLandingThree,
} from "@/utils/motionObjects";
import logo from "@/public/photos/logo.png";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// ====================== Main Landing Component ======================
function Landing() {
  const t = useTranslations("Landing");

  return (
    <section className="flex justify-center 
    items-center mt-2 border-[#dad4d4] border-2 rounded-[15px]
     bgurl bg-contain relative mx-auto
      w-[99.3%] overflow-hidden h-[93vh] lg:h-[89vh] 3xl:h-[89vh]">
      <BackgroundImages />
      <Content t={t} />
    </section>
  );
}

export default Landing;

// ====================== Background Images ======================
function BackgroundImages() {
  return (
    <>
      <LeftOne />
      <LeftTwo />
      <RightOne />
      <RightTwo />
    </>
  );
}

// ====================== Left One Image ======================
function LeftOne() {
  const t = useTranslations("Landing");

  return (
    <MotionDiv
      {...animatedLeftOne}
      className="  absolute z-10 hidden top-0 -left-5 xl:-top-2 xl: lg:block 2xl:-top-4 2xl:left-5"
    >
      <div className="relative">
        <Images
          url={leftOne}
          addClass="w-[300px] xl:w-[350px] 2xl:w-[400px] 2xl:h-[400px] rounded-[20px]"
          clas=""
        />
        <p className="absolute top-20 left-16 text-sm max-w-[55%] xl:top-24 xl:left-[70px] 2xl:text-lg 2xl:top-[100px] 2xl:left-[85px] xl:max-w-[59%] font-fontRaleway">
          {t("noteMessage")}
        </p>
      </div>
    </MotionDiv>
  );
}

// ====================== Left Two Image ======================
function LeftTwo() {
  return (
    <MotionDiv
      {...animatedLeftTwo}
      className=" absolute z-10 hidden lg:block bottom-10 left-16 2xl:bottom-12 2xl:left-32"
    >
      <div className="relative">
        <Images
          url={leftTwo}
          addClass="w-[250px] h-[150px] xl:w-[300px] xl:h-[180px] 2xl:w-[350px] 2xl:h-[220px] rounded-[20px]"
          clas=""
        />
      </div>
    </MotionDiv>
  );
}

// ====================== Right One Image ======================
function RightOne() {
  const t = useTranslations("Landing");

  return (
    <MotionDiv
      {...animatedRightOne}
      className=" absolute z-10 hidden lg:block -bottom-36 -right-8 xl:-bottom-48 xl:-right-10 2xl:-bottom-56 2xl:-right-12"
    >
      <div className="relative">
        <Images
          url={rightOne}
          addClass="w-[400px] xl:w-[500px] 2xl:w-[600px] rounded-[20px]"
          clas=""
        />
        <div className="absolute top-28 left-40 xl:top-[132px] xl:left-44 2xl:top-40 2xl:left-52 max-w-[40%] 2xl:max-w-[35%] font-fontRaleway">
          <h2 className="mb-3 xl:mb-5 2xl:mb-7 -ml-12 text-md xl:text-lg 2xl:text-xl">
            {t("fileHero")}
          </h2>
          <h3 className="mb-3 -ml-9 xl:-ml-8 2xl:-ml-5 text-sm xl:text-md 2xl:text-lg">
            {t("fileTitle")}
          </h3>
          <div className="bg-primary py-1 px-2 w-fit rounded-md text-lg flex items-center space-x-2 max-2xl:-ml-5">
            <i className="ri-time-fill text-xl"></i>
            <p className="text-sm xl:text-md 2xl:text-lg">12.07.2025</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

// ====================== Right Two Image ======================
function RightTwo() {
  return (
    <MotionDiv
      {...animatedRightTwo}
      className="  absolute z-10 hidden lg:block top-10 right-12 xl:top-10 xl:right-12"
    >
      <Images
        url={rightTwo}
        addClass="w-[200px] xl:w-[250x] 2xl:w-[300px] rounded-[20px]"
        clas=""
      />
    </MotionDiv>
  );
}

// ====================== Landing Content ======================
function Content({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex flex-col items-center space-y-8 font-fontNunito text-center mb-6">
      <MotionDiv {...animatedLandingLogo}>
        <Images
          url={logo}
          addClass="w-[400px] md:w-[450px] h-52 lg:w-[500px] lg:h-52 self-center -mb-20"
          clas="object-cover object-center"
        />
      </MotionDiv>
      <TextContent t={t} />
      <ActionButton t={t} />
    </div>
  );
}

// ====================== Text Content ======================
function TextContent({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex flex-col space-y-3">
      <MotionH2
        {...animatedLandingOne}
        className="text-4xl max-w-[90%] md:max-w-full mx-auto sm:text-5xl md:text-6xl xl:text-7xl font-bold inline-block text-primary bg-bgColor px-2 py-2 rounded-sm"
      >
        {t("hero")}
      </MotionH2>
      <MotionH2
        {...animatedLandingTwo}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl
        inline-block text-textColor rounded-sm px-3 py-2 font-bold mx-auto w-fit"
      >
        {t("title")}
      </MotionH2>
    </div>
  );
}

// ====================== Action Button ======================
function ActionButton({ t }: { t: (key: string) => string }) {
  return (
    <MotionDiv
      {...animatedLandingThree}
      className="items-center flex flex-col space-y-5"
    >
      <h2 className="text-black max-w-[70%] lg:max-w-[90%] xl:w-full sm:text-xl xl:text-2xl text-center -mt-4">
        {t("description")}
      </h2>
      <Button
        asChild
        className="animate-shimmer rounded-full py-6 px-8 text-[18px] hover:text-gray-200 bg-[linear-gradient(110deg,#567d46,45%,#6b8f5a,55%,#567d46)] bg-[length:200%_100%] text-white w-max"
      >
        <Link href="/plans">{t("button")}</Link>
      </Button>
    </MotionDiv>
  );
}
