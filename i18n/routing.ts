import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "as-needed",

  pathnames: {
    "/": { tr: "/" as const, en: "/" as const },
    "/features": { tr: "/ozellikler" as const, en: "/features" as const },
    "/who-should-use": {
      tr: "/kim-kullanmali" as const,
      en: "/who-should-use" as const,
    },
    "/services": { tr: "/nasil-calisir" as const, en: "/services" as const },
    "/plans": { tr: "/planlar" as const, en: "/plans" as const },
    "/contact": { tr: "/iletisim" as const, en: "/contact" as const },
    "/terms": {
      tr: "/gizlilik-politikasi" as const,
      en: "/privacy-policy" as const,
    },
    "#details": { tr: "#detaylar" as const, en: "#details" as const },
  },
});
