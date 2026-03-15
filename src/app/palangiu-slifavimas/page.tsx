import type { Metadata } from 'next'
import ServicePageTemplate, { type ServicePageData } from '@/components/services/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Palangių Šlifavimas ir Atnaujinimas Vilniuje | UAB Mistras',
  description: 'Profesionalus medinių palangių šlifavimas ir atnaujinimas Vilniuje. Įbrėžimų šalinimas, lakavimas, alyvavimas. Sugrąžinkite palangėms pradinę išvaizdą.',
  alternates: { canonical: 'https://mistras.lt/palangiu-slifavimas/' },
  openGraph: {
    title: 'Palangių Šlifavimas Vilniuje | UAB Mistras',
    description: 'Medinių palangių atnaujinimas: šlifavimas, lakavimas, alyvavimas. Profesionalus rezultatas.',
    url: 'https://mistras.lt/palangiu-slifavimas/',
  },
}

const data: ServicePageData = {
  tag: 'Palangių šlifavimas',
  headline: 'Medinių palangių šlifavimas',
  headlineAccent: 'ir profesionalus atnaujinimas.',
  subheadline: 'Sugrąžinkite savo palangėms pradinį grožį. Šaliname įbrėžimus, dėmes ir nusidėvėjimą, naudodami premium medžiagas.',
  price: 'pagal užklausą',
  priceNote: 'Kaina priklauso nuo kiekio ir būklės. Min. užsakymas 490€.',
  badges: ['✅ Meistrystė nuo 1994 m.', '✨ Premium apdaila', '🎁 Nemokama apžiūra', '💎 Ilgaamžis rezultatas'],

  featuresTag: 'Kodėl atnaujinti',
  featuresHeadline: 'Palangių restauravimo privalumai',
  features: [
    { icon: '✨', title: 'Kaip naujos', desc: 'Po mūsų atnaujinimo palangės atrodo kaip ką tik sumontuotos – be jokių ankstesnio naudojimo žymių.' },
    { icon: '🛡️', title: 'Atspari apsauga', desc: 'Naudojame drėgmei ir UV spinduliams atsparius produktus (Bona, Osmo), užtikrinančius ilgaamžiškumą.' },
    { icon: '🪵', title: 'Visos medienos rūšys', desc: 'Ąžuolas, uosis, pušis ar egzotinė mediena – išmanome kiekvienos rūšies specifiką.' },
    { icon: '📐', title: 'Preciziškas darbas', desc: 'Kruopščiai nušlifuojame kiekvieną kampą, nepažeisdami aplinkinių sienų ar langų rėmų.' },
    { icon: '♻️', title: 'Tvaresnis pasirinkimas', desc: 'Restauruoti seną, kokybišką medį yra pigiau ir ekologiškiau nei keisti palanges naujomis.' },
    { icon: '📋', title: 'Greita apžiūra', desc: 'Atvykstame, įvertiname būklę ir pateikiame pasiūlymą per 24 valandas.' },
  ],

  processTag: 'Procesas',
  processHeadline: 'Kaip vyksta atnaujinimas',
  steps: [
    { num: '01', title: 'Apžiūra', desc: 'Įvertiname palangių būklę, nustatome medienos rūšį ir aptariame pageidaujamą apdailos variantą.' },
    { num: '02', title: 'Apsauga', desc: 'Kruopščiai apklijuojame langų rėmus ir sienas apsaugine juosta, kad apsaugotume aplinką.' },
    { num: '03', title: 'Šlifavimas', desc: 'Pašaliname seną laką ar dažus, sulyginame paviršių ir pašaliname visus mechaninius pažeidimus.' },
    { num: '04', title: 'Glaistymas', desc: 'Jei yra gilių įtrūkimų, juos užpildome specialiu medžio glaistu, atitinkančiu spalvą.' },
    { num: '05', title: 'Apdaila', desc: 'Dengiame 3 sluoksniais pasirinkto lakų arba alyvuojame premium klasės priemonėmis.' },
    { num: '06', title: 'Garantija', desc: 'Paliekame priežiūros rekomendacijas ir suteikiame garantiją atliktiems darbams.' },
  ],

  baLocation: 'Vilnius, Centras',
  baType: 'Ąžuolinės palangės · Alyvavimas Osmo',

  materialsTag: 'Medžiagos',
  materialsHeadline: 'Kokybė, kuria pasitikime',
  materials: [
    { name: 'BONA', desc: 'Aukščiausios klasės lakai' },
    { name: 'OSMO', desc: 'Natūralios alyvos medienai' },
    { name: 'FESTOOL', desc: 'Preciziška šlifavimo įranga' },
    { name: 'LAGLER', desc: 'Vokiška šlifavimo kokybė' },
  ],

  faqTag: 'DUK',
  faqHeadline: 'Klausimai apie palangių atnaujinimą',
  faqItems: [
    { q: 'Ar dulkės nepakenks langams?', a: 'Tikrai ne. Naudojame profesionalią siurbimo įrangą ir papildomai apsaugome rėmus, tad procesas yra itin švarus.' },
    { q: 'Kiek laiko trunka darbai?', a: 'Priklausomai nuo kiekio, dažniausiai užtrunkame 1 dieną. Apdailos džiūvimas užima papildomą laiką.' },
    { q: 'Ar galima pakeisti palangių spalvą?', a: 'Taip, šlifavimo metu galime palanges beicuoti arba naudoti spalvotą alyvą, pakeičiant jų toną.' },
    { q: 'Ar dirbate su lakuotomis palangėmis?', a: 'Taip, restauruojame tiek lakuotas, tiek alyvuotas ar net dažytas medines palanges.' },
    { q: 'Ar atnaujinimas padeda nuo drėgmės?', a: 'Taip, naujas premium lakas ar alyva sukuria barjerą, apsaugantį medį nuo kondensato poveikio.' },
    { q: 'Koks minimalus užsakymas?', a: 'Minimalus užsakymas yra 490€. Rekomenduojame atnaujinti visas namų palanges vienu metu.' },
  ],

  ctaHeadline: 'Norite atnaujinti savo palanges?',
  ctaSubtext: 'Susisiekite su mumis – nemokama apžiūra ir sąmata per 24 valandas.',
}

export default function PalangiuSlifavimasPage() {
  return <ServicePageTemplate data={data} />
}
