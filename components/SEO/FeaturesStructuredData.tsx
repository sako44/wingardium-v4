"use client";
import { useTranslations } from 'next-intl';

export function FeaturesStructuredData() {
  const t = useTranslations('Features');
  
  // Generate feature-specific structured data
  const featuresStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('features_sectionOne_title').replace(/^\d️⃣\s+/, '').trim(),
        description: t('features_sectionOne_hero'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('features_sectionTwo_title').replace(/^\d️⃣\s+/, '').trim(),
        description: t('features_sectionTwo_hero'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: t('features_sectionThree_title').replace(/^\d️⃣\s+/, '').trim(),
        description: t('features_sectionThree_hero'),
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: t('features_sectionFour_title').replace(/^\d️⃣\s+/, '').trim(),
        description: t('features_sectionFour_hero'),
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: t('features_sectionFive_title').replace(/^\d️⃣\s+/, '').trim(),
        description: t('features_sectionFive_hero'),
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: t('features_sectionSix_title').replace(/^\d️⃣\s+/, '').trim(),
        description: t('features_sectionSix_hero'),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresStructuredData) }}
    />
  );
}

export function AppStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Wingardium Akıllı Tarım Yönetim Sistemi',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'TRY',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1024',
    },
    description: 'Wingardium, tarımsal operasyonlarınızı tek bir platformda yönetmenizi sağlayan kapsamlı bir çiftlik yönetim sistemidir.',
    featureList: [
      'Arazi ve Parsel Yönetimi',
      'İlaçlama ve Gübreleme Takibi',
      'Hasat ve Ürün Yönetimi',
      'Satın Alma ve Stok Takibi',
      'İş Makineleri ve Araç Takibi',
      'Bakım ve Arıza Kayıtları'
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}