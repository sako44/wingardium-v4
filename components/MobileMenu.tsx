"use client";
import { Cross as Fade } from "hamburger-react";
import type { Route } from "next";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Button } from "./ui/button";
import MotionDiv from "./MotionDiv";
import { useTranslations } from "next-intl";
import TranslateButton from "./TranslateButton";
import { socialItems } from "@/data/allData";
import { navLink } from "./NavBarLinks";

// ====================== Mobile Navbar ======================
const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("MobileMenu");

  const navLinks = [
    { title: t("nav_link_1_title"), url: t("nav_link_1_url"), active: false },
    { title: t("nav_link_2_title"), url: t("nav_link_2_url"), active: false },
    { title: t("nav_link_3_title"), url: t("nav_link_3_url"), active: false },
    { title: t("nav_link_4_title"), url: t("nav_link_4_url"), active: false },
    { title: t("nav_link_5_title"), url: t("nav_link_5_url"), active: false },
    { title: t("nav_link_6_title"), url: t("nav_link_6_url"), active: false },
  ];

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <MotionDiv
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 2, type: "spring", delay: 0.2 }}
      className="bg-bgColor lg:hidden px-5 py-3 sm:px-7 max-lg:h-[80px] md:px-10 w-full overflow-hidden"
    >
      <NavbarHeader open={open} setOpen={setOpen} />
      <NavbarMenu open={open} navLinks={navLinks} closeMenu={closeMenu} t={t} />
    </MotionDiv>
  );
};

export default MobileNavbar;

// ====================== Navbar Header ======================
const NavbarHeader = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div className="px-1">
    <div className="flex justify-between items-center pt-2">
      <h2 className="text-xl font-semibold uppercase">
        <Link href="/">Wingardium</Link>
      </h2>
      <div className="flex items-center space-x-3">
        <TranslateButton />
        <div className="z-[100] flex gap-2 items-center rounded-full">
          <Fade
            toggled={open}
            onToggle={() => setOpen((prev) => !prev)}
            duration={0.5}
            size={25}
            color="black"
          />
        </div>
      </div>
    </div>
  </div>
);

// ====================== Navbar Menu ======================
const NavbarMenu = ({
  open,
  navLinks,
  closeMenu,
  t,
}: {
  open: boolean;
  navLinks: { title: string; url: string; active: boolean }[];
  closeMenu: () => void;
  t: (key: string) => string;
}) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 w-full bg-bgColor pt-[112px] text-popover-foreground px-4 flex justify-center flex-col h-[100vh]"
      >
        <NavbarLinks navLinks={navLinks} closeMenu={closeMenu} />
        <ContactSection t={t} />
        <SocialMediaSection t={t} />
      </motion.div>
    )}
  </AnimatePresence>
);

// ====================== Navbar Links ======================
type NavLink = {
  title: string;
  url: string; // خليها string مو any
  active: boolean;
};
const NavbarLinks = ({
  navLinks,
  closeMenu,
}: {
  navLinks: NavLink[];
  closeMenu: () => void;
}) => (
  <div className="flex flex-col gap-8 mt-7 items-start">
    {navLinks.map((link, index) => (
      <Button
        key={index}
        asChild
        variant={"ghost"}
        className={`${
          link.active ? "text-primary" : "text-bgColor-foreground"
        } px-0 text-4xl hover:text-primary hover:bg-transparent`}
        onClick={closeMenu}
      >
        <Link href={link.url as keyof navLink}>{link.title}</Link>
      </Button>
    ))}
  </div>
);

// ====================== Contact Section ======================
const ContactSection = ({ t }: { t: (key: string) => string }) => (
  <div className="mt-10 flex flex-col gap-2">
    <p className="text-primary text-lg">{t("emailTitle")}</p>
    <a className="text-2xl" href="mailto:itxti909@gmail.com">
      Social@troikaprod.com
    </a>
  </div>
);

// ====================== Social Media Section ======================
const SocialMediaSection = ({ t }: { t: (key: string) => string }) => {
  return (
    <div className="text-primary mt-10 flex flex-col gap-4">
      <p className="text-primary text-lg">{t("takipTitle")}</p>
      <div className="flex space-x-10">
        {socialItems.map((item, index) => (
          <a key={index} href={item.href}>
            <i
              className={`${item.icon} bg-white rounded-[50%] px-2 py-2 text-[25px] hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out`}
            ></i>
          </a>
        ))}
      </div>
    </div>
  );
};
