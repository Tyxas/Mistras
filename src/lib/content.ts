/**
 * lib/content.ts
 * Single source of truth for ALL Lithuanian UI text.
 * Import from here — never hardcode strings in components.
 * Agents: add new strings here, never inline in JSX.
 */

export const nav = {
  logo: 'Mistras',
  links: [
    { label: 'Paslaugos', href: '/paslaugos/' },
    { label: 'Atlikti darbai', href: '/atlikti-darbai/' },
    { label: 'Kainos', href: '/kainos/' },
    { label: 'Apie mus', href: '/apie-mus/' },
    { label: 'Kontaktai', href: '/kontaktai/' },
  ],
  ctaLabel: 'Gauti sąmatą',
  mobileCallLabel: 'Skambinti',
  mobileQuoteLabel: 'Gauti sąmatą',
}

export const hero = {
  eyebrow: 'Šeimos verslas · Vilnius · Nuo 1994',
  headline: 'Grindų šlifavimas su 30 metų',
  headlineAccent: 'meistrystės garantija',
  subheadline: '30 metų meistrystė, premium medžiagos (Bona, Osmo) ir švarus bei tvarkingas procesas – jūsų namai bus kaip nauji.',
  ctaPrimary: 'Gauti nemokamą sąmatą',
  ctaSecondary: 'Peržiūrėti darbus',
  badges: [
    'Nuo 1994 m.',
    'Laiku ir tvarkingai',
    'Nemokama sąmata',
    'Kokybės garantija',
  ],
  baLabels: { before: 'Prieš', after: 'Po' },
}

export const trustBar = {
  stats: [
    { value: '1994', label: 'Įkurta' },
    { value: '30+', label: 'Metų rinkoje' },
    { value: '500+', label: 'Patenkintų klientų' },
    { value: '5★', label: 'Google įvertinimas' },
  ],
}

export const aboutIntro = {
  sectionTag: 'Apie mus',
  headline: 'Meistrystė, sukūrusi pasitikėjimą',
  text1: 'Įmonė UAB „Mistras“ specializuojasi grindų ir terasų įrengime bei priežiūroje nuo 1994 metų. Atliekame profesionalų parketo šlifavimą, glaistymą, lakavimą bei alyvavimą, užtikriname medinių grindų ilgaamžiškumą.',
  text2: 'Mūsų specializacija – senų medinių grindų renovacija, tačiau profesionaliai atliekame ir visus kitus grindų įrengimo bei atnaujinimo darbus.',
  featuresTitle: 'Naudojame aukštos kokybės šlifavimo įrangą, kuri užtikrina:',
  features: [
    'Išraiškingą, lygų ir švarų paviršių.',
    'Greitą ir efektyvų darbą.',
    'Ilgaamžį rezultatą, kuris išryškina medienos tekstūrą.',
  ],
  closing: 'Po šlifavimo grindys yra dengiamos ekologiškais lakais arba alyvomis, suteikiančiomis apsaugą ir estetinį grožį.',
}

