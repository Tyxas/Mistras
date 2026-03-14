/**
 * /atlikti-darbai/ — Portfolio page.
 * Shows filterable grid of completed projects.
 * Will fetch from WordPress API when CMS is connected.
 */
import type { Metadata } from 'next'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import CtaBanner from '@/components/shared/CtaBanner'

export const metadata: Metadata = {
  title: 'Atlikti Darbai — Grindų Šlifavimo Portfolio | UAB Mistras',
  description:
    'Peržiūrėkite UAB Mistras atliktus grindų šlifavimo darbus Vilniuje. Prieš ir po nuotraukos, ąžuolo parketas, komercinės grindys, terasos.',
  alternates: { canonical: 'https://mistras.lt/atlikti-darbai/' },
  openGraph: {
    title: 'Atlikti Darbai | UAB Mistras',
    description: 'Grindų šlifavimo portfolio — prieš ir po nuotraukos.',
    url: 'https://mistras.lt/atlikti-darbai/',
    type: 'website',
    locale: 'lt_LT',
  },
}

export default function PortfolioPage() {
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
            Portfolio
          </div>
          <h1 className="font-heading font-black text-display-xl text-white mb-4 max-w-[700px]">
            Atlikti <span className="text-orange">darbai</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/70 max-w-[560px]">
            Kiekviename projekte siekiame to paties – ilgaamžio, profesionaliai atlikto darbo rezultato. Peržiūrėkite prieš ir po nuotraukas.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-16 px-[5%] bg-bg">
        <div className="max-w-[1200px] mx-auto">
          <PortfolioGrid />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
