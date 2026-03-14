import type { Metadata } from 'next'
import ServicePageTemplate, { type ServicePageData } from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Grindų Alyvavimas ir Lakavimas Vilniuje | Bona · Osmo | UAB Mistras',
  description: 'Profesionalus grindų alyvavimas ir lakavimas Vilniuje. Bona Traffic HD, Osmo Polyx-Oil. Ekologiška apsauga, ilgaamžis rezultatas. Nuo 6€/m². Nemokama apžiūra.',
  alternates: { canonical: 'https://mistras.lt/grindu-alyvavimas/' },
  openGraph: {
    title: 'Grindų Alyvavimas ir Lakavimas | UAB Mistras',
    description: 'Bona Traffic HD, Osmo Polyx-Oil. Natūrali ir ilgaamžė apsauga nuo 6€/m².',
    url: 'https://mistras.lt/grindu-alyvavimas/',
  },
}

const data: ServicePageData = {
  tag: 'Alyvavimas ir lakavimas',
  headline: 'Grindų alyvavimas',
  headlineAccent: 'ir lakavimas Vilniuje.',
  subheadline: 'Naudojame tik aukščiausios klasės produktus: Bona Traffic HD, Osmo Polyx-Oil, Opal 20. Ekologiška apsauga, ilgaamžis rezultatas ir natūrali medienos grožis.',
  price: '6€/m²',
  priceNote: 'Apdaila po šlifavimo. Be PVM. Min. 490€.',
  badges: ['✨ Bona · Osmo · Opal', '🌿 Ekologiška', '🎨 Spalvų pasirinkimas', '🛡️ Ilgaamžė apsauga'],

  featuresTag: 'Produktai ir privalumai',
  featuresHeadline: 'Ką gausite su mūsų apdaila',
  features: [
    { icon: '💎', title: 'Bona Traffic HD', desc: 'Aukščiausios klasės lakas komercinėms patalpoms. Ypatingas atsparumas trinčiai ir chemikalams – 7–10 metų apsauga.' },
    { icon: '🌿', title: 'Osmo Polyx-Oil', desc: 'Natūrali alyva iš augalinių vašku. Ekologiška, pabrėžia medienos raštą ir spalvą. Lengvai atnaujinama.' },
    { icon: '💧', title: 'Opal 20 lakas', desc: 'Vandens pagrindo lakas su puikiu kietimu. Mažas kvapas, greitai džiūsta, puiki apsauga.' },
    { icon: '🎨', title: 'Tonuojame pagal pageidavimą', desc: 'Prieš apdailą galime suteikti grindims norimą atspalvį. Plati Bona ir Osmo spalvų paletė.' },
    { icon: '⏱️', title: 'Greitas džiūvimas', desc: 'Tarp sluoksnių – 12–24 val. Alyvai džiūvimas trumpesnis – 8–12 val. Pilnas sukietėjimas per 7 dienas.' },
    { icon: '♻️', title: 'Ekologiški produktai', desc: 'Visi naudojami produktai sertifikuoti pagal ES standartus. Be kenksmingų medžiagų, saugūs vaikams ir gyvūnams.' },
  ],

  processTag: 'Apdailos procesas',
  processHeadline: 'Kaip vyksta lakavimas ir alyvavimas',
  steps: [
    { num: '01', title: 'Paviršiaus paruošimas', desc: 'Po šlifavimo kruopščiai nuvalomos visos dulkės. Paviršius paruošiamas apdailai – tikrinama drėgmė ir temperatūra.' },
    { num: '02', title: 'Medžiagos pasirinkimas', desc: 'Kartu su klientu pasirenkame laką arba alyvą, blizgesio lygį (matinis, pusiaumatinis, blizgus) ir spalvą.' },
    { num: '03', title: 'Gruntavimas', desc: 'Užnešamas gruntuojamasis sluoksnis, kuris užtikrina gerą sukibimą ir vienodą galutinio sluoksnio spalvą.' },
    { num: '04', title: 'Apdailos sluoksniai', desc: 'Užnešami 2–3 lako arba 1–2 alyvos sluoksniai su tarpiniais šlifavimais tarp kiekvieno.' },
    { num: '05', title: 'Galutinė patikra', desc: 'Patikriname vienodumą, blizgesį ir apsaugos kokybę. Pateikiame priežiūros instrukciją.' },
  ],

  baLocation: 'Šnipiškės, Vilnius',
  baType: 'Ąžuolo parketas · Osmo Polyx-Oil',

  materialsTag: 'Medžiagos',
  materialsHeadline: 'Tik sertifikuoti produktai',
  materials: [
    { name: 'BONA Traffic HD', desc: 'Komercinės klasės lakas' },
    { name: 'OSMO Polyx-Oil', desc: 'Natūrali medienos alyva' },
    { name: 'OPAL 20', desc: 'Vandens pagrindo lakas' },
    { name: 'BONA Craft Oil', desc: 'Tonuota alyva' },
  ],

  faqTag: 'DUK',
  faqHeadline: 'Klausimai apie alyvavimą ir lakavimą',
  faqItems: [
    { q: 'Lakas ar alyva – kas geriau?', a: 'Lakas suteikia stipresnę apsaugą ir blizgesį – tinka virtuvėms, koridoriams, komercinėms patalpoms. Alyva – natūralesnę išvaizdą ir lengvesnį atnaujinimą, tinka miegamiesiems ir kabinetams. Galime patarti po apžiūros.' },
    { q: 'Kiek sluoksnių lako reikia?', a: 'Rekomenduojame 3 sluoksnius: gruntas + 2 apdailos sluoksniai. Komercinėms patalpoms – iki 4 sluoksnių Bona Traffic HD.' },
    { q: 'Ar galima pakeisti grindų spalvą?', a: 'Taip. Po šlifavimo galime tonuoti grindis norima spalva prieš lakavimą ar alyvavimą. Siūlome spalvų paletę iš Bona ir Osmo kolekcijų.' },
    { q: 'Kiek laiko džiūsta lakas?', a: 'Tarp sluoksnių – 12–24 val. Galutinis sukietėjimas – 7 dienos. Tuo laikotarpiu reikia vengti sunkių baldų ir intensyvaus naudojimo.' },
    { q: 'Ar alyvuotos grindys sunkiau prižiūrimos?', a: 'Ne – priešingai. Alyvuotos grindys lengvai atnaujinamos vietiškai, nereikia šlifuoti viso kambario. Tinkama priežiūra prailgina tarnavimo laiką iki 15+ metų.' },
  ],

  ctaHeadline: 'Pasiruošę suteikti grindims naują gyvenimą?',
  ctaSubtext: 'Nemokama apžiūra ir sąmata. Patariame, kokia apdaila labiausiai tiks jūsų grindims.',
}

export default function GrinduAlyvavimasPage() {
  return <ServicePageTemplate data={data} />
}
