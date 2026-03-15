import type { Metadata } from 'next'
import ServicePageTemplate, { type ServicePageData } from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Parketo Šlifavimas Vilniuje nuo 10€/m² | operatyviai ir tvarkingai | UAB Mistras',
  description: 'Profesionalus parketo šlifavimas Vilniuje. Greitas ir tvarkingas procesas, Lagler įranga, 30+ metų patirtis. Nuo 10€/m². Nemokama apžiūra ir sąmata.',
  alternates: { canonical: 'https://mistras.lt/parketo-slifavimas/' },
  openGraph: {
    title: 'Parketo Šlifavimas Vilniuje | UAB Mistras',
    description: 'Profesionalus parketo šlifavimas operatyviai ir tvarkingai. Nuo 10€/m².',
    url: 'https://mistras.lt/parketo-slifavimas/',
  },
}

const data: ServicePageData = {
  tag: 'Parketo šlifavimas',
  headline: 'Parketo šlifavimas Vilniuje',
  headlineAccent: 'operatyviai ir tvarkingai.',
  subheadline: 'Pilnas parketo atnaujinimo ciklas su profesionalia Lagler įranga. 30 metų patirtis – rezultatas garantuotas.',
  price: '10€/m²',
  priceNote: 'Pilnas ciklas, be PVM. Min. 490€.',
  badges: ['✅ Nuo 1994 m.', '✨ Tvarkingas procesas', '🎁 Nemokama apžiūra', '💎 Garantija'],

  featuresTag: 'Kodėl verta',
  featuresHeadline: 'Ką gausite su mumis',
  features: [
    { icon: '✨', title: 'Greitas ir tvarkingas procesas', desc: 'Naudojame profesionalią įrangą, kuri užtikrina maksimalią švarą jūsų namuose. Darbus atliekame operatyviai.' },
    { icon: '⚙️', title: 'Lagler profesionali įranga', desc: 'Naudojame Vokietijos gamintojo Lagler šlifuoklius – pramoninio lygio tikslumas ir rezultatas.' },
    { icon: '🪵', title: 'Visos medienos rūšys', desc: 'Ąžuolas, pušis, eglaitė, berzas, egzotinė mediena, bambūkas, mozaikinis parketas.' },
    { icon: '📐', title: 'Kampai ir kraštai', desc: 'Specialūs kampinio šlifavimo įrankiai užtikrina vienodą rezultatą visoje patalpoje – net prie sienų ir spintų.' },
    { icon: '🧱', title: 'Tarpų glaistymas', desc: 'Lentų tarpų užpildymas medžio miltelių ir klijų mišiniu pagal medienos spalvą.' },
    { icon: '📋', title: 'Nemokama sąmata', desc: 'Atvykstame, apžiūrime grindis ir pateikiame detalią kainodarą be jokių įsipareigojimų.' },
  ],

  processTag: 'Kaip tai veikia',
  processHeadline: 'Šlifavimo procesas žingsnis po žingsnio',
  steps: [
    { num: '01', title: 'Nemokama apžiūra', desc: 'Atvykstame į jūsų namus, įvertiname grindų būklę, medienos tipą, pažeidimų laipsnį. Pateikiame detalią sąmatą.' },
    { num: '02', title: 'Pasiruošimas', desc: 'Išnešami baldai (arba mūsų komanda juos perkelia). Grindys paruošiamos – pašalinami vinys, sutaisomi girgždantys plotai.' },
    { num: '03', title: 'Grubus šlifavimas', desc: 'Šlifavimas stambiu grūdeliu – šalinami seni lako ar alyvos sluoksniai, gilūs įbrėžimai ir nelygios vietos.' },
    { num: '04', title: 'Smulkus šlifavimas', desc: 'Keli šlifavimo etapai su smulkesniu grūdeliu – paviršius darosi lygus ir paruoštas apdailai.' },
    { num: '05', title: 'Apdaila', desc: 'Lakavimas arba alyvavimas pagal susitarimą. 3 lako sluoksniai su tarpiniais šlifavimais arba 1–2 alyvos sluoksniai.' },
    { num: '06', title: 'Rezultatas ir garantija', desc: 'Grindys kaip naujos. Pateikiame priežiūros instrukciją ir kokybės garantiją.' },
  ],

  baLocation: 'Žvėrynas, Vilnius',
  baType: 'Ąžuolo parketas · Lakavimas Bona',

  materialsTag: 'Medžiagos',
  materialsHeadline: 'Naudojame tik sertifikuotus produktus',
  materials: [
    { name: 'LAGLER', desc: 'Profesionali šlifavimo įranga' },
    { name: 'BONA', desc: 'Parketo lakai ir alyvos' },
    { name: 'OSMO', desc: 'Natūralios medienos alyvos' },
    { name: 'OPAL', desc: 'Vandens pagrindo lakai' },
  ],

  faqTag: 'DUK',
  faqHeadline: 'Klausimai apie parketo šlifavimą',
  faqItems: [
    { q: 'Ar procesas bus švarus?', a: 'Taip. Nors šlifavimas yra techninis procesas, naudojame modernią įrangą, kuri užtikrina, kad jūsų namai liktų tvarkingi. Minimali suirutė suvaldoma profesionaliai.' },
    { q: 'Kiek laiko trunka parketo šlifavimas?', a: 'Vidutinis butas (50–70 m²) – 1–2 dienos. Lakui išdžiūti reikia 12–24 val., alyvai – 8–12 val. Tikslų grafiką pateikiame prieš darbų pradžią.' },
    { q: 'Ar galima šlifuoti tik dalį kambario?', a: 'Techniškai galima, tačiau nerekomenduojame. Naujai nušlifuota vieta visada bus šviežesnės spalvos nei likusios grindys. Geriau šlifuoti visą kambarį.' },
    { q: 'Ar reikia išsikraustyti šlifavimo metu?', a: 'Rekomenduojame išsikraustyti iš šlifuojamo kambario. Mūsų naudojama technologija užtikrina tvarkingą darbą, tad galima gyventi kitose patalpose.' },
    { q: 'Kiek kartų galima šlifuoti parketą?', a: 'Tai priklauso nuo parketo storio. Standartinis 22mm parketas gali būti šlifuojamas 5–8 kartus. Prieš darbą įvertiname likusį medžio sluoksnį.' },
    { q: 'Ar dirbate savaitgaliais?', a: 'Taip, dirbame ir savaitgaliais. Komerciniam sektoriui – ir naktimis, kad nekliudytume veiklai.' },
  ],

  ctaHeadline: 'Pasiruošę atnaujinti parketą?',
  ctaSubtext: 'Susisiekite šiandien – nemokama apžiūra be jokių įsipareigojimų. Sąmatą pateikiame per 24 val.',
}

export default function ParketoSlifavimasPage() {
  return <ServicePageTemplate data={data} />
}
