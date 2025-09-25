import Features from "@/components/Features";
import { FeaturesStructuredData } from "@/components/SEO/FeaturesStructuredData";
import { generateMetadata as createMetadata } from "./utils";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
// ✅ الآن نعرّف Props يدوياً
type Props = { params: { locale: string } };

// Dinamik metadata oluşturmak için
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Çevirileri yükle
  const t = await getTranslations({
    locale: params.locale || "tr-TR",
    namespace: "Features",
  });

  // Dinamik SEO verileri oluştur
  return createMetadata({
    title: `${t("title")} | Wingardium`,
    description: `${t("heroTwo")} ${t("heroThree")}`.replace(/🌱|🚀/g, ""),
    keywords: [
      t("features_sectionOne_title")
        .replace(/^\d️⃣\s+/, "")
        .trim(),
      t("features_sectionTwo_title")
        .replace(/^\d️⃣\s+/, "")
        .trim(),
      t("features_sectionThree_title")
        .replace(/^\d️⃣\s+/, "")
        .trim(),
      t("features_sectionFour_title")
        .replace(/^\d️⃣\s+/, "")
        .trim(),
      t("features_sectionFive_title")
        .replace(/^\d️⃣\s+/, "")
        .trim(),
      t("features_sectionSix_title")
        .replace(/^\d️⃣\s+/, "")
        .trim(),
      "akıllı tarım",
      "tarım yönetimi",
      "dijital tarım",
      "çiftlik yönetimi",
    ],
  });
}

export default function FeaturesPage() {
  return (
    <>
      <FeaturesStructuredData />
      <Features />
    </>
  );
}