export const aboutPage = {
  hero: {
    eyebrow: 'Apie mus',
    headline: 'UAB „Mistras“ – kokybė, patirtis ir ',
    headlineAccent: 'meistrystė nuo 1994.',
    subheadline: 'Per daugiau nei tris dešimtmečius sukaupėme tvirtą meistrystės pagrindą ir pelnėme klientų pasitikėjimą kokybišku darbu bei atsakingu požiūriu.',
  },
  intro: {
    title: 'Patyrusi grindų įrengimo ir renovacijos įmonė',
    text: 'UAB „Mistras“ veikia nuo 1994 metų. Mūsų specializacija – senų medinių grindų renovacija, tačiau profesionaliai atliekame ir visus kitus grindų įrengimo bei atnaujinimo darbus. Dirbame tiek namų ūkiuose, tiek komercinėse patalpose.',
  },
  services: {
    title: 'Ką atliekame:',
    items: [
      'Profesionaliai šlifuojame ir atnaujiname medines grindis',
      'Lakuojame, alyvuojame, vaškuojame',
      'Renovuojame tiek naujai paklotas, tiek senas medines grindis',
      'Atkuriame net dažytas grindis, grąžindami joms natūralią išvaizdą',
      'Atliekame PVC dangos atnaujinimą ir vaškavimą, suteikdami jai ilgaamžiškumo ir estetinį atsinaujinimą',
    ],
  },
  history: {
    sectionTag: 'Mūsų istorija',
    headline: 'Įmonės istorija',
    p1: 'Mano kelias į grindų meistrystę prasidėjo 1986 metais, kai baigiau staliaus mokyklą ir pradėjau dirbti su medžiu. Įgyta patirtis ir noras kurti kokybiškus darbus natūraliai vedė į nuosavą veiklą, todėl 1994 metais įkūriau personalinę įmonę „Mistras“.',
    p2: 'Pirmuosius darbus atlikome dviese su žmona – klojome parketą, o vėliau, atsiradus poreikiui, įsigijome ir pirmąją šlifavimo mašiną. Užsakymų daugėjo, todėl pradėjome plėsti komandą ir samdyti darbuotojus.',
    p3: 'Per daugelį metų įmonė patyrė visko – augo, traukėsi, išgyveno pakilimus ir nuosmukius, tačiau visada sugrįždavo stipresnė. Šiandien „Mistras“ yra brandi, patirties užgrūdinta įmonė, išlaikiusi pagrindines savo vertybes – kokybišką ir tvarkingą darbą bei pagarbą klientui.',
  },
  works: {
    sectionTag: 'Mūsų darbai',
    headline: 'Patirtis įvairiuose projektuose',
    text: 'Per daugelį metų dirbome įvairiuose projektuose — nuo mažų butukų, privačių namų iki rimtų, sudėtingų renovacijų, pavyzdžiui, sporto salėse, muziejuose, viešbučiuose ir sąrašas dar ilgas. Turima patirtis apima darbus tiek senuose daugiabučiuose, tiek naujos statybos namuose, taip pat išskirtiniuose individualiuose bei komerciniuose projektuose.',
    closing: 'Kiekviename objekte siekiame to paties – patikimos kokybės, kruopščiai ir profesionaliai atlikto darbo rezultato kuris tarnautų ilgus metus ir džiugintų jų šeimininkus.',
  },
}

export const calculator = {
  sectionTag: 'Greita skaičiuoklė',
  headline: 'Apskaičiuokite preliminarią kainą',
  subtext: 'Pasirinkite grindų plotą ir apdailos tipą – skaičiuoklė parodys orientacinę kainą. Tikslią sąmatą pateikiame po nemokamos apžiūros.',
  areaLabel: 'Grindų plotas ',
  areaUnit: 'm²',
  finishLabel: 'Apdailos tipas',
  finishOptions: [
    { value: 'sand', label: 'Tik šlifavimas (nuo 10€/m²)' },
    { value: 'lacquer', label: 'Šlifavimas + Lakavimas (nuo 16€/m²)' },
    { value: 'oil', label: 'Šlifavimas + Alyvavimas (nuo 18€/m²)' },
    { value: 'premium', label: 'Premium – Bona Traffic HD (nuo 22€/m²)' },
  ],
  resultLabel: 'Preliminari kaina',
  disclaimer: '*Orientacinė kaina. Tikslus skaičiavimas po apžiūros.',
  ctaLabel: 'Gauti tikslią sąmatą →',
  minimumNote: 'Minimalus užsakymas nuo 490€. Kainos nurodytos +PVM.',
}

