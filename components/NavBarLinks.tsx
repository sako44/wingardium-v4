"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";

type NavBarLinksProps = {
  href: string;
  title: string;
};

export type navLink = { 
  "/": string;
  "/features": string;
  "/who-should-use": string;
  "/services": string;
  "/plans": string;
  "/contact": string;
  "/terms": string;
  "#details": string;
};

function NavBarLinks({ href, title }: NavBarLinksProps) {
  const pathname = usePathname();
  const isActiveLink =
    pathname.endsWith(href) ||
    (pathname.startsWith(href) &&
      (pathname.endsWith("/") || pathname.endsWith("/en")));

  console.log(pathname);
  return (
    <Button
      asChild
      className="hover:text-primary text-[16px] rounded-none hover:border-b hover:border-secondary   transition duration-300 ease-in-out"
      variant={"ghost"}
    >
      <Link
        prefetch={true}
        href={href as keyof navLink}
        className={`"" ${
          isActiveLink ? " border-b border-secondary text-primary " : ""
        } `}
      >
        {title}
      </Link>
    </Button>
  );
}

export default NavBarLinks;
