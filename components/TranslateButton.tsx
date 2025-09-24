"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import turkeyFlag from "@/public/icon/turkeyFlag.png";
import ukFlag from "@/public/icon/ukFlag.png";
import Images from "./images";

function TranslateButton() {
  const pathname = usePathname();
  const router = useRouter();

  const isEnglish = pathname.startsWith("/en");

  const changeLanguage = (lang: "en" | "tr") => {
    if (lang === "en") {
      if (!isEnglish) {
        router.push(`/en${pathname}`);
      }
    } else {
      if (isEnglish) {
        router.push(pathname.replace(/^\/en/, "/tr"));
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="shadow-xl border-primary text-primary hover:text-white
           hover:border-white bg-secondary border text-[16px] rounded-[15px]
            px-3 py-5 transition duration-300 ease-in-out"
        >
          {isEnglish ? "EN" : "TR"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-16 text-center font-fontRaleway">
        <DropdownMenuItem
          className="pl-3 hover:bg-primary cursor-pointer"
          onClick={() => changeLanguage("tr")}
        >
          <div className="flex space-x-2 items-center">
            <Images url={turkeyFlag} addClass=" w-6 h-6 " />
            <p className="font-medium">TR</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="pl-3 hover:bg-primary cursor-pointer"
          onClick={() => changeLanguage("en")}
        >
          <div className="flex space-x-2 items-center">
            <Images url={ukFlag} addClass=" w-6 h-6 " />
            <p className="font-medium">EN</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default TranslateButton;
