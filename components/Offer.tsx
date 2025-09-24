import { useTranslations } from "next-intl";
import OfferItem from "./OfferItem";
import Container from "./Container";
import MotionDiv from "./MotionDiv";
import { animatedOfferText } from "@/utils/motionObjects";
function Offer() {
  const data = Data();
  const t = useTranslations("Offer");
  return (
    <section className="bg-bgColor border-t border-secondary">
      <Container clas=" py-16  ">
        <MotionDiv
          {...animatedOfferText}
          className="flex flex-col font-fontNunito space-y-6 lg:space-y-10 xl:space-y-10 "
        >
          <h3 className="text-5xl lg:text-5xl xl:text-6xl text-center font-semibold text-primary ">
            {t("title")}
          </h3>
          <p className="text-center text-lg md:text-xl lg:text-2xl mx-auto font-medium">
            {t("hero")}
          </p>
        </MotionDiv>
      </Container>
      <section>
        <div className="flex flex-col items-center justify-center ">
          {data.map((item) => (
            <section key={item.id} className="border-y border-primary w-full">
              <Container clas=" px-9 xs:px-10 sm:px-12 md:px-16 lg:px-20 3xl:px-64 ">
                <OfferItem key={item.id} {...item} />
              </Container>
            </section>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Offer;

//======================== Text Data ============================
function Data() {
  const t = useTranslations("Offer");
  const sections = [
    {
      id: 1,
      title: t("sectionOne_title"),
      hero: t("sectionOne_hero"),
      details: [t("sectionOne_text1"), t("sectionOne_text2")],
      detail: t("sectionOne_detail"),
    },
    {
      id: 2,
      title: t("sectionTwo_title"),
      hero: t("sectionTwo_hero"),
      details: [t("sectionTwo_text1"), t("sectionTwo_text2")],
      detail: t("sectionTwo_detail"),
    },
    {
      id: 3,
      title: t("sectionThree_title"),
      hero: t("sectionThree_hero"),
      details: [t("sectionThree_text1"), t("sectionThree_text2")],
      detail: t("sectionThree_detail"),
    },
    {
      id: 4,
      title: t("sectionFour_title"),
      hero: t("sectionFour_hero"),
      details: [t("sectionFour_text1"), t("sectionFour_text2")],
      detail: t("sectionFour_detail"),
    },
    {
      id: 5,
      title: t("sectionFive_title"),
      hero: t("sectionFive_hero"),
      details: [t("sectionFive_text1"), t("sectionFive_text2")],
      detail: t("sectionFive_detail"),
    },
    {
      id: 6,
      title: t("sectionSix_title"),
      hero: t("sectionSix_hero"),
      details: [t("sectionSix_text1"), t("sectionSix_text2")],
      detail: t("sectionSix_detail"),
    },
  ];
  return sections;
}
