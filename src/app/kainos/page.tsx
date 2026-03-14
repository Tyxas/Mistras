/**
 * /kainos/ — Full pricing page.
 * Sections: Pricing hero → PricingTable → DetailedCalculator → CTA → LeadForm.
 * Target keyword: "grindų šlifavimo kainos"
 */
import type { Metadata } from 'next'
import PricingTable from '@/components/pricing/PricingTable'
import DetailedCalculator from '@/components/pricing/DetailedCalculator'
import CtaBanner from '@/components/shared/CtaBanner'
import MultiStepLeadForm from '@/components/shared/MultiStepLeadForm'

export const metadata: Metadata = {
  title: 'Kainos — Grindų Šlifavimo Kainos Vilniuje | UAB Mistras',
  description:
    'Parketo šlifavimo kainos Vilniuje. Šlifavimas nuo 10€/m², lakavimas nuo 6€/m², alyvavimas nuo 8€/m². Interaktyvi skaičiuoklė ir nemokama sąmata.',
  alternates: { canonical: 'https://mistras.lt/kainos/' },
  openGraph: {
    title: 'Grindų Šlifavimo Kainos | UAB Mistras',
    description: 'Šlifavimo kainos nuo 10€/m². Skaičiuoklė ir detalios kainų lentelės.',
    url: 'https://mistras.lt/kainos/',
    type: 'website',
    locale: 'lt_LT',
    siteName: 'UAB Mistras',
  },
}

export default function KainosPage() {
  return (
    <>
      {/* Pricing hero */}
      <section className="relative bg-gradient-to-br from-walnut-dark via-[#2C1810] to-slate-brand pt-28 pb-16 px-[5%]">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-[2] max-w-[1200px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <span className="text-orange text-[0.5rem]">●</span>
            Skaidri kainodara
          </div>
          <h1 className="font-heading font-black text-display-xl text-white mb-4 max-w-[700px]">
            Grindų šlifavimo{' '}
            <span className="text-orange">kainos</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/70 max-w-[560px]">
            Aiškios kainos be paslėptų mokesčių. Skaičiuoklė orientacinei kainai ir tikslios lentelės visoms paslaugoms.
          </p>
        </div>
      </section>

      <PricingTable />
      <DetailedCalculator />
      <CtaBanner />
      <MultiStepLeadForm />
    </>
  )
}
