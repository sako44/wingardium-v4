"use client";
import Container from "./Container";
import Autoplay from "embla-carousel-autoplay";
import AnimatedHeader from "./AnimatedHeader";
import { animatedReviews } from "@/utils/motionObjects";
import { useTranslations } from "next-intl";
import boy1 from "@/public/photos/userb1.svg";
import boy2 from "@/public/photos/userb2.svg";
import women1 from "@/public/photos/userw1.svg";
import women2 from "@/public/photos/userw2.svg";
import type { StaticImageData } from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Images from "./images";
import MotionDiv from "./MotionDiv";

// ====================== Reviews Section ======================
function Reviews() {
  const t = useTranslations("Reviews");

  const reviews = [
    { id: 1, name: t("review_1_name"), text: t("review_1_text"), icon: boy1 },
    { id: 2, name: t("review_2_name"), text: t("review_2_text"), icon: women1 },
    { id: 3, name: t("review_3_name"), text: t("review_3_text"), icon: boy2 },
    { id: 4, name: t("review_4_name"), text: t("review_4_text"), icon: women2 },
    { id: 5, name: t("review_5_name"), text: t("review_5_text"), icon: boy1 },
    { id: 6, name: t("review_6_name"), text: t("review_6_text"), icon: boy1 },
    { id: 7, name: t("review_7_name"), text: t("review_7_text"), icon: women1 },
    { id: 8, name: t("review_8_name"), text: t("review_8_text"), icon: boy2 },
    { id: 9, name: t("review_9_name"), text: t("review_9_text"), icon: women2 },
    {
      id: 10,
      name: t("review_10_name"),
      text: t("review_10_text"),
      icon: boy1,
    },
  ];

  return (
    <section className="my-20">
      <Container>
        <div className="flex flex-col space-y-6 lg:space-y-8 xl:space-y-12">
          <AnimatedHeader title={t("title")} />
          <ReviewCarousel reviews={reviews} />
        </div>
      </Container>
    </section>
  );
}

export default Reviews;

// ====================== Review Carousel ======================
const ReviewCarousel = ({
  reviews,
}: {
  reviews: {
    id: number;
    name: string;
    text: string;
    icon: StaticImageData;
  }[];
}) => (
  <div className="mt-10 w-full">
    <Carousel
      plugins={[Autoplay({ delay: 5000 })]}
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 1,
      }}
      className="w-full flex flex-col justify-center"
    >
      <CarouselContent>
        {reviews.map((review, index) => (
          <ReviewItem review={review} index={index} key={review.id} />
        ))}
      </CarouselContent>
      <CarouselControls />
    </Carousel>
  </div>
);

// ====================== Review Item ======================
const ReviewItem = ({
  review,
  index,
}: {
  review: {
    id: number;
    name: string;
    text: string;
    icon: StaticImageData;
  };
  index: number;
}) => (
  <CarouselItem className="font-fontRaleway sm:basis-1/2 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
    <MotionDiv
      {...animatedReviews}
      transition={{
        ...animatedReviews.transition,
        delay: index * 0.1,
      }}
      className="flex flex-col bg-bgColor border border-primary rounded-[15px] h-[210px] p-5 space-y-3"
    >
      <div className="flex items-center space-x-4">
        <Images
          url={review.icon}
          addClass="w-12 h-12 rounded-full"
          clas="object-cover object-center"
        />
        <div>
          <h1 className="text-xl font-semibold">{review.name}</h1>
          <h4 className="font-light text-md">Client Review</h4>
        </div>
      </div>
      <p>{review.text}</p>
    </MotionDiv>
  </CarouselItem>
);

// ====================== Carousel Controls ======================
const CarouselControls = () => (
  <div className="relative w-full sm:flex justify-center items-center hidden gap-10 mt-7">
    <CarouselPrevious className="bg-white shadow-none border-none outline-none" />
    <CarouselNext className="bg-white shadow-none border-none outline-none" />
  </div>
);
