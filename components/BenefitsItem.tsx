import Images from "./images";
import { StaticImageData } from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type BenefitsItemProps = {
  id: number;
  title: string;
  description: string[];
  detail: string;
  icon: string | StaticImageData;
};

function BenefitsItem({
  id,
  title,
  description,
  detail,
  icon,
}: BenefitsItemProps) {
  const t = useTranslations("Benefits");
  return (
    <div
      className="relative flex flex-col font-fontRaleway h-[515px] w-[370px] md:w-[350px] lg:w-[400px] xl:w-[315px] 2xl:w-[400px] overflow-hidden
      items-center justify-center space-y-5 bg-[#f1f1f1] border text-center lg:text-start 
       border-primary shadow-lg px-1 pb-5 pt-2  rounded-lg"
    >
      <p className=" -top-1 -left-1 absolute px-4 py-2 text-secondary border border-primary rounded-br-xl bg-primary font-medium text-2xl">
        {id}
      </p>
      <Images url={icon} addClass=" w-16 h-16 " clas="" />
      <h3 className="text-2xl font-semibold text-primary w-[85%]">{title}</h3>
      <ul className=" list-disc space-y-5  ">
        {description.map((desc, index) => (
          <li key={index} className="max-w-[85%] mx-auto text-slate-700 font-normal">
            {desc}
          </li>
        ))}
      </ul>
      <p className="w-[85%] mx-auto h-[48px] text-slate-700  font-semibold">
        {detail}
      </p>
      <p
        className="font-semibold border-b border-zinc-900 uppercase
       text-gray-700 hover:text-primary transition-all duration-300 ease-in-out"
      >
        <Link href="/features">{t("footer_title")}</Link>
      </p>
    </div>
  );
}

export default BenefitsItem;
