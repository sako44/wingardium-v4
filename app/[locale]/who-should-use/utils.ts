import type { Metadata } from 'next';

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  locale?: string;
};

// Default metadata values
const defaultMetadata = {
  title: "Who Should Use Wingardium | Smart Agricultural Management System",
  description: "Discover how Wingardium's smart agriculture platform benefits farmers, cooperatives, agricultural engineers, large enterprises, and organic farmers with digital transformation solutions.",
  keywords: [
    "smart agriculture", 
    "digital farming", 
    "agricultural management", 
    "farm digitalization", 
    "agricultural cooperatives", 
    "precision farming", 
    "farm management software", 
    "organic farming technology",
    "greenhouse management",
    "agricultural engineers tools"
  ],
  ogImage: "/images/who-should-use-og-image.jpg",
  ogUrl: "https://www.wingardium.com/who-should-use",
  canonical: "https://www.wingardium.com/who-should-use",
  locale: "en",
};

export function generateMetadata(props: SEOProps = {}): Metadata {
  // Merge default metadata with provided props
  const metadata = {
    ...defaultMetadata,
    ...props,
  };

  return {
    title: {
      absolute: metadata.title,
    },
    description: metadata.description,
    keywords: metadata.keywords,
    metadataBase: new URL('https://www.wingardium.com'),
    alternates: {
      canonical: metadata.canonical,
      languages: {
        'en': 'https://www.wingardium.com/en/who-should-use',
        'tr': 'https://www.wingardium.com/kimler-kullanmali',
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.ogUrl,
      siteName: "Wingardium Smart Agriculture",
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
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
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
  };
}