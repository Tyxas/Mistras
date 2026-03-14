/**
 * LocalBusinessSchema — JSON-LD structured data for homepage.
 * Includes LocalBusiness, WebSite, and Organization schema.
 * Critical for Google Search ranking and rich results.
 */
import { contactInfo } from '@/lib/content'

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://mistras.lt/#business',
        name: 'UAB Mistras',
        description: 'Profesionalus parketo šlifavimas Vilniuje be dulkių. Šeimos verslas nuo 1994 metų.',
        url: 'https://mistras.lt',
        telephone: contactInfo.phone,
        email: contactInfo.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Vilnius',
          addressCountry: 'LT',
        },
        areaServed: {
          '@type': 'City',
          name: 'Vilnius',
        },
        foundingDate: '1994',
        priceRange: '€€',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '50',
          bestRating: '5',
        },
        openingHours: 'Mo-Fr 08:00-18:00',
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://mistras.lt/#website',
        url: 'https://mistras.lt',
        name: 'UAB Mistras — Grindų Šlifavimas Vilniuje',
        publisher: {
          '@id': 'https://mistras.lt/#organization',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://mistras.lt/#organization',
        name: 'UAB Mistras',
        url: 'https://mistras.lt',
        logo: 'https://mistras.lt/img/logos/mistras-logo.png',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
