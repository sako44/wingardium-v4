"use client";
import { Button } from "@/components/ui/button";
import Container from "./Container";
import { Link } from "@/i18n/navigation";
import MobileNavbar from "./MobileMenu";
import MotionDiv, { MotionH2 } from "./MotionDiv";
import { animatedNavBar } from "@/utils/motionObjects";
import TranslateButton from "@/components/TranslateButton";
import { useTranslations } from "next-intl";
import NavBarLinks from "./NavBarLinks";
import { useState } from "react";
import NavBarLinkItems from "./NavbarLinkItems";

//bg-[#d6c9ac]

function NavBar() {
  const t = useTranslations("NavBar");
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  const navButtons = [
    {
      id: 1,
      title: t("nav_button_1_title"),
      href: t("nav_button_1_href"),
    },
    {
      id: 2,
      title: t("nav_button_2_title"),
      href: t("nav_button_2_href"),
      items: [
        {
          id: 10,
          title: t("feature_1_title"),
          href: t("feature_1_href"),
        },
        {
          id: 20,
          title: t("feature_2_title"),
          href: t("feature_2_href"),
        },
        {
          id: 30,
          title: t("feature_3_title"),
          href: t("feature_3_href"),
        },
        {
          id: 40,
          title: t("feature_4_title"),
          href: t("feature_4_href"),
        },
        {
          id: 50,
          title: t("feature_5_title"),
          href: t("feature_5_href"),
        },
        {
          id: 60,
          title: t("feature_6_title"),
          href: t("feature_6_href"),
        },
      ],
    },
    {
      id: 3,
      title: t("nav_button_3_title"),
      href: t("nav_button_3_href"),
    },
    {
      id: 4,
      title: t("nav_button_4_title"),
      href: t("nav_button_4_href"),
    },
    {
      id: 5,
      title: t("nav_button_5_title"),
      href: t("nav_button_5_href"),
    },
  ];

  const handleMouseEnter = (id: number | null) => {
    if (timeoutId) clearTimeout(timeoutId);
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };
  return (
    <MotionDiv className="bg-bgColor max-lg:h-16 w-full z-30 relative sticky top-0">
      <MotionDiv className=" hidden lg:block ">
        <Container clas="  py-7 lg:max-xl:space-x-7 justify-between items-center flex   ">
          <MotionH2
            {...animatedNavBar}
            className="text-2xl font-semibold  font-fontRaleway uppercase "
          >
            <Link href="/">Wingardium</Link>
          </MotionH2>
          <nav className="space-x-0 2xl:space-x-12 font-fontRaleway items-center  flex">
            {navButtons.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() =>
                  handleMouseEnter(item.items ? item.id : null)
                }
                onMouseLeave={handleMouseLeave}
              >
                <MotionDiv
                  key={item.id}
                  {...animatedNavBar}
                  transition={{
                    ...animatedNavBar.transition,
                    delay: item.id * 0.4,
                  }}
                >
                  <NavBarLinks href={item.href} title={item.title} />
                  {item.items && openDropdown === item.id && (
                    <div
                      className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-4 space-y-2 z-50"
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.items.map((subItem) => (
                        <NavBarLinkItems
                          key={subItem.id}
                          href={subItem.href}
                          title={subItem.title}
                        />
                      ))}
                    </div>
                  )}
                </MotionDiv>
              </div>
            ))}
          </nav>
          <div className="flex space-x-3 items-center">
            <TranslateButton />
            <Button
              asChild
              variant={"ghost"}
              className=" shadow-xl border-primary
               hover:bg-secondary hover:text-primary border text-[16px] rounded-[15px] px-7 py-5 transition duration-300 ease-in-out"
            >
              <Link href={t("nav_button_6_href") as any}>
                {t("nav_button_6_title")}
              </Link>
            </Button>
          </div>
        </Container>
      </MotionDiv>
      <MobileNavbar />
    </MotionDiv>
  );
}

export default NavBar;
