/**
 * Homepage — UAB Mistras
 * Assembles all homepage sections in the correct order.
 * Includes generateMetadata() and LocalBusiness JSON-LD.
 */
import type { Metadata } from 'next'
import { getHomepageData } from '@/lib/wp-graphql'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import AboutIntro from '@/components/home/AboutIntro'
import Calculator from '@/components/shared/Calculator'
import ServicesGrid from '@/components/home/ServicesGrid'
import PortfolioPreview from '@/components/home/PortfolioPreview'
import WhyUsSection from '@/components/home/WhyUsSection'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import FaqAccordion from '@/components/shared/FaqAccordion'
import CtaBanner from '@/components/shared/CtaBanner'
import MultiStepLeadForm from '@/components/shared/MultiStepLeadForm'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'

export const metadata: Metadata = {
  title: 'Grindų Šlifavimas Vilniuje | UAB Mistras — Nuo 1994',
  description:
    'Profesionalus parketo šlifavimas Vilniuje be dulkių. 30+ metų patirtis, premium medžiagos (Bona, Osmo), nemokama sąmata. Skambinkite +370 604 10608.',
  openGraph: {
    title: 'Grindų Šlifavimas Vilniuje | UAB Mistras — Nuo 1994',
    description: 'Profesionalus parketo šlifavimas be dulkių. Šeimos verslas nuo 1994 m.',
    url: 'https://mistras.lt',
    type: 'website',
    locale: 'lt_LT',
    siteName: 'UAB Mistras',
  },
  alternates: {
    canonical: 'https://mistras.lt/',
  },
}

export default async function HomePage() {
  const wpData = await getHomepageData().catch((e) => {
    console.error("WP Fetch Failed:", e);
    return null;
  });

  return (
    <>
      <LocalBusinessSchema />
      <HeroSection data={wpData} />
      <TrustBar />
      <AboutIntro />
      <Calculator />
      <ServicesGrid />
      <PortfolioPreview />
      <WhyUsSection />
      <TestimonialsCarousel />
      <FaqAccordion />
      <CtaBanner />
      <MultiStepLeadForm />
    </>
  )
}
