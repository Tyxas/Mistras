import type { Metadata } from 'next'
import ServicePageTemplate, { type ServicePageData } from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Šlifavimas Be Dulkių Vilniuje – HEPA Technologija | UAB Mistras',
  description: 'Grindų šlifavimas be dulkių Vilniuje. HEPA H13 filtravimas surenka 99.9% dulkių. Idealu šeimoms su vaikais ir alergikams. Nemokama apžiūra.',
  alternates: { canonical: 'https://mistras.lt/be-dulkiu-slifavimas/' },
  openGraph: {
    title: 'Šlifavimas Be Dulkių | UAB Mistras',
    description: 'HEPA H13 filtravimas – 99.9% dulkių surinkimas. Saugu vaikams ir alergikams.',
    url: 'https://mistras.lt/be-dulkiu-slifavimas/',
  },
}

const data: ServicePageData = {
  tag: 'Be dulkių šlifavimas',
  headline: 'Šlifavimas be dulkių –',
  headlineAccent: 'HEPA H13 technologija.',
  subheadline: 'Mūsų įrangoje integruota HEPA H13 filtravimo sistema surenka iki 99.9% šlifavimo metu susidarančių dulkių. Idealu šeimoms su vaikais, alergikams ir gyvūnų savininkams.',
  price: 'Įskaičiuota',
  priceNote: 'Į kiekvieną šlifavimo kainą. Be papildomų mokesčių.',
  badges: ['🫁 99.9% dulkių surinkimas', '👶 Saugu vaikams', '🤧 Tinka alergikams', '🐾 Gyvūnų savininkai'],

  featuresTag: 'Technologija',
  featuresHeadline: 'Kaip veikia mūsų sistema',
  features: [
    { icon: '🌀', title: 'HEPA H13 filtras', desc: 'Medicininės klasės filtras sulaiko 99.97% dalelių iki 0.3 mikrometro dydžio – tai mažiau nei virusų dydis.' },
    { icon: '⚡', title: 'Cikloninis atskyrimas', desc: 'Pirminis cikloninis atskyrimas surenka stambesnes daleles prieš HEPA filtrą, prailgindamas jo tarnavimo laiką.' },
    { icon: '🔇', title: 'Sumažintas triukšmas', desc: 'Integruota dulkių surinkimo sistema taip pat slopina šlifuoklio triukšmą, todėl darbas mažiau trukdo kaimynams.' },
    { icon: '🏠', title: 'Galima gyventi namuose', desc: 'Dėl minimalios dulkių sklaidos galima toliau gyventi namuose kitose patalpose šlifavimo metu.' },
    { icon: '🛋️', title: 'Nereikia dengti baldų', desc: 'Tradicinio šlifavimo metu reikia dengti visus baldus. Su mūsų sistema to daryti nebūtina.' },
    { icon: '💚', title: 'Ekologiška', desc: 'Nėra dulkių emisijos į aplinką. Surinktos dulkės tinkamai utilizuojamos.' },
  ],

  processTag: 'Procesas',
  processHeadline: 'Šlifavimas be dulkių – kaip tai atrodo',
  steps: [
    { num: '01', title: 'Įrangos paruošimas', desc: 'Šlifuoklis prijungiamas prie HEPA dulkių surinkimo sistemos. Patikrinama filtrų būklė prieš kiekvieną darbą.' },
    { num: '02', title: 'Sandarios jungtys', desc: 'Visi jungiamieji elementai sandariai užfiksuojami – tai užtikrina, kad nė viena dulkelė nepatektų į orą.' },
    { num: '03', title: 'Šlifavimas', desc: 'Šlifavimas vyksta kaip įprastai, tik visos dulkės akimirksniu surenkamos į rezervuarą.' },
    { num: '04', title: 'Valymas', desc: 'Po šlifavimo patalpa beveik nereikalauja papildomo valymo – dulkių ant baldų ir grindų praktiškai nėra.' },
  ],

  baLocation: 'Antakalnis, Vilnius',
  baType: 'Pušies grindys · Alyvavimas Osmo',

  faqTag: 'DUK',
  faqHeadline: 'Klausimai apie šlifavimą be dulkių',
  faqItems: [
    { q: 'Ar tikrai nėra JOKIŲ dulkių?', a: 'Sistema surenka iki 99.9% dulkių. Nedidelė likutinė dalis gali patekti į orą, todėl rekomenduojame ventiliuoti patalpą po darbų. Tačiau palyginus su tradiciniu šlifavimu – skirtumas yra dramatiškas.' },
    { q: 'Ar ši technologija brangesnė?', a: 'Ne. Be dulkių šlifavimas yra įskaičiuotas į standartinę kainą. Visos mūsų mašinos turi integruotą HEPA sistemą – tai mūsų standartas, ne priedas.' },
    { q: 'Ar galiu likti namuose šlifavimo metu?', a: 'Taip, galite likti kitose patalpose. Tačiau rekomenduojame išeiti bent šlifavimo valandai – dėl triukšmo, ne dėl dulkių.' },
    { q: 'Ar tinka alergikams?', a: 'Taip. HEPA sistema sulaiko net smulkiausias dulkių daleles, kurios sukelia alergines reakcijas. Tai viena pagrindinių priežasčių, kodėl klientai renkasi mus.' },
  ],

  ctaHeadline: 'Šlifavimas be dulkių – susisiekite dabar',
  ctaSubtext: 'Nemokama apžiūra ir sąmata. Dirbame visame Vilniuje ir apylinkėse.',
}

export default function BeDulkiuSlifavimasPage() {
  return <ServicePageTemplate data={data} />
}
