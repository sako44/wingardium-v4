import Container from "./Container";
import AnimatedHeader from "./AnimatedHeader";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MotionDiv from "./MotionDiv";
import { animatedBenfitOne } from "@/utils/motionObjects";

function Faq() {
  const t = useTranslations("Faq");
  const faqData = [
    {
      id: 1,
      question: t("faq_1_question"),
      answer: t("faq_1_answer"),
      value: "item-1",
    },
    {
      id: 2,
      question: t("faq_2_question"),
      answer: t("faq_2_answer"),
      value: "item-2",
    },
    {
      id: 3,
      question: t("faq_3_question"),
      answer: t("faq_3_answer"),
      value: "item-3",
    },
    {
      id: 4,
      question: t("faq_4_question"),
      answer: t("faq_4_answer"),
      value: "item-4",
    },
    {
      id: 5,
      question: t("faq_5_question"),
      answer: t("faq_5_answer"),
      value: "item-5",
    },
    {
      id: 6,
      question: t("faq_6_question"),
      answer: t("faq_6_answer"),
      value: "item-6",
    },
    {
      id: 7,
      question: t("faq_7_question"),
      answer: t("faq_7_answer"),
      value: "item-7",
    },
    {
      id: 8,
      question: t("faq_8_question"),
      answer: t("faq_8_answer"),
      value: "item-8",
    },
  ];
  return (
    <section id="faq" className="w-full mx-auto my-24">
      <Container clas=" flex flex-col  space-y-12 ">
        <AnimatedHeader title={t("title")} />
        <Accordion
          type="single"
          collapsible
          className="w-[90%] md:w-[80%] xl:md:w-[70%] 3xl:w-[60%] mx-auto"
        >
          {faqData.map((Item, index) => (
            <MotionDiv
              {...animatedBenfitOne}
              transition={{
                ...animatedBenfitOne.transition,
                delay: index * 0.5,
              }}
              key={index}
            >
              <AccordionItem className="my-5" value={`item-${index + 1}`}>
                <AccordionTrigger className="text-xl font-fontNunito">
                  {Item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal font-fontRaleway">
                  {Item.answer}
                </AccordionContent>
              </AccordionItem>
            </MotionDiv>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

export default Faq;
