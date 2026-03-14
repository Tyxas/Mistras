/**
 * ServiceSchema — Service JSON-LD structured data.
 * Adds schema.org/Service markup for service landing pages.
 */

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  areaServed?: string
  priceRange?: string
}

export default function ServiceSchema({ name, description, url, areaServed = 'Vilnius', priceRange }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://mistras.lt/#business',
      name: 'UAB Mistras',
    },
    areaServed: {
      '@type': 'City',
      name: areaServed,
    },
    ...(priceRange && { offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR' } } }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
