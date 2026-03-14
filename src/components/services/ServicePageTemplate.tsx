/**
 * src/components/services/ServicePageTemplate.tsx
 * Reusable template for all 5 service landing pages.
 * Each page passes its own data — layout is identical.
 */

import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceFeature {
  icon: string
  title: string
  desc: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface ProcessStep {
  num: string
  title: string
  desc: string
}

export interface ServicePageData {
  // Hero
  tag: string
  headline: string
  headlineAccent?: string   // optional orange-colored part
  subheadline: string
  price: string
  priceNote: string
  badges: string[]

  // Features grid
  featuresTag: string
  featuresHeadline: string
  features: ServiceFeature[]

  // Process
  processTag: string
  processHeadline: string
  steps: ProcessStep[]

  // Before/after placeholder (real images added later)
  baLocation: string
  baType: string

  // Materials / tech
  materialsTag?: string
  materialsHeadline?: string
  materials?: Array<{ name: string; desc: string }>

  // FAQ
  faqTag: string
  faqHeadline: string
  faqItems: FaqItem[]

  // CTA
  ctaHeadline: string
  ctaSubtext: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <main className="bg-[#F9F9F9]">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[#3E2723] via-[#2C1810] to-[#2C3E50]
                          pt-32 pb-24 px-5 overflow-hidden">
        {/* decorative grain */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        {/* orange glow */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full
                        bg-[radial-gradient(circle,rgba(230,126,34,0.12)_0%,transparent_70%)]
                        pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Pradžia</Link>
            <span>/</span>
            <Link href="/paslaugos/" className="hover:text-white/70 transition-colors">Paslaugos</Link>
            <span>/</span>
            <span className="text-white/70">{data.tag}</span>
          </div>

          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
                              text-white/80 text-xs font-semibold tracking-widest uppercase
                              px-4 py-2 rounded-full mb-6">
                <span className="text-orange-400">●</span> {data.tag}
              </div>

              <h1 className="font-['Inter_Tight'] font-black text-white tracking-tight mb-5"
                style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)', lineHeight: 1.05 }}>
                {data.headline}
                {data.headlineAccent && (
                  <span className="text-[#E67E22] block">{data.headlineAccent}</span>
                )}
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
                {data.subheadline}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {data.badges.map((b, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white/10 border
                                          border-white/15 text-white/80 text-sm font-medium
                                          px-3 py-1.5 rounded-lg">
                    {b}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/kontaktai/"
                  className="bg-[#E67E22] hover:bg-[#CF6D17] text-white font-['Inter_Tight']
                                 font-bold px-7 py-3.5 rounded-xl transition-all duration-200
                                 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-400/30
                                 text-base">
                  ✉ Gauti nemokamą sąmatą
                </Link>
                <a href="tel:+37060410608"
                  className="bg-white/10 hover:bg-white/20 border border-white/25 text-white
                              font-['Inter_Tight'] font-bold px-7 py-3.5 rounded-xl text-base
                              transition-colors">
                  📞 Skambinti
                </a>
              </div>
            </div>

            {/* price card */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-7">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-2">
                Kaina nuo
              </p>
              <p className="font-['Inter_Tight'] font-black text-[#E67E22] mb-1"
                style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}>
                {data.price}
              </p>
              <p className="text-white/50 text-sm mb-7">{data.priceNote}</p>

              <div className="space-y-3 border-t border-white/10 pt-6">
                {[
                  { label: 'Apžiūra', value: 'Nemokama' },
                  { label: 'Min. užsakymas', value: '490€' },
                  { label: 'Garantija', value: 'Kokybės' },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-white/50 text-sm">{item.label}</span>
                    <span className="text-white/90 text-sm font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#E67E22] text-xs font-bold uppercase tracking-widest mb-3">
              {data.featuresTag}
            </p>
            <h2 className="font-['Inter_Tight'] font-black text-[#3E2723] tracking-tight"
              style={{ fontSize: 'clamp(1.7rem,3vw,2.4rem)' }}>
              {data.featuresHeadline}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f, i) => (
              <div key={i}
                className="bg-[#F9F9F9] border border-gray-100 rounded-2xl p-6
                              hover:border-[#8D6E63]/30 hover:shadow-md transition-all duration-300">
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="font-['Inter_Tight'] font-bold text-[#3E2723] text-base mb-2">
                  {f.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER placeholder ── */}
      <section className="py-16 px-5 bg-[#F9F9F9]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#E67E22] text-xs font-bold uppercase tracking-widest mb-3 text-center">
            Rezultatai
          </p>
          <h2 className="font-['Inter_Tight'] font-black text-[#3E2723] tracking-tight mb-10 text-center"
            style={{ fontSize: 'clamp(1.7rem,3vw,2.4rem)' }}>
            Prieš ir po
          </h2>
          {/* placeholder — replace with real <BeforeAfterSlider> once photos are uploaded */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/7] bg-gradient-to-r
                          from-[#4a3728] to-[#D4A843] flex items-center justify-center
                          shadow-xl shadow-amber-900/20">
            <div className="absolute inset-0 flex">
              <div className="flex-1 bg-[#4a3728] flex items-center justify-center">
                <div className="text-center text-white/60">
                  <div className="text-5xl mb-3">📷</div>
                  <p className="text-sm font-semibold">Prieš</p>
                  <p className="text-xs mt-1 opacity-60">{data.baLocation}</p>
                </div>
              </div>
              <div className="w-0.5 bg-white/30" />
              <div className="flex-1 bg-gradient-to-br from-[#8B6914] to-[#D4A843]
                              flex items-center justify-center">
                <div className="text-center text-white/80">
                  <div className="text-5xl mb-3">✨</div>
                  <p className="text-sm font-semibold">Po</p>
                  <p className="text-xs mt-1 opacity-70">{data.baType}</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm
                            text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
              Nuotraukos bus pridėtos
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#E67E22] text-xs font-bold uppercase tracking-widest mb-3">
              {data.processTag}
            </p>
            <h2 className="font-['Inter_Tight'] font-black text-[#3E2723] tracking-tight"
              style={{ fontSize: 'clamp(1.7rem,3vw,2.4rem)' }}>
              {data.processHeadline}
            </h2>
          </div>
          <div className="space-y-4">
            {data.steps.map((step, i) => (
              <div key={i}
                className="flex gap-6 items-start bg-[#F9F9F9] border border-gray-100
                              rounded-2xl p-6 hover:border-[#8D6E63]/30 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5D4037] to-[#3E2723]
                                rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="font-['Inter_Tight'] font-black text-[#E67E22] text-sm">
                    {step.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-['Inter_Tight'] font-bold text-[#3E2723] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATERIALS (optional) ── */}
      {data.materials && (
        <section className="py-16 px-5 bg-[#F9F9F9]">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#E67E22] text-xs font-bold uppercase tracking-widest mb-3">
              {data.materialsTag}
            </p>
            <h2 className="font-['Inter_Tight'] font-black text-[#3E2723] tracking-tight mb-10"
              style={{ fontSize: 'clamp(1.7rem,3vw,2.4rem)' }}>
              {data.materialsHeadline}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {data.materials.map((m, i) => (
                <div key={i}
                  className="bg-white border border-gray-200 rounded-xl px-6 py-5
                                shadow-sm hover:shadow-md transition-shadow text-left min-w-[160px]">
                  <p className="font-['Inter_Tight'] font-black text-[#5D4037] text-lg tracking-wider">
                    {m.name}
                  </p>
                  <p className="text-[#6B7280] text-xs mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E67E22] text-xs font-bold uppercase tracking-widest mb-3">
              {data.faqTag}
            </p>
            <h2 className="font-['Inter_Tight'] font-black text-[#3E2723] tracking-tight"
              style={{ fontSize: 'clamp(1.7rem,3vw,2.4rem)' }}>
              {data.faqHeadline}
            </h2>
          </div>
          <div className="space-y-3">
            {data.faqItems.map((item, i) => (
              <details key={i}
                className="group bg-[#F9F9F9] border border-gray-200 rounded-xl overflow-hidden
                                  hover:border-[#8D6E63]/40 transition-colors">
                <summary className="flex justify-between items-center p-5 cursor-pointer
                                    font-['Inter_Tight'] font-bold text-[#3E2723] text-sm
                                    list-none select-none">
                  {item.q}
                  <span className="text-[#E67E22] text-lg transition-transform duration-300
                                   group-open:rotate-45 flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-5 pb-5 text-[#6B7280] text-sm leading-relaxed border-t
                                border-gray-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-[#5D4037] to-[#3E2723] py-20 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">
            Pradėkime
          </p>
          <h2 className="font-['Inter_Tight'] font-black text-white mb-5 tracking-tight"
            style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>
            {data.ctaHeadline}
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            {data.ctaSubtext}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontaktai/"
              className="bg-[#E67E22] hover:bg-[#CF6D17] text-white font-['Inter_Tight']
                             font-bold px-8 py-4 rounded-xl text-base transition-all
                             hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-400/30">
              ✉ Gauti nemokamą sąmatą
            </Link>
            <a href="tel:+37060410608"
              className="bg-white/10 hover:bg-white/20 border border-white/25 text-white
                          font-['Inter_Tight'] font-bold px-8 py-4 rounded-xl text-base
                          transition-colors">
              📞 +370 604 10608
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
