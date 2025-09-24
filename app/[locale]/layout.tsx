import type { Metadata } from "next";
import logo from "@/public/icon/logo.svg";
import "remixicon/fonts/remixicon.css";
import "./globals.css";
import { Nunito, Raleway } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import StickyWhatsapp from "@/components/StickyWhatsapp";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WINGARDIUM",
  description:
    "bahçe, sera ve parsel gibi ekim yapılan alanlardaki tüm operasyonel süreçlerinizi tek bir platform üzerinden kolayca yönetebilmeniz için tasarlanmış kapsamlı bir web uygulamasıdır",
  icons: [{ rel: "icon", url: logo.src }],
};
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "tr" | "en")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        key={locale}
        className={` ${nunito.variable} ${raleway.variable} antialiased bg-[#f7f8f4]  `}
      >
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          {children}
          <StickyWhatsapp />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
