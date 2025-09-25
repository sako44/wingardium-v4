"use client";


import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import {navLink} from "./NavBarLinks";

type NavBarLinksProps = {
  href: string;
  title: string;
};

function NavBarLinkItems({ href, title }: NavBarLinksProps) {
  const pathname = usePathname();
  const isActiveLink = pathname.startsWith(href);

  return (
    <Link
      href={href as keyof navLink}
      className={`block w-full px-5 py-2 font-medium text-start text-sm hover:text-primary hover:bg-gray-100 rounded transition duration-300 ease-in-out  ${
        isActiveLink ? "text-primary font-semibold bg-gray-200" : ""
      }`}
    >
      {title}
    </Link>
  );
}

export default NavBarLinkItems;
