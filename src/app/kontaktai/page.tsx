/**
 * /kontaktai/ — Full contact page with form, info card, and map.
 */
import type { Metadata } from 'next'
import MultiStepLeadForm from '@/components/shared/MultiStepLeadForm'
import GoogleMapEmbed from '@/components/contact/GoogleMapEmbed'

export const metadata: Metadata = {
  title: 'Kontaktai — Susisiekite su UAB Mistras | Vilnius',
  description:
    'Susisiekite su UAB Mistras dėl nemokamos grindų šlifavimo sąmatos Vilniuje. Tel. +370 604 10608, el. paštas mistrasvilnius@gmail.com. Pr–Pt 8:00–18:00.',
  alternates: { canonical: 'https://mistras.lt/kontaktai/' },
  openGraph: {
    title: 'Kontaktai | UAB Mistras — Vilnius',
    description: 'Susisiekite dėl nemokamos sąmatos. +370 604 10608.',
    url: 'https://mistras.lt/kontaktai/',
    type: 'website',
    locale: 'lt_LT',
  },
}

export default function KontaktaiPage() {
  return (
    <>
      {/* Hero */}
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
            Kontaktai
          </div>
          <h1 className="font-heading font-black text-display-xl text-white mb-4 max-w-[700px]">
            Susisiekite <span className="text-orange">su mumis</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/70 max-w-[560px]">
            Nemokama apžiūra ir sąmata. Skambinkite, rašykite arba užpildykite formą – atsakome per 24 valandas.
          </p>
        </div>
      </section>

      {/* Lead form (includes contact info) */}
      <MultiStepLeadForm />

      {/* Map */}
      <section className="py-16 px-[5%] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.1em] text-orange mb-3">
            Aptarnavimo zona
          </div>
          <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark tracking-tight mb-8">
            Dirbame Vilniuje ir apylinkėse
          </h2>
          <GoogleMapEmbed />
          <p className="text-muted text-sm mt-4">
            Atvykstame į Vilnių, Trakus, Elektrėnus, Ukmergę ir kitus aplinkubius miestus. Susisiekite dėl tikslios informacijos.
          </p>
        </div>
      </section>
    </>
  )
}
