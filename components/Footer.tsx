import Link from "next/link";
import Container from "./Container";
import Images from "./images";
import MotionDiv from "./MotionDiv";
import logo from "@/public/photos/logo.png";
import { animatedFooter } from "@/utils/motionObjects";
import { useTranslations } from "next-intl";
import { socialItems } from "@/data/allData";

// ====================== Main Footer Component ======================
function Footer() {
  const t = useTranslations("Footer");

  const supportNavData = [
    { title: t("support_nav_1_title"), url: t("support_nav_1_url") },
    { title: t("support_nav_2_title"), url: t("support_nav_2_url") },
    { title: t("support_nav_3_title"), url: t("support_nav_3_url") },
  ];

  return (
    <section className="w-full bg-zinc-950 pt-24">
      <Container clas="flex flex-col space-y-10 font-fontRaleway">
        <FooterTop t={t} supportNavData={supportNavData} />
        <FooterBottom t={t} />
      </Container>
    </section>
  );
}

export default Footer;

// ====================== Footer Top Section ======================
function FooterTop({
  t,
  supportNavData,
}: {
  t: (key: string) => string;
  supportNavData: { title: string; url: string }[];
}) {
  return (
    <MotionDiv
      {...animatedFooter}
      className="flex flex-col lg:flex-row justify-around 2xl:-space-y-7 3xl:-space-y-10 lg:items-center w-full px-3 md:max-lg:px-7"
    >
      <Images
        url={logo}
        addClass="w-96 lg:w-72 2xl:w-96 h-44 self-center lg:-ml-12"
        clas="object-cover object-center"
      />

      <div className="flex flex-col lg:flex-row lg:space-x-12 xl:space-x-20 max-lg:space-y-10 text-textColor text-start lg:items-center">
        <SupportNav t={t} data={supportNavData} />
        <ContactInfo />
        <SocialLinks t={t} />
      </div>
    </MotionDiv>
  );
}

// ====================== Support Navigation ======================
function SupportNav({
  t,
  data,
}: {
  t: (key: string) => string;
  data: { title: string; url: string }[];
}) {
  return (
    <nav className="flex flex-col space-y-5">
      <h2 className="text-xl font-semibold">{t("herOne")}</h2>
      <ul className="space-y-4">
        {data.map((item, index) => (
          <li key={index}>
            <Link
              className="hover:text-primary transition-all duration-300 ease-in-out"
              href={item.url}
              target={index === 2 ? "_blank" : undefined}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ====================== Contact Information ======================
function ContactInfo() {
  const t = useTranslations("Footer");
  return (
    <nav className="flex flex-col space-y-5 self-start">
      <h2 className="text-xl font-semibold">{t("herTwo")}</h2>
      <ul className="space-y-4">
        <li>
          <span className="font-semibold">{t("contactNu")} :</span> +90 534 792 6583
        </li>
        <li>
          <span className="font-semibold">Email :</span>  info@arpeta.com
        </li>
        <li>
          <span className="font-semibold">WhatsApp :</span> +90 534 792 6583
        </li>
      </ul>
    </nav>
  );
}

// ====================== Social Media Links ======================
function SocialLinks({ t }: { t: (key: string) => string }) {
  return (
    <nav className="flex flex-col space-y-12 self-start">
      <h2 className="text-xl font-semibold">{t("herThree")}</h2>
      <div className="text-primary">
        <div className="flex space-x-7">
          {socialItems.map((item, index) => (
            <a key={index} href={item.href}>
              <i
                className={`${item.icon} bg-white rounded-[50%] px-2 py-2 text-[25px] hover:text-black hover:cursor-pointer transition duration-300 ease-in-out`}
              ></i>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ====================== Footer Bottom Section ======================
function FooterBottom({ t }: { t: (key: string) => string }) {
  return (
    <div>
      <hr className="lg:w-[103%] w-full lg:-ml-[17px] 2xl:-ml-[23px] h-[3px] bg-textColor" />
      <MotionDiv
        {...animatedFooter}
        transition={{ ...animatedFooter.transition, delay: 1 }}
        className="py-7 text-textColor flex flex-col-reverse max-lg:space-y-1 lg:flex-row lg:justify-between max-lg:px-[10px]"
      >
        <p className="xs:text-center max-lg:pt-12">{t("footer_title_1")}</p>
        <div className="flex flex-col xs:flex-row max-xs:space-y-3 xs:justify-around  lg:space-x-8 xl:space-x-12 2xl:space-x-16">
          <Link
            className="hover:text-primary transition-all duration-300 ease-in-out"
            href="/terms"
          >
            {t("footer_title_2")}
          </Link>
          <Link
            className="hover:text-primary transition-all duration-300 ease-in-out"
            href="/terms"
          >
            {t("footer_title_3")}
          </Link>
        </div>
      </MotionDiv>
    </div>
  );
}
