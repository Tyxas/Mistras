import type { Metadata } from 'next'
import ServicePageTemplate, { type ServicePageData } from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Parketo Šlifavimas Vilniuje nuo 10€/m² | Be Dulkių | UAB Mistras',
  description: 'Profesionalus parketo šlifavimas Vilniuje. Be dulkių technologija, Lagler įranga, 30+ metų patirtis. Nuo 10€/m². Nemokama apžiūra ir sąmata.',
  alternates: { canonical: 'https://mistras.lt/parketo-slifavimas/' },
  openGraph: {
    title: 'Parketo Šlifavimas Vilniuje | UAB Mistras',
    description: 'Profesionalus parketo šlifavimas be dulkių. Nuo 10€/m².',
    url: 'https://mistras.lt/parketo-slifavimas/',
  },
}

const data: ServicePageData = {
  tag: 'Parketo šlifavimas',
  headline: 'Parketo šlifavimas Vilniuje',
  headlineAccent: 'be dulkių, nuo 10€/m².',
  subheadline: 'Pilnas parketo atnaujinimo ciklas su profesionalia Lagler įranga ir HEPA dulkių surinkimo sistema. 30 metų patirtis – rezultatas garantuotas.',
  price: '10€/m²',
  priceNote: 'Pilnas ciklas, be PVM. Min. 490€.',
  badges: ['✅ Nuo 1994 m.', '🫁 Be dulkių', '🎁 Nemokama apžiūra', '💎 Garantija'],

  featuresTag: 'Kodėl verta',
  featuresHeadline: 'Ką gausite su mumis',
  features: [
    { icon: '🫁', title: 'Be dulkių technologija', desc: 'HEPA H13 filtravimo sistema surenka iki 99.9% dulkių tiesiogiai nuo šlifuoklio. Namai lieka švarūs.' },
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
    { q: 'Ar šlifuojant būna daug dulkių?', a: 'Ne. Naudojame HEPA H13 filtravimo sistemą, kuri surenka iki 99.9% dulkių tiesiogiai nuo šlifuoklio. Dulkių sklaida į kitus kambarius yra minimali.' },
    { q: 'Kiek laiko trunka parketo šlifavimas?', a: 'Vidutinis butas (50–70 m²) – 1–2 dienos. Lakui išdžiūti reikia 12–24 val., alyvai – 8–12 val. Tikslų grafiką pateikiame prieš darbų pradžią.' },
    { q: 'Ar galima šlifuoti tik dalį kambario?', a: 'Techniškai galima, tačiau nerekomenduojame. Naujai nušlifuota vieta visada bus šviežesnės spalvos nei likusios grindys. Geriau šlifuoti visą kambarį.' },
    { q: 'Ar reikia išsikraustyti šlifavimo metu?', a: 'Rekomenduojame išsikraustyti iš šlifuojamo kambario. Dėl HEPA technologijos dulkių sklaida į kitus kambarius minimali, tad galima gyventi kitose patalpose.' },
    { q: 'Kiek kartų galima šlifuoti parketą?', a: 'Tai priklauso nuo parketo storio. Standartinis 22mm parketas gali būti šlifuojamas 5–8 kartus. Prieš darbą įvertiname likusį medžio sluoksnį.' },
    { q: 'Ar dirbate savaitgaliais?', a: 'Taip, dirbame ir savaitgaliais. Komerciniam sektoriui – ir naktimis, kad nekliudytume veiklai.' },
  ],

  ctaHeadline: 'Pasiruošę atnaujinti parketą?',
  ctaSubtext: 'Susisiekite šiandien – nemokama apžiūra be jokių įsipareigojimų. Sąmatą pateikiame per 24 val.',
}

export default function ParketoSlifavimasPage() {
  return <ServicePageTemplate data={data} />
}
