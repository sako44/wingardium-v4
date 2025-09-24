"use client";
import { useTranslations } from 'next-intl';

export function WhoShouldUseStructuredData() {
  const t = useTranslations('whoShouldUse');
  
  // Primary structured data for the page as FAQPage
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: t('farmers_title').replace('🌱 ', ''),
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${t('farmers_hero')} ${t('farmers_groupTitle')} 
            ${t('farmers_benefits_one')} 
            ${t('farmers_benefits_two')} 
            ${t('farmers_benefits_three')} 
            ${t('farmers_benefits_four')}
            ${t('farmers_note')}`
        }
      },
      {
        '@type': 'Question',
        name: t('cooperatives_title').replace('👩‍🌾 ', ''),
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${t('cooperatives_hero')} ${t('cooperatives_groupTitle')} 
            ${t('cooperatives_benefits_one')} 
            ${t('cooperatives_benefits_two')} 
            ${t('cooperatives_benefits_three')} 
            ${t('cooperatives_benefits_four')}
            ${t('cooperatives_note')}`
        }
      },
      {
        '@type': 'Question',
        name: t('engineers_title').replace('📋 ', ''),
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${t('engineers_hero')} ${t('engineers_groupTitle')} 
            ${t('engineers_benefits_one')} 
            ${t('engineers_benefits_two')} 
            ${t('engineers_benefits_three')} 
            ${t('engineers_benefits_four')}
            ${t('engineers_note')}`
        }
      },
      {
        '@type': 'Question',
        name: t('enterprises_title').replace('🌍 ', ''),
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${t('enterprises_hero')} ${t('enterprises_groupTitle')} 
            ${t('enterprises_benefits_one')} 
            ${t('enterprises_benefits_two')} 
            ${t('enterprises_benefits_three')} 
            ${t('enterprises_benefits_four')}
            ${t('enterprises_note')}`
        }
      },
      {
        '@type': 'Question',
        name: t('organic_title').replace('🍅 ', ''),
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${t('organic_hero')} ${t('organic_groupTitle')} 
            ${t('organic_benefits_one')} 
            ${t('organic_benefits_two')} 
            ${t('organic_benefits_three')} 
            ${t('organic_benefits_four')}
            ${t('organic_note')}`
        }
      }
    ]
  };

  // Secondary structured data as Article
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('title'),
    description: t('intro'),
    image: '/images/who-should-use-og-image.jpg',
    author: {
      '@type': 'Organization',
      name: 'Wingardium Agriculture',
      url: 'https://www.wingardium.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Wingardium Agriculture',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.wingardium.com/images/logo.png'
      }
    },
    datePublished: '2023-01-01',
    dateModified: new Date().toISOString().split('T')[0]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
    </>
  );
}