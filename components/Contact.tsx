import Container from "./Container";
import Form from "./Form";
import { useTranslations } from "next-intl";
import contactImage from "@/public/photos/21.png";
import AnimatedHeader from "./AnimatedHeader";
import Images from "./images";
import MotionDiv from "./MotionDiv";
import { socialItems } from "@/data/allData";
import { animatedContactLeft } from "@/utils/motionObjects";

// ====================== Contact Component ======================
function Contact() {
  const t = useTranslations("Contact");

  return (
    <section className="mt-5 pt-5 pb-32 mb-12 border-[#dad4d4] border-2 rounded-t-[15px] mx-auto w-[98%] lg:w-[99.3%]">
      <Container clas="flex flex-col justify-center items-center text-center">
        <AnimatedHeader title={t("title")} />
        <ContactContent t={t} />
      </Container>

      <ContactImage />
    </section>
  );
}

export default Contact;

// ====================== Content Section ======================
function ContactContent({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:justify-between mt-24 sm:w-[80%] md:w-[70%] lg:w-full 2xl:w-[90%]">
      <ContactDetails t={t} />
      <Form />
    </div>
  );
}

// ====================== Details Section ======================
function ContactDetails({ t }: { t: (key: string) => string }) {
  const emailLink =
    "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMgBvfWMCWwdzfVklVwdnmjxRlnsVdKpWwLgGXCDSFVhQwWvKxGdrfKGJXTzSxKnXhxjdcl";

  return (
    <MotionDiv
      {...animatedContactLeft}
      className="flex flex-col mt-4 items-start text-start font-fontNunito space-y-20"
    >
      <div>
        <h3 className="text-5xl font-bold">{t("contact_title")}</h3>
        <p className="max-w-[90%] lg:max-w-[70%] mt-3 font-medium text-lg">
          {t("contact_description")}
        </p>
      </div>

      <div>
        <h3 className="text-2xl">{t("follow_title")}</h3>
        <div className="flex space-x-7 mt-5">
          {socialItems.map((item, index) => (
            <SocialLink key={index} href={item.href} iconClass={item.icon} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl">{t("follow_description")}</h3>
        <ul className="space-y-3 mt-5 underline text-primary">
          <li className="hover:text-black transition duration-300 ease-in-out">
            <a href="https://wa.me/+905347926583?text=Merhaba%20">
              +90 534 792 6583
            </a>
          </li>
          <li className="hover:text-black transition duration-300 ease-in-out">
            <a href={emailLink}>info@wingardium.com</a>
          </li>
        </ul>
      </div>
    </MotionDiv>
  );
}

// ====================== Social Icon Component ======================
function SocialLink({ href, iconClass }: { href: string; iconClass: string }) {
  return (
    <a href={href}>
      <i
        className={`${iconClass} bg-primary text-white rounded-[50%] px-2 py-2 text-[25px] hover:text-black hover:cursor-pointer transition duration-300 ease-in-out`}
      ></i>
    </a>
  );
}

// ====================== Background Image Section ======================
function ContactImage() {
  return (
    <MotionDiv
      {...animatedContactLeft}
      className="relative z-[-1] w-full -mt-40 -mb-32"
    >
      <Images
        url={contactImage}
        addClass="w-full h-[500px]"
        clas="object-cover object-center"
      />
    </MotionDiv>
  );
}
