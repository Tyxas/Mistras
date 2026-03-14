/**
 * /komercines-grindys/ — SEO landing page.
 * Target keyword: "komercinių grindų šlifavimas"
 */
import type { Metadata } from 'next'
import { servicesData } from '@/lib/services-data'
import ServicePageTemplate, { type ServicePageData } from '@/components/services/ServicePageTemplate'

const oldData = servicesData['komercines-grindys']

const data: ServicePageData = {
  tag: oldData.hero.eyebrow,
  headline: oldData.hero.headline,
  headlineAccent: oldData.hero.headlineAccent,
  subheadline: oldData.hero.subheadline,
  price: oldData.hero.priceTag,
  priceNote: oldData.hero.priceNote,
  badges: oldData.hero.badges,
  featuresTag: oldData.features.sectionTag,
  featuresHeadline: oldData.features.headline,
  features: oldData.features.items,
  processTag: oldData.process.sectionTag,
  processHeadline: oldData.process.headline,
  steps: oldData.process.steps.map(s => ({ num: '0' + s.step, title: s.title, desc: s.desc })),
  baLocation: oldData.ba?.location || '',
  baType: oldData.ba?.type || '',
  faqTag: oldData.faq.sectionTag,
  faqHeadline: oldData.faq.headline,
  faqItems: oldData.faq.items,
  ctaHeadline: oldData.cta.headline,
  ctaSubtext: oldData.cta.subtext,
}

export const metadata: Metadata = {
  title: oldData.seo.title,
  description: oldData.seo.description,
  alternates: { canonical: `https://mistras.lt/${oldData.slug}/` },
  openGraph: {
    title: oldData.seo.title,
    description: oldData.seo.description,
    url: `https://mistras.lt/${oldData.slug}/`,
    type: 'website',
    locale: 'lt_LT',
    siteName: 'UAB Mistras',
  },
}

export default function KomercinesGrindysPage() {
  return <ServicePageTemplate data={data} />
}
