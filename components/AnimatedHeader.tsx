import { MotionH2 } from "./MotionDiv";
import { animatedHeaderOne} from "@/utils/motionObjects";

function AnimatedHeader({ title }: { title: string }) {
  return (
    <>
      <MotionH2
      {...animatedHeaderOne}
      className="py-2 px-4 border w-fit mx-auto border-[#727272] text-[#727272]
       font-fontRaleway font-medium shadow-xl scale-105 rounded-full">
        {title}
      </MotionH2>
    </>
  );
}

export default AnimatedHeader;

{
  /* <MotionH2
{...animatedHeaderOne}
className="text-center text-4xl uppercase md:text-5xl xl:text-6xl font-fontNunito -mb-3 mt-1 text-black"
>
{title}
</MotionH2>
<MotionDiv
{...animatedHeaderTwo}
className="bg-black h-[2px] w-full"
></MotionDiv> */
}
