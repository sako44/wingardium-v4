"use client";

import MotionDiv from "./MotionDiv";
import Image from "next/image";
import Whatsapp from "@/public/photos/whatsapp.svg";
const StickyWhatsapp = () => {
  return (
    <div className="fixed w-fit bottom-6 right-6 z-[900]  ">
      <a
        href="https://wa.me/+905347926583?text=Merhaba%20"
        target="_blank"
        rel="noopener noreferrer"
        // className="cursor-pointer duration-300 transition-all hover:scale-110"
      >
        <MotionDiv
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex items-center gap-1 bg-white rounded-full"
        >
          <Image src={Whatsapp} alt="whatsapp" width={50} height={50} />
        </MotionDiv>
      </a>
    </div>
  );
};

export default StickyWhatsapp;
