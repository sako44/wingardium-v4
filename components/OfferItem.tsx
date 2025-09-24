"use client";
import { AnimatePresence } from "framer-motion";
import MotionDiv from "./MotionDiv";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { animatedOfferText } from "@/utils/motionObjects";
type ServicesItemProps = {
  id: number;
  title: string;
  hero: string;
  details: string[];
  detail: string;
};
function OfferItem({ id, title, hero, details, detail }: ServicesItemProps) {
  const [isHover, setIsHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // تعديل حجم الشاشة الصغيرة إلى 1024px
    };
    handleResize(); // استدعاء التحقق عند بداية التحميل
    window.addEventListener("resize", handleResize); // تحديث عند تغيير الحجم

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      setIsHover(!isHover); // تبديل الحالة عند الضغط في الجوال
    }
  };

  return (
    <MotionDiv
      {...animatedOfferText}
      onHoverStart={() => !isMobile && setIsHover(true)}
      onHoverEnd={() => !isMobile && setIsHover(false)}
      onClick={handleInteraction} // تفعيل عند الضغط في الشاشات الصغيرة
      transition={{ duration: 0.8, type: "spring" }}
      className=" pb-2  border-primary h-fit font-fontRaleway"
    >
      <div className="flex space-x-5 items-center py-8 md:py-12 ">
        <p className=" text-2xl md:text-3xl font-fontNunito  text-black">
          0{id}.
        </p>
        <hr className=" pl-4 bg-secondary rounded-none w-[100px] h-[3px]" />
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between max-lg:space-y-10 text-black">
        <div className="lg:w-[40%] xl:w-[35%] 2xl:w-[45%] w-[80%]">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
            {title}
          </h3>
        </div>
        <div className="lg:w-[40%] xl:w-[35%]">
          <h3 className="text-2xl md:text-3xl xl:text-4xl text-start text-secondary">
            {hero}
          </h3>
          <AnimatePresence>
            <MotionDiv
              layout
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isHover ? "max-content" : 0,
                opacity: isHover ? 1 : 0,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className=" md:text-xl lg:text-2xl flex -ml-2 flex-col space-y-5 mt-10"
            >
              {details.map((item, index) => (
                <div
                  key={index}
                  className=" flex items-start  gap-2 text-xl w-full"
                >
                  <i className="ri-circle-fill text-xl -mb-1 text-secondary"></i>
                  <p>{item}</p>
                </div>
              ))}
              <div className=" flex items-center -gap-1 w-full">
                <i className="ri-arrow-right-s-fill text-3xl -ml-1 text-primary"></i>
                <Link
                  className="text-lg font-medium underline hover:text-black transition duration-300 ease-in-out text-primary"
                  href="/features"
                >
                  {detail}
                </Link>
              </div>
            </MotionDiv>
          </AnimatePresence>
        </div>
      </div>
    </MotionDiv>
  );
}

export default OfferItem;