export const services = {
  sectionTag: 'Mūsų paslaugos',
  headline: 'Viskas, ko reikia jūsų grindims',
  subtext: 'Nuo parketo šlifavimo iki komercinių patalpų atnaujinimo – atliekame visus medienos priežiūros darbus Vilniuje.',
  cards: [
    {
      icon: '🪵',
      title: 'Parketo šlifavimas',
      desc: 'Pilnas šlifavimo ciklas – senų lako sluoksnių nuėmimas, kelių grūdų šlifavimas, kraštų apdirbimas.',
      price: 'nuo 10€/m²',
      href: '/parketo-slifavimas/',
      linkLabel: 'Sužinoti daugiau →',
    },
    {
      icon: '✨',
      title: 'Lakavimas ir alyvavimas',
      desc: 'Tik aukščiausios klasės produktai: Bona Traffic HD, Osmo Polyx-Oil. Ekologiška ir ilgaamžė apsauga.',
      price: 'nuo 6€/m²',
      href: '/grindu-alyvavimas/',
      linkLabel: 'Sužinoti daugiau →',
    },
    {
      icon: '🏗️',
      title: 'Terasų atnaujinimas',
      desc: 'Medinių terasų šlifavimas, plovimas, alyvavimas. Nauja išvaizda ir apsauga nuo atmosferos poveikio.',
      price: 'pagal užklausą',
      href: '/terasu-atnaujinimas/',
      linkLabel: 'Sužinoti daugiau →',
    },
    {
      icon: '🏢',
      title: 'Komercinės grindys',
      desc: 'Restoranai, viešbučiai, sporto salės, muziejai, mokyklos. Patirtis su dideliais projektais.',
      price: 'pagal projektą',
      href: '/komercines-grindys/',
      linkLabel: 'Sužinoti daugiau →',
    },
  ],
}

export const whyUs = {
  sectionTag: 'Kodėl Mistras?',
  headline: 'Mes nesame tiesiog „šlifuotojai"',
  subtext: 'Esame meistrai, kurie restauruoja namų jaukumą. Mūsų darbas – investicija, ne išlaidos.',
  pillars: [
    {
      icon: '🤝',
      title: 'Tvarkome po savęs',
      desc: 'Paliekame namus švariais. Jokio chaoso, jokių papildomų rūpesčių.',
    },
    {
      icon: '🎓',
      title: '30+ metų patirtis',
      desc: 'Šeimos verslas nuo 1994 m. Dirbame su ąžuolo parketu, PVC, terasomis, sporto salėmis.',
    },
    {
      icon: '💎',
      title: 'Premium medžiagos',
      desc: 'Tik Bona, Osmo, Lagler. ES kokybės standartai, ilgaamžė apsauga, ekologiška.',
    },
    {
      icon: '📋',
      title: 'Nemokama sąmata',
      desc: 'Atvykstame, apžiūrime, pateikiame detalią sąmatą. Jokių paslėptų mokesčių.',
    },
  ],
}

export const portfolio = {
  sectionTag: 'Atlikti darbai',
  headline: 'Rezultatai kalba patys',
  subtext: 'Kiekviename projekte siekiame to paties – ilgaamžio, profesionaliai atlikto darbo rezultato.',
  filterLabels: ['Visi', 'Parketo šlifavimas', 'Terasos', 'Komerciniai', 'Laiptai'],
  baLabels: { before: 'Prieš', after: 'Po' },
  ctaLabel: 'Peržiūrėti visus darbus →',
  ctaHref: '/atlikti-darbai/',
}

export const testimonials = {
  sectionTag: 'Atsiliepimai',
  headline: 'Ką sako mūsų klientai',
  source: 'Google Reviews',
}

export const faq = {
  sectionTag: 'DUK',
  headline: 'Dažniausiai užduodami klausimai',
  items: [
    {
      q: 'Ar galima gyventi namuose šlifavimo metu?',
      a: 'Nors šlifavimas yra techninis procesas, naudojame modernią įrangą su integruotais siurbliais, kuri užtikrina maksimalią švarą ir tvarką, todėl trumpalaikis buvimas namuose yra įmanomas.',
    },
    {
      q: 'Nuo ko priklauso šlifavimo kaina?',
      a: 'Kaina priklauso nuo grindų būklės, medienos tipo, ploto dydžio ir pasirinktų sluoksnių skaičiaus bei apdailos tipo. Tiksliai sužinosite po nemokamos apžiūros.',
    },
    {
      q: 'Ar šlifuojate kampus ir sunkiai prieinamas vietas?',
      a: 'Taip, naudojame specialius kampinius šlifuoklius. Grindys šlifuojamos vienodai visoje patalpoje – net prie sienų, spintų ir laiptų.',
    },
    {
      q: 'Kiek laiko trunka šlifavimas?',
      a: 'Standartinis butas (50–70 m²) – 1–2 dienos. Lakui išdžiūti reikia 12–24 val., alyvai – 8–12 val. Pateikiame tikslų grafiką prieš pradedant darbus.',
    },
    {
      q: 'Kokia garantija suteikiama darbams?',
      a: 'Visiems atliktiems darbams suteikiame kokybės garantiją. Naudojame tik sertifikuotas medžiagas su gamintojo garantija.',
    },
  ],
}

