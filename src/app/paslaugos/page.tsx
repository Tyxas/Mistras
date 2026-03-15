/**
 * app/paslaugos/page.tsx
 * Services Hub page for UAB Mistras.
 * Drop this file into: mistras-website/src/app/paslaugos/page.tsx
 *
 * Also create these sub-pages by copying the template at the bottom:
 *   src/app/parketo-slifavimas/page.tsx
 *   src/app/grindu-alyvavimas/page.tsx
 *   src/app/terasu-atnaujinimas/page.tsx
 *   src/app/komercines-grindys/page.tsx
 */

import type { Metadata } from 'next'
import Link from 'next/link'

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Grindų Šlifavimo Paslaugos Vilniuje | UAB Mistras nuo 1994',
  description:
    'Viso spektro grindų priežiūros paslaugos Vilniuje: parketo šlifavimas, lakavimas, alyvavimas, terasų atnaujinimas, komercinės grindys. Greitas ir tvarkingas procesas.',
  alternates: { canonical: 'https://mistras.lt/paslaugos/' },
  openGraph: {
    title: 'Paslaugos | UAB Mistras – Grindų Šlifavimas Vilniuje',
    description: 'Profesionalios grindų priežiūros paslaugos nuo 1994 m.',
    url: 'https://mistras.lt/paslaugos/',
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    id: 'parketo-slifavimas',
    href: '/parketo-slifavimas/',
    icon: '🪵',
    color: 'from-amber-900/20 to-amber-700/10',
    borderHover: 'hover:border-amber-700/40',
    tag: 'Populiariausia paslauga',
    tagColor: 'bg-orange-100 text-orange-700',
    title: 'Parketo šlifavimas',
    subtitle: 'Pilnas atnaujinimo ciklas',
    description:
      'Pilnas parketo šlifavimo ciklas – nuo senų lako sluoksnių nuėmimo iki galutinio paviršiaus paruošimo. Naudojame profesionalią Lagler įrangą, kuri užtikrina preciziškumą ir švarų rezultatą.',
    features: [
      'Senų lako ar alyvos sluoksnių šalinimas',
      'Kelių grūdų nuoseklus šlifavimas',
      'Kampų ir kraštų apdirbimas specialiu įrankiu',
      'Paviršiaus paruošimas lakavimui arba alyvavimui',
      'Tinka ąžuolui, pušiai, eglaičiai, egzotinei medienai',
    ],
    price: 'nuo 10 €/m²',
    minOrder: 'Min. užsakymas 490€',
    duration: '1–2 dienos (50 m²)',
    cta: 'Sužinoti daugiau',
  },
  {
    id: 'grindu-alyvavimas',
    href: '/grindu-alyvavimas/',
    icon: '✨',
    color: 'from-emerald-900/20 to-emerald-700/10',
    borderHover: 'hover:border-emerald-700/40',
    tag: 'Natūralu ir ekologiška',
    tagColor: 'bg-emerald-100 text-emerald-700',
    title: 'Lakavimas ir alyvavimas',
    subtitle: 'Bona · Osmo · Opal',
    description:
      'Profesionalus grindų padengimas aukštos kokybės lakais arba natūraliomis alyvomis. Naudojame tik sertifikuotus ES standartus atitinkančius produktus – Bona Traffic HD, Osmo Polyx-Oil, Opal 20.',
    features: [
      'Lakavimas 3 sluoksniais su tarpiniais šlifavimais',
      'Alyvavimas 1 arba 2 sluoksniais',
      'Premium lakas Bona Traffic HD (komerciniam)',
      'Tonuotas lakas – spalvos pagal užsakymą',
      'Ekologiški produktai be kenksmingų medžiagų',
    ],
    price: 'nuo 6 €/m²',
    minOrder: 'Min. užsakymas 490€',
    duration: 'Džiūsta 12–24 val.',
    cta: 'Pasirinkti apdailą',
  },
  {
    id: 'terasu-atnaujinimas',
    href: '/terasu-atnaujinimas/',
    icon: '🏗️',
    color: 'from-stone-900/20 to-stone-700/10',
    borderHover: 'hover:border-stone-600/40',
    tag: 'Sezoninis darbas',
    tagColor: 'bg-stone-100 text-stone-700',
    title: 'Terasų atnaujinimas',
    subtitle: 'Lauko ir vidaus medinės terasos',
    description:
      'Medinių terasų šlifavimas, giluminis plovimas ir alyvavimas. Šaliname pilkėjimą, įplyšimus ir seną apdailą – grąžiname medienai natūralią spalvą ir suteikiame ilgalaikę apsaugą.',
    features: [
      'Tinka tik (ipė), eglaitei, pušiai, thermomediena',
      'Pilkėjimo ir dumblių šalinimas',
      'Šlifavimas prieš apdailą',
      'Terasinė alyva arba dažai pagal pageidavimą',
      'Apsauga nuo UV, drėgmės ir biologinio pažeidimo',
    ],
    price: 'pagal užklausą',
    minOrder: 'Nemokama apžiūra',
    duration: 'Priklauso nuo ploto',
    cta: 'Gauti kainą',
  },
  {
    id: 'komercines-grindys',
    href: '/komercines-grindys/',
    icon: '🏢',
    color: 'from-slate-900/20 to-slate-700/10',
    borderHover: 'hover:border-slate-600/40',
    tag: 'Dideliems projektams',
    tagColor: 'bg-slate-100 text-slate-700',
    title: 'Komercinės grindys',
    subtitle: 'Restoranai · Viešbučiai · Sporto salės',
    description:
      'Ilgametė patirtis su dideliais komerciniais projektais. Dirbame naktimis ir savaitgaliais, kad nekliudytume verslo veiklai. Naudojame aukščiausio atsparumo medžiagas komerciniam naudojimui.',
    features: [
      'Restoranai, kavinės, barai',
      'Viešbučiai ir apgyvendinimo įstaigos',
      'Sporto salės ir treniruoklių centrai',
      'Muziejai, bibliotekos, mokyklos',
      'Biurai ir verslo centrai',
    ],
    price: 'pagal projektą',
    minOrder: 'Individualūs sprendimai',
    duration: 'Darbas ne darbo valandomis',
    cta: 'Aptarti projektą',
  },
  {
    id: 'papildomos-paslaugos',
    href: '/kontaktai/',
    icon: '🔧',
    color: 'from-rose-900/20 to-rose-700/10',
    borderHover: 'hover:border-rose-600/40',
    tag: 'Papildomai',
    tagColor: 'bg-rose-100 text-rose-700',
    title: 'Papildomos paslaugos',
    subtitle: 'Visa kompleksinė priežiūra',
    description:
      'Papildomos paslaugos, kurios dažnai reikalingos kartu su šlifavimu. Viskas vienoje vietoje – nereikia ieškoti skirtingų specialistų.',
    features: [
      'Grindų tarpų glaistymas (2–6 €/m²)',
      'Girgždančių lentų tvirtinimas (25 €/val.)',
      'Baldų pernešimas ir surinkimas (25 €/val.)',
      'Grindjuosčių montavimas',
      'Naujos grindų dangos klojimas',
    ],
    price: 'nuo 25 €/val.',
    minOrder: 'Pagal darbų apimtį',
    duration: 'Susitariama',
    cta: 'Susisiekti',
  },
]

