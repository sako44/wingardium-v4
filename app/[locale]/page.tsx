import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews.";
import Landing from "@/components/Landing";
import Digitalization from "@/components/Digitalization";
import Offer from "@/components/Offer";

export default function Home() {
  return (
    <div>
      <Landing />
      <Benefits />
      <Offer />
      <Digitalization />
      <Reviews />
    </div>
  );
}
