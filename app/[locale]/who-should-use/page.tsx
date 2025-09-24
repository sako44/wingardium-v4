import WhoShouldUse from "@/components/WhoShouldUse";


import { WhoShouldUseStructuredData } from "@/components/SEO/WhoShouldUseStructuredData";
import { generateMetadata as createMetadata } from "./utils";
import { getTranslations } from "next-intl/server";

// Dinamik metadata oluşturmak için
export async function generateMetadata({ params }: { params: { locale: string } }) {
  const paramsData = await params;

  const { locale } = paramsData;  

  const t = await getTranslations({ locale, namespace: 'whoShouldUse' });

  if (locale === 'tr') {
    return createMetadata({
      title: "Kimler Kullanmalı | Wingardium Akıllı Tarım Yönetim Sistemi",
      description: "Wingardium'un akıllı tarım platformunun çiftçiler, kooperatifler, ziraat mühendisleri, büyük işletmeler ve organik tarım yapanlar için dijital dönüşüm çözümlerini keşfedin.",
      keywords: [
        "akıllı tarım",
        "dijital çiftçilik",
        "tarım yönetimi",
        "çiftlik dijitalleşmesi",
        "tarım kooperatifleri",
        "hassas tarım",
        "çiftlik yönetim yazılımı",
        "organik tarım teknolojisi",
        "sera yönetimi",
        "ziraat mühendisleri araçları"
      ],
      ogUrl: "https://www.wingardium.com/tr/kimler-kullanmali",
      canonical: "https://www.wingardium.com/tr/kimler-kullanmali",
      locale: "tr-TR",
    });
  }

  // İngilizce default
  return createMetadata({
    title: `${t('title')} | Wingardium Smart Agricultural Management System`,
    description: `${t('intro')} ${t('hero').split('.')[0]}.`,
  });
}

export default function WhoShouldUsePage() {
  return (
    <>
      <WhoShouldUseStructuredData />
      <main>
        <WhoShouldUse />
      </main>
    </>
  );
}