export const ctaBanner = {
  sectionTag: 'Pradėkime',
  headline: 'Atnaujinkite savo grindis šiandien!',
  subtext: 'Susisiekite su mumis – sąmata nemokama ir be jokių įsipareigojimų.',
  ctaPrimary: 'Gauti sąmatą',
  ctaSecondary: '+370 604 10608',
}

export const contactForm = {
  sectionTag: 'Kontaktai',
  headline: 'Susisiekite su mumis',
  step1Title: '1 žingsnis: Jūsų kontaktai',
  step2Title: '2 žingsnis: Grindų detalės',
  successTitle: 'Ačiū! Gavome jūsų užklausą.',
  successText: 'Susisieksime per 24 val. ir sutarsime dėl nemokamos apžiūros.',
  fields: {
    name: 'Vardas ir pavardė *',
    phone: 'Telefono numeris *',
    email: 'El. paštas',
    city: 'Miestas / Rajonas',
    area: 'Grindų plotas (m²) *',
    condition: 'Grindų būklė *',
    conditionOptions: ['Gera (maži įbrėžimai)', 'Vidutinė (matomi pažeidimai)', 'Bloga (didelis atnaujinimas)'],
    service: 'Pageidaujama paslauga',
    serviceOptions: [
      'Šlifavimas + Lakavimas',
      'Šlifavimas + Alyvavimas',
      'Premium (Bona Traffic HD)',
      'Tik šlifavimas',
      'Terasų atnaujinimas',
      'Komercinės grindys',
    ],
    photo: 'Nuotrauka (nebūtina)',
  },
  nextButton: 'Toliau: grindų detalės →',
  submitButton: 'Siųsti užklausą',
  errors: {
    required: 'Šis laukas privalomas',
    phone: 'Įveskite teisingą telefono numerį',
    email: 'Įveskite teisingą el. paštą',
  },
}

export const contactInfo = {
  companyName: 'UAB Mistras',
  phone: '+37060410608',
  phoneFormatted: '+370 604 10608',
  email: 'Jonas@mistras.lt',
  city: 'Vilnius, Lietuva',
  serviceArea: 'Vilnius ir apylinkės',
  workingHours: 'Pr–Pt 8:00–18:00',
  whatsapp: 'https://wa.me/37060410608',
}

export const footer = {
  tagline: 'Atkuriame namų jaukumą.\nMeistrystė nuo 1994 metų.\nVilnius, Lietuva.',
  servicesColumn: {
    title: 'Paslaugos',
    links: [
      { label: 'Parketo šlifavimas', href: '/parketo-slifavimas/' },
      { label: 'Lakavimas', href: '/grindu-alyvavimas/' },
      { label: 'Alyvavimas', href: '/grindu-alyvavimas/' },
      { label: 'Terasų atnaujinimas', href: '/terasu-atnaujinimas/' },
      { label: 'Komercinės grindys', href: '/komercines-grindys/' },
    ],
  },
  infoColumn: {
    title: 'Informacija',
    links: [
      { label: 'Apie mus', href: '/apie-mus/' },
      { label: 'Atlikti darbai', href: '/atlikti-darbai/' },
      { label: 'Kainos', href: '/kainos/' },
      { label: 'DUK', href: '/duk/' },
      { label: 'Kontaktai', href: '/kontaktai/' },
    ],
  },
  legal: {
    copyright: `© ${new Date().getFullYear()} UAB Mistras. Visos teisės saugomos.`,
    links: [
      { label: 'Privatumo politika', href: '/privatumo-politika/' },
      { label: 'Slapukai', href: '/slapukai/' },
    ],
  },
}
