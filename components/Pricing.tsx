import Container from "./Container";
import PricingItem from "./PricingItem";
import MotionDiv, { MotionH2 } from "./MotionDiv";
import { useTranslations } from "next-intl";
import { animatedPlansTwo, animatedPlansOne } from "@/utils/motionObjects";
import AnimatedHeader from "./AnimatedHeader";

function Pricing() {
  const t = useTranslations("Pricing");
  const plans = [
    {
      id: 1,
      title: t("plan_1_title"),
      description: t("plan_1_description"),
      price: t("plan_1_price"),
      features: [
        t("plan_1_feature_1"),
        t("plan_1_feature_2"),
        t("plan_1_feature_3"),
        t("plan_1_feature_4"),
      ],
    },
    {
      id: 2,
      title: t("plan_2_title"),
      description: t("plan_2_description"),
      price: t("plan_2_price"),
      features: [
        t("plan_2_feature_1"),
        t("plan_2_feature_2"),
        t("plan_2_feature_3"),
        t("plan_2_feature_4"),
      ],
    },
    {
      id: 3,
      title: t("plan_3_title"),
      description: t("plan_3_description"),
      price: t("plan_3_price"),
      features: [
        t("plan_3_feature_1"),
        t("plan_3_feature_2"),
        t("plan_3_feature_3"),
        t("plan_3_feature_4"),
      ],
    },
  ];
  return (
    <section className=" px-4 sm:px-24 md:px-4 pb-24 xl:p-24 mt-16 xl:-mt-14 flex items-center justify-center">
      <div>
        <MotionH2 className="mx-auto w-fit" {...animatedPlansOne}>
          <AnimatedHeader title={t("title")} />
        </MotionH2>
        <MotionH2
          {...animatedPlansOne}
          transition={{ ...animatedPlansOne.transition, delay: 0.7 }}
          className="text-center text-xl font-fontRaleway lg:text-2xl xl:text-3xl font-bold md:max-w-[70%] mx-auto mt-7 mb-12"
        >
          {t("description")}
        </MotionH2>
        <Container clas=" w-[95%] xs:w-[85%] sm:w-[90%] lg:w-full   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-lg:gap-y-12 gap-7 items-center justify-center">
          {plans.map((plan, index) => (
            <MotionDiv
              key={index}
              {...animatedPlansTwo}
              transition={{
                ...animatedPlansTwo.transition,
                delay: index * 0.4,
              }}
            >
              <PricingItem
                buttonTitle={t("button")}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
              />
            </MotionDiv>
          ))}
        </Container>
      </div>
    </section>
  );
}

export default Pricing;
