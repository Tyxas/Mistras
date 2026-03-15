import type { Metadata } from 'next'
import ServicePageTemplate, { type ServicePageData } from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Grindjuosčių Tvirtinimas ir Montavimas Vilniuje | UAB Mistras',
  description: 'Profesionalus grindjuosčių tvirtinimas ir montavimas Vilniuje. Tikslus pjovimas, platus medžiagų pasirinkimas, 30+ metų patirtis. Nemokama apžiūra ir sąmata.',
  alternates: { canonical: 'https://mistras.lt/grindjuosciu-tvirtinimas/' },
  openGraph: {
    title: 'Grindjuosčių Tvirtinimas Vilniuje | UAB Mistras',
    description: 'Profesionalus grindjuosčių montavimas tiksliai ir estetiškai. Nuo 25 €/val.',
    url: 'https://mistras.lt/grindjuosciu-tvirtinimas/',
  },
}

const data: ServicePageData = {
  tag: 'Grindjuosčių tvirtinimas',
  headline: 'Grindjuosčių montavimas',
  headlineAccent: 'tiksliai ir estetiškai.',
  subheadline: 'Profesionalus grindjuosčių pjovimas ir tvirtinimas. Užtikriname idealų sujungimą kampuose ir tvarkingą bendrą vaizdą po grindų atnaujinimo.',
  price: 'nuo 25 €/val.',
  priceNote: 'Priklauso nuo sudėtingumo. Min. 490€.',
  badges: ['📏 Tikslus pjovimas', '✨ Estetiškas vaizdas', '🛠️ Visos medžiagos', '💎 Garantija'],

  featuresTag: 'Kodėl verta',
  featuresHeadline: 'Ką gausite su mumis',
  features: [
    { icon: '📐', title: 'Preciziškas pjovimas', desc: 'Naudojame profesionalią pjovimo įrangą, kuri užtikrina idealų grindjuosčių sujungimą net ir esant nelygiems kampams.' },
    { icon: '✨', title: 'Estetiškas užbaigimas', desc: 'Kiekviena detalė svarbi. Grindjuostės suteikia kambariui išbaigtumo pojūtį, todėl jas montuojame itin kruopščiai.' },
    { icon: '🛠️', title: 'Visų tipų grindjuostės', desc: 'Montuojame MDF, medines, plastikines bei faneruotas grindjuostes. Patariame, kokias rinktis pagal jūsų grindis.' },
    { icon: '🔗', title: 'Patikimas tvirtinimas', desc: 'Naudojame tik kokybiškus klijus ar specialius tvirtinimo elementus, kurie užtikrina stabilumą ilgus metus.' },
    { icon: '🤝', title: 'Kompleksinis sprendimas', desc: 'Dažniausiai atliekame kartu su šlifavimu, todėl jums nereikia ieškoti atskirų meistrų smulkiems darbams.' },
    { icon: '📋', title: 'Nemokama sąmata', desc: 'Įvertiname patalpos perimetrą, kampų sudėtingumą ir pateikiame detalią sąmatą.' },
  ],

  processTag: 'Darbo eiga',
  processHeadline: 'Kaip vyksta montavimas',
  steps: [
    { num: '01', title: 'Matavimas ir planavimas', desc: 'Išmatuojame tikslų patalpos perimetrą, aptariame grindjuosčių tipą ir tvirtinimo būdą.' },
    { num: '02', title: 'Tikslus pjovimas', desc: 'Grindjuostės pjaunamos specialiu kampiniu pjūklu, užtikrinant idealų prigludimą kampuose.' },
    { num: '03', title: 'Tvirtinimas', desc: 'Montavimas prie sienų naudojant klijus, vinutes arba specialius klipsus, priklausomai nuo pasirinkto produkto.' },
    { num: '04', title: 'Užbaigimas', desc: 'Kampų ir plyšelių užtaisymas specialiu akrilu arba vašku, kad vaizdas būtų vientisas ir estetiškas.' },
  ],

  baLocation: 'Vilnius, Lietuva',
  baType: 'MDF grindjuosčių montavimas',

  faqTag: 'DUK',
  faqHeadline: 'Klausimai apie montavimą',
  faqItems: [
    { q: 'Ar pačiam reikia pirkti grindjuostes?', a: 'Galite pasirūpinti patys arba galime patarti kur įsigyti geriausiomis kainomis. Taip pat galime pasirūpinti medžiagų atvežimu.' },
    { q: 'Kiek laiko trunka montavimas?', a: 'Standartiniame bute montavimas paprastai užtrunka iki vienos darbo dienos.' },
    { q: 'Ar montuojate ant nelygių sienų?', a: 'Stengiamės pasiekti geriausią įmanomą rezultatą, tačiau esant dideliems sienų nelygumams gali likti nedideli tarpeliai, kuriuos užpildome akrilu.' },
    { q: 'Ar suteikiate garantiją?', a: 'Taip, visoms montavimo paslaugoms suteikiame kokybės garantiją.' },
  ],

  ctaHeadline: 'Reikia profesionalaus montavimo?',
  ctaSubtext: 'Susisiekite šiandien – nemokama apžiūra ir patarimai dėl tinkamiausio sprendimo.',
}

export default function GrindjuosciuTvirtinimasPage() {
  return <ServicePageTemplate data={data} />
}
