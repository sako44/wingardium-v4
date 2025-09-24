import type { Metadata } from 'next';

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  twitterHandle?: string;
  publishedTime?: string;
  modifiedTime?: string;
  type?: 'website' | 'article' | 'product';
  locale?: string;
  siteName?: string;
};
 
// Default metadata values
const defaultMetadata = {
  title: "Wingardium Akıllı Tarım Yönetim Sistemi | Tarımsal Verimlilik",
  description: "Wingardium ile tarım süreçlerinizi modern teknolojilerle yönetin, verimliliğinizi artırın ve sürdürülebilir bir üretim sürecine geçin. Arazi, ilaçlama, hasat, stok ve makine yönetimi tek platformda!",
  keywords: ["akıllı tarım", "dijital tarım", "tarım yönetimi", "çiftlik otomasyonu", "arazi yönetimi", "ilaçlama takibi", "hasat yönetimi", "tarımsal verimlilik"],
  ogImage: "/images/wingardium-og-image.jpg",
  ogUrl: "https://www.wingardium.com/features",
  canonical: "https://www.wingardium.com/features",
  twitterHandle: "@wingardium",
  type: "website" as const,
  locale: "tr-TR",
  siteName: "Wingardium Tarım Teknolojileri",
};

export function generateMetadata(props: SEOProps = {}): Metadata {
  // Merge default metadata with provided props
  const metadata = {
    ...defaultMetadata,
    ...props,
  };

  return {
    title: {
      absolute: metadata.title, // Bu, root layout'taki title'ı geçersiz kılar
    },
    description: metadata.description,
    keywords: metadata.keywords,
    metadataBase: new URL('https://www.wingardium.com'),
    alternates: {
      canonical: metadata.canonical,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.ogUrl,
      siteName: metadata.siteName,
      images: [
        {
          url: metadata.ogImage,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
      locale: metadata.locale,
      type: "website",
      ...(metadata.type === 'article' && metadata.publishedTime ? {
        publishedTime: metadata.publishedTime,
        modifiedTime: metadata.modifiedTime,
      } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      creator: metadata.twitterHandle,
      images: [metadata.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Replace with your verification code
    },
  };
}