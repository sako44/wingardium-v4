import right from "@/public/icon/right.svg";
import Images from "./images";
import { Button } from "./ui/button";
import { Link } from "@/i18n/navigation";

type PricingItemProps = {
  title: string;
  price: string | number;
  description: string;
  features: string[];
  buttonTitle: string;
};

// ====================== Pricing Item ======================
function PricingItem({
  title,
  price,
  description,
  features,
  buttonTitle,
}: PricingItemProps) {
  return (
    <div
      className={`${
        price == 30 && " bg-primary scale-110 text-white "
      } border font-fontRaleway border-textColor shadow-xl rounded-2xl px-8 py-10 flex flex-col space-y-5`}
    >
      <PricingHeader title={title} description={description} />
      <PricingBody price={price} buttonTitle={buttonTitle} />
      <PricingFeatures features={features} />
    </div>
  );
}

export default PricingItem;

// ====================== Pricing Header ======================
const PricingHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col space-y-2 pb-7">
    <h2 className="text-3xl font-semibold">{title}</h2>
    <h3 className="text-xl font-normal">{description}</h3>
  </div>
);

// ====================== Pricing Body ======================
const PricingBody = ({
  price,
  buttonTitle,
}: {
  price: string | number;
  buttonTitle: string;
}) => (
  <div className="flex flex-col space-y-7 py-7 border-y border-textColor">
    <p className="text-2xl text-textColor font-fontNunito font-normal">
      <span
        className={`${
          price == 30 && " text-white "
        } text-5xl text-black font-bold`}
      >
        ${price}
      </span>
      /mo
    </p>
    <Button
      asChild
      className={`${
        price == 30
          ? " bg-white font-medium text-black hover:bg-black hover:text-white "
          : " bg-primary text-white hover:bg-black hover:text-white "
      } p-5 font-medium w-max`}
    >
      <Link href="/contact">{buttonTitle}</Link>
    </Button>
  </div>
);

// ====================== Pricing Features ======================
const PricingFeatures = ({ features }: { features: string[] }) => (
  <ul className="space-y-2 pt-12 pb-3">
    {features.map((feature, index) => (
      <li key={index} className="flex items-center space-x-2">
        <Images url={right} addClass="w-5 h-5" clas="object-contain" />
        <p className="text-lg font-normal">{feature}</p>
      </li>
    ))}
  </ul>
);
