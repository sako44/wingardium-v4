import { useEffect } from "react";
import MotionDiv from "./MotionDiv";
import { animatedBenfitOne } from "@/utils/motionObjects";

type ToastProps = {
  onClose: () => void;
};

export default function Toast({ onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [3000, onClose]);

  return (
    <MotionDiv
      {...animatedBenfitOne}
      initial={{ ...animatedBenfitOne.initial, x: 30 }}
      whileInView={{ ...animatedBenfitOne.whileInView, x: 0 }}
      animate={{ x: 0 }}
      className="fixed top-4 right-4 bg-secondary font-fontRaleway text-white px-5 py-3 rounded-xl shadow-lg w-72 z-50 animate-slide-in"
    >
      <div className="flex space-x-5 items-center py-2">
        <i className="ri-checkbox-circle-fill text-primary text-2xl"></i>
        <p className="text-lg"> Submit Successfully</p>
      </div>
      <div className="mt-2 h-1 w-full bg-black rounded overflow-hidden">
        <div className="h-full bg-white animate-progress" />
      </div>
    </MotionDiv>
  );
}