const processSteps = [
  { num: '01', title: 'Apžiūra ir sąmata', desc: 'Atvykstame, įvertiname grindų būklę, pateikiame detalią ir nemokamą sąmatą.' },
  { num: '02', title: 'Darbų planavimas', desc: 'Suderinami terminai, medžiagų pasirinkimas, pateikiamas tikslus darbų grafikas.' },
  { num: '03', title: 'Šlifavimas', desc: 'Profesionali Lagler įranga – greita, tvarkinga, minimali suirutė namuose.' },
  { num: '04', title: 'Apdaila', desc: 'Lakavimas arba alyvavimas pasirinktomis medžiagomis (Bona, Osmo, Opal).' },
  { num: '05', title: 'Rezultatas', desc: 'Grindys kaip naujos. Pateikiame priežiūros instrukciją ir kokybės garantiją.' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PaslaugosPage() {
  return (
    <main className="bg-[#F9F9F9]">

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-[#3E2723] via-[#2C1810] to-[#2C3E50] pt-32 pb-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80
                          text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="text-orange-400">●</span> UAB Mistras · Nuo 1994 m.
          </div>
          <h1 className="font-['Inter_Tight'] font-black text-white tracking-tight mb-5"
            style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', lineHeight: 1.05 }}>
            Mūsų paslaugos
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Nuo parketo šlifavimo iki komercinių patalpų atnaujinimo – visas grindų priežiūros
            paslaugų spektras Vilniuje. <span className="text-orange-400 font-semibold">Greitai ir tvarkingai. Be streso.</span>
          </p>
          {/* Quick nav pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`}
                className="bg-white/10 hover:bg-white/20 border border-white/15 text-white/80
                            text-sm font-medium px-4 py-2 rounded-full transition-colors">
                {s.icon} {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto space-y-8">
          {services.map((s) => (
            <div key={s.id} id={s.id}
              className={`bg-white rounded-2xl border-2 border-transparent ${s.borderHover}
                             transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg group`}>
              <div className={`grid md:grid-cols-[1fr_340px] gap-0`}>

                {/* LEFT — content */}
                <div className={`bg-gradient-to-br ${s.color} p-8 md:p-10`}>
                  <div className="flex items-start gap-4 mb-5">
                    <span className="text-4xl flex-shrink-0 mt-1">{s.icon}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${s.tagColor}`}>
                          {s.tag}
                        </span>
                      </div>
                      <h2 className="font-['Inter_Tight'] font-black text-[#3E2723] text-2xl md:text-3xl
                                     tracking-tight leading-tight">
                        {s.title}
                      </h2>
                      <p className="text-[#6B7280] text-sm font-semibold mt-0.5">{s.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-[#374151] leading-relaxed mb-6 text-[0.95rem]">
                    {s.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {s.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm text-[#374151]">
                        <span className="text-[#E67E22] font-bold mt-0.5 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link href={s.href}
                    className="inline-flex items-center gap-2 bg-[#E67E22] hover:bg-[#CF6D17]
                                   text-white font-['Inter_Tight'] font-bold px-6 py-3 rounded-xl
                                   transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg
                                   hover:shadow-orange-300/40 text-sm">
                    {s.cta} →
                  </Link>
                </div>

                {/* RIGHT — meta card */}
                <div className="bg-[#3E2723] p-8 md:p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">
                        Kaina
                      </p>
                      <p className="font-['Inter_Tight'] font-black text-[#E67E22] text-2xl">
                        {s.price}
                      </p>
                      <p className="text-white/50 text-xs mt-1">{s.minOrder}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">
                        Trukmė
                      </p>
                      <p className="text-white/80 font-semibold text-sm">{s.duration}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-2">
                        Garantijos
                      </p>
                      <div className="space-y-1.5">
                        {['Nemokama apžiūra', 'Be paslėptų mokesčių', 'Kokybės garantija'].map(g => (
                          <div key={g} className="flex items-center gap-2">
                            <span className="text-[#E67E22] text-xs">●</span>
                            <span className="text-white/70 text-xs">{g}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link href="/kontaktai/"
                    className="mt-8 w-full text-center bg-white/10 hover:bg-white/20
                                   border border-white/20 text-white font-['Inter_Tight'] font-bold
                                   px-4 py-3 rounded-xl text-sm transition-colors block">
                    Gauti sąmatą
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#E67E22] text-xs font-bold uppercase tracking-widest mb-3">Procesas</p>
            <h2 className="font-['Inter_Tight'] font-black text-[#3E2723] tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>
              Kaip tai veikia?
            </h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              Nuo pirmojo skambučio iki blizgančių grindų – paprastas ir skaidrus procesas.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                {/* connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+1.5rem)] right-0
                                  h-0.5 bg-gradient-to-r from-[#E67E22]/40 to-transparent z-0" />
                )}
                <div className="relative z-10 text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5D4037] to-[#3E2723]
                                  rounded-2xl flex items-center justify-center mx-auto mb-4
                                  shadow-lg shadow-amber-900/20">
                    <span className="font-['Inter_Tight'] font-black text-[#E67E22] text-lg">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-['Inter_Tight'] font-bold text-[#3E2723] text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER PRODUCTS ── */}
      <section className="bg-[#F9F9F9] py-16 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6B7280] text-sm uppercase tracking-widest font-semibold mb-6">
            Naudojame tik sertifikuotas medžiagas
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'BONA', desc: 'Parketo lakai ir alyvos' },
              { name: 'OSMO', desc: 'Natūralios medienos alyvos' },
              { name: 'LAGLER', desc: 'Profesionali šlifavimo įranga' },
              { name: 'OPAL', desc: 'Vandens pagrindo lakai' },
            ].map(p => (
              <div key={p.name}
                className="bg-white border border-gray-200 rounded-xl px-6 py-4 text-center
                              shadow-sm hover:shadow-md transition-shadow">
                <p className="font-['Inter_Tight'] font-black text-[#5D4037] text-lg tracking-wider">
                  {p.name}
                </p>
                <p className="text-[#6B7280] text-xs mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-gradient-to-br from-[#5D4037] to-[#3E2723] py-20 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">Pradėkime</p>
          <h2 className="font-['Inter_Tight'] font-black text-white mb-5 tracking-tight"
            style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
            Nežinote kurios paslaugos reikia?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Susisiekite – atvykstame, apžiūrime grindis ir patariame, kokia paslauga labiausiai tinka.
            <span className="text-orange-400 font-semibold"> Nemokama apžiūra ir sąmata.</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontaktai/"
              className="bg-[#E67E22] hover:bg-[#CF6D17] text-white font-['Inter_Tight']
                             font-bold px-8 py-4 rounded-xl text-base transition-all duration-200
                             hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-400/30">
              ✉ Gauti nemokamą sąmatą
            </Link>
            <a href="tel:+37060410608"
              className="bg-white/10 hover:bg-white/20 border border-white/25 text-white
                          font-['Inter_Tight'] font-bold px-8 py-4 rounded-xl text-base
                          transition-colors backdrop-blur-sm">
              📞 +370 604 10608
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
