import { useTranslations } from "next-intl";
import Head from "next/head";

const SEO = () => {
  const t = useTranslations("SEO");

  return (
    <Head>
      {/* Temel SEO Etiketleri */}
      <title>{t("seo_title") || t("default_title")}</title>
      <meta
        name="description"
        content={t("seo_description") || t("default_description")}
      />
      <meta
        name="keywords"
        content={t("seo_keywords") || t("default_keywords")}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={t("seo_title") || t("default_title")}
      />
      <meta
        property="og:description"
        content={t("seo_description") || t("default_description")}
      />
      <meta property="og:image" content={"/default-image.png"} />
      <meta property="og:url" content="https://wingardium.com" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={t("seo_title") || t("default_title")}
      />
      <meta
        name="twitter:description"
        content={t("seo_description") || t("default_description")}
      />
      <meta name="twitter:image" content="/default-image.png" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://wingardium.com" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
