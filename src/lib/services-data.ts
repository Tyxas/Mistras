/**
 * lib/services-data.ts
 * All service page data — one entry per landing page.
 * Import by slug to build each page.
 */

export interface ServiceFeature {
  icon: string
  title: string
  desc: string
}

export interface ProcessStep {
  step: number
  title: string
  desc: string
  icon: string
}

export interface ServiceFaqItem {
  q: string
  a: string
}

export interface ServicePageData {
  slug: string
  seo: {
    title: string
    description: string
    keyword: string
  }
  hero: {
    eyebrow: string
    headline: string
    headlineAccent: string
    subheadline: string
    priceTag: string
    priceNote: string
    badges: string[]
  }
  features: {
    sectionTag: string
    headline: string
    items: ServiceFeature[]
  }
  process: {
    sectionTag: string
    headline: string
    steps: ProcessStep[]
  }
  faq: {
    sectionTag: string
    headline: string
    items: ServiceFaqItem[]
  }
  ba?: {
    location: string
    type: string
  }
  cta: {
    headline: string
    subtext: string
  }
}

export const servicesData: Record<string, ServicePageData> = {
  'parketo-slifavimas': {
    slug: 'parketo-slifavimas',
    seo: {
      title: 'Parketo Šlifavimas Vilniuje nuo 10€/m² | Greitai ir Tvarkingai | UAB Mistras',
      description: 'Profesionalus parketo šlifavimas Vilniuje. Greitas ir tvarkingas procesas, Lagler įranga, 30+ metų patirtis. Nuo 10€/m². Nemokama apžiūra ir sąmata.',
      keyword: 'parketo šlifavimas Vilniuje',
    },
    hero: {
      eyebrow: 'Parketo šlifavimas',
      headline: 'Parketo šlifavimas Vilniuje',
      headlineAccent: 'operatyviai ir tvarkingai.',
      subheadline: 'Pilnas parketo atnaujinimo ciklas su profesionalia Lagler įranga. 30 metų patirtis – rezultatas garantuotas.',
      priceTag: '10€/m²',
      priceNote: 'Pilnas ciklas, be PVM. Min. 490€.',
      badges: ['✅ Nuo 1994 m.', '✨ Tvarkingas procesas', '🎁 Nemokama apžiūra', '💎 Garantija'],
    },
    features: {
      sectionTag: 'Kodėl verta',
      headline: 'Ką gausite su mumis',
      items: [
        { icon: '✨', title: 'Greitas ir tvarkingas procesas', desc: 'Naudojame profesionalią įrangą, kuri užtikrina maksimalią švarą jūsų namuose. Darbus atliekame operatyviai.' },
        { icon: '⚙️', title: 'Lagler profesionali įranga', desc: 'Naudojame Vokietijos gamintojo Lagler šlifuoklius – pramoninio lygio tikslumas ir rezultatas.' },
        { icon: '🪵', title: 'Visos medienos rūšys', desc: 'Ąžuolas, pušis, eglaitė, berzas, egzotinė mediena, bambūkas, mozaikinis parketas.' },
        { icon: '📐', title: 'Kampai ir kraštai', desc: 'Specialūs kampinio šlifavimo įrankiai užtikrina vienodą rezultatą visoje patalpoje – net prie sienų ir spintų.' },
        { icon: '🧱', title: 'Tarpų glaistymas', desc: 'Lentų tarpų užpildymas medžio miltelių ir klijų mišiniu pagal medienos spalvą.' },
        { icon: '📋', title: 'Nemokama sąmata', desc: 'Atvykstame, apžiūrime grindis ir pateikiame detalią kainodarą be jokių įsipareigojimų.' },
      ],
    },
    process: {
      sectionTag: 'Kaip tai veikia',
      headline: 'Šlifavimo procesas žingsnis po žingsnio',
      steps: [
        { step: 1, icon: '📋', title: 'Nemokama apžiūra', desc: 'Atvykstame į jūsų namus, įvertiname grindų būklę, medienos tipą, pažeidimų laipsnį. Pateikiame detalią sąmatą.' },
        { step: 2, icon: '🏗️', title: 'Pasiruošimas', desc: 'Išnešami baldai (arba mūsų komanda juos perkelia). Grindys paruošiamos – pašalinami vinys, sutaisomi girgždantys plotai.' },
        { step: 3, icon: '⚙️', title: 'Grubus šlifavimas', desc: 'Šlifavimas stambiu grūdeliu – šalinami seni lako ar alyvos sluoksniai, gilūs įbrėžimai ir nelygios vietos.' },
        { step: 4, icon: '✨', title: 'Smulkus šlifavimas', desc: 'Keli šlifavimo etapai su smulkesniu grūdeliu – paviršius darosi lygus ir paruoštas apdailai.' },
        { step: 5, icon: '🎨', title: 'Apdaila', desc: 'Lakavimas arba alyvavimas pagal susitarimą. 3 lako sluoksniai su tarpiniais šlifavimais arba 1–2 alyvos sluoksniai.' },
        { step: 6, icon: '✅', title: 'Rezultatas ir garantija', desc: 'Grindys kaip naujos. Pateikiame priežiūros instrukciją ir kokybės garantiją.' },
      ],
    },
    ba: { location: 'Žvėrynas, Vilnius', type: 'Ąžuolo parketas · Lakavimas Bona' },
    faq: {
      sectionTag: 'DUK',
      headline: 'Klausimai apie parketo šlifavimą',
      items: [
        { q: 'Ar procesas bus švarus?', a: 'Taip. Nors šlifavimas yra techninis procesas, naudojame modernią įrangą, kuri užtikrina, kad jūsų namai liktų tvarkingi. Minimali dulkių sklaida suvaldoma profesionaliai.' },
        { q: 'Kiek laiko trunka parketo šlifavimas?', a: 'Vidutinis butas (50–70 m²) – 1–2 dienos. Lakui išdžiūti reikia 12–24 val., alyvai – 8–12 val. Tikslų grafiką pateikiame prieš darbų pradžią.' },
        { q: 'Ar galima šlifuoti tik dalį kambario?', a: 'Techniškai galima, tačiau nerekomenduojame. Naujai nušlifuota vieta visada bus šviežesnės spalvos nei likusios grindys. Geriau šlifuoti visą kambarį.' },
        { q: 'Ar reikia išsikraustyti šlifavimo metu?', a: 'Rekomenduojame išsikraustyti iš šlifuojamo kambario. Mūsų naudojama technologija užtikrina tvarkingą darbą, tad galima gyventi kitose patalpose.' },
        { q: 'Kiek kartų galima šlifuoti parketą?', a: 'Tai priklauso nuo parketo storio. Standartinis 22mm parketas gali būti šlifuojamas 5–8 kartus. Prieš darbą įvertiname likusį medžio sluoksnį.' },
        { q: 'Ar dirbate savaitgaliais?', a: 'Taip, dirbame ir savaitgaliais. Komerciniam sektoriui – ir naktimis, kad nekliudytume veiklai.' },
        { q: 'Ar tinka alergikams?', a: 'Taip. Mūsų naudojama sistema sulaiko net smulkiausias dulkių daleles, kurios sukelia alergines reakcijas. Tai viena pagrindinių priežasčių, kodėl klientai renkasi mus.' },
      ],
    },
    cta: {
      headline: 'Pasiruošę atnaujinti parketą?',
      subtext: 'Susisiekite šiandien – nemokama apžiūra be jokių įsipareigojimų. Sąmatą pateikiame per 24 val.',
    },
  },

  'grindu-alyvavimas': {
    slug: 'grindu-alyvavimas',
    seo: {
      title: 'Grindų Alyvavimas ir Lakavimas Vilniuje | Bona · Osmo | UAB Mistras',
      description: 'Profesionalus grindų alyvavimas ir lakavimas Vilniuje. Bona Traffic HD, Osmo Polyx-Oil. Ekologiška apsauga, ilgaamžis rezultatas. Nuo 6€/m². Nemokama apžiūra.',
      keyword: 'grindų alyvavimas',
    },
    hero: {
      eyebrow: 'Alyvavimas ir lakavimas',
      headline: 'Grindų alyvavimas',
      headlineAccent: 'ir lakavimas Vilniuje.',
      subheadline: 'Naudojame tik aukščiausios klasės produktus: Bona Traffic HD, Osmo Polyx-Oil, Opal 20. Ekologiška apsauga, ilgaamžis rezultatas ir natūrali medienos grožis.',
      priceTag: '6€/m²',
      priceNote: 'Apdaila po šlifavimo. Be PVM. Min. 490€.',
      badges: ['✨ Bona · Osmo · Opal', '🌿 Ekologiška', '🎨 Spalvų pasirinkimas', '🛡️ Ilgaamžė apsauga'],
    },
    features: {
      sectionTag: 'Produktai ir privalumai',
      headline: 'Ką gausite su mūsų apdaila',
      items: [
        { icon: '💎', title: 'Bona Traffic HD', desc: 'Aukščiausios klasės lakas komercinėms patalpoms. Ypatingas atsparumas trinčiai ir chemikalams – 7–10 metų apsauga.' },
        { icon: '🌿', title: 'Osmo Polyx-Oil', desc: 'Natūrali alyva iš augalinių vašku. Ekologiška, pabrėžia medienos raštą ir spalvą. Lengvai atnaujinama.' },
        { icon: '💧', title: 'Opal 20 lakas', desc: 'Vandens pagrindo lakas su puikiu kietimu. Mažas kvapas, greitai džiūsta, puiki apsauga.' },
        { icon: '🎨', title: 'Tonuojame pagal pageidavimą', desc: 'Prieš apdailą galime suteikti grindims norimą atspalvį. Plati Bona ir Osmo spalvų paletė.' },
        { icon: '⏱️', title: 'Greitas džiūvimas', desc: 'Tarp sluoksnių – 12–24 val. Alyvai džiūvimas trumpesnis – 8–12 val. Pilnas sukietėjimas per 7 dienas.' },
        { icon: '♻️', title: 'Ekologiški produktai', desc: 'Visi naudojami produktai sertifikuoti pagal ES standartus. Be kenksmingų medžiagų, saugūs vaikams ir gyvūnams.' },
      ],
    },
    process: {
      sectionTag: 'Apdailos procesas',
      headline: 'Kaip vyksta lakavimas ir alyvavimas',
      steps: [
        { step: 1, icon: '🧹', title: 'Paviršiaus paruošimas', desc: 'Po šlifavimo kruopščiai nuvalomos visos dulkės. Paviršius paruošiamas apdailai – tikrinama drėgmė ir temperatūra.' },
        { step: 2, icon: '🎨', title: 'Medžiagos pasirinkimas', desc: 'Kartu su klientu pasirenkame laką arba alyvą, blizgesio lygį (matinis, pusiaumatinis, blizgus) ir spalvą.' },
        { step: 3, icon: '✨', title: 'Gruntavimas ir apdaila', desc: 'Gruntavimas, po to 2–3 lako arba 1–2 alyvos sluoksniai su tarpiniais šlifavimais tarp kiekvieno.' },
        { step: 4, icon: '✅', title: 'Galutinė patikra', desc: 'Patikriname vienodumą, blizgesį ir apsaugos kokybę. Pateikiame priežiūros instrukciją.' },
      ],
    },
    ba: { location: 'Šnipiškės, Vilnius', type: 'Ąžuolo parketas · Osmo Polyx-Oil' },
    faq: {
      sectionTag: 'DUK',
      headline: 'Klausimai apie alyvavimą ir lakavimą',
      items: [
        { q: 'Lakas ar alyva – kas geriau?', a: 'Lakas suteikia stipresnę apsaugą ir blizgesį – tinka virtuvėms, koridoriams, komercinėms patalpoms. Alyva – natūralesnę išvaizdą ir lengvesnį atnaujinimą, tinka miegamiesiems ir kabinetams. Galime patarti po apžiūros.' },
        { q: 'Kiek sluoksnių lako reikia?', a: 'Rekomenduojame 3 sluoksnius: gruntas + 2 apdailos sluoksniai. Komercinėms patalpoms – iki 4 sluoksnių Bona Traffic HD.' },
        { q: 'Ar galima pakeisti grindų spalvą?', a: 'Taip. Po šlifavimo galime tonuoti grindis norima spalva prieš lakavimą ar alyvavimą. Siūlome spalvų paletę iš Bona ir Osmo kolekcijų.' },
        { q: 'Kiek laiko džiūsta lakas?', a: 'Tarp sluoksnių – 12–24 val. Galutinis sukietėjimas – 7 dienos. Tuo laikotarpiu reikia vengti sunkių baldų ir intensyvaus naudojimo.' },
        { q: 'Ar alyvuotos grindys sunkiau prižiūrimos?', a: 'Ne – priešingai. Alyvuotos grindys lengvai atnaujinamos vietiškai, nereikia šlifuoti viso kambario. Tinkama priežiūra prailgina tarnavimo laiką iki 15+ metų.' },
      ],
    },
    cta: {
      headline: 'Pasiruošę suteikti grindims naują gyvenimą?',
      subtext: 'Nemokama apžiūra ir sąmata. Patariame, kokia apdaila labiausiai tiks jūsų grindims.',
    },
  },

  'terasu-atnaujinimas': {
    slug: 'terasu-atnaujinimas',
    seo: {
      title: 'Terasų Atnaujinimas Vilniuje – Šlifavimas ir Alyvavimas | UAB Mistras',
      description: 'Medinių terasų šlifavimas, plovimas ir alyvavimas Vilniuje. Apsauga nuo UV ir drėgmės. Pušis, eglaitis, termomedis, egzotinė mediena. Nemokama apžiūra.',
      keyword: 'terasų atnaujinimas',
    },
    hero: {
      eyebrow: 'Terasų atnaujinimas',
      headline: 'Terasų šlifavimas ir',
      headlineAccent: 'alyvavimas Vilniuje.',
      subheadline: 'Medinių terasų šlifavimas, giluminis plovimas ir alyvavimas. Šaliname pilkėjimą, įplyšimus ir seną apdailą – grąžiname medienai natūralią spalvą ir suteikiame ilgalaikę apsaugą.',
      priceTag: 'Pagal užklausą',
      priceNote: 'Priklauso nuo ploto ir būklės. Nemokama apžiūra.',
      badges: ['☀️ UV apsauga', '💧 Drėgmės barjeras', '🌲 Visi medienos tipai', '🔄 Sezoninis atnaujinimas'],
    },
    features: {
      sectionTag: 'Kas įeina',
      headline: 'Kompleksinis terasos atnaujinimas',
      items: [
        { icon: '☀️', title: 'UV apsauga', desc: 'Specialūs UV filtrai alyvoje apsaugo medieną nuo pilkėjimo ir saulės poveikio ištisus metus.' },
        { icon: '💧', title: 'Drėgmės barjeras', desc: 'Impregnuojanti alyva apsaugo nuo lietaus, sniego ir drėgmės įsiskverbimo – mediena nesupūva.' },
        { icon: '🌲', title: 'Visi medienos tipai', desc: 'Dirbame su pušimi, egle, termomedžiu, egzotiniais medžiais: tik (ipė), bangkirai, cumaru.' },
        { icon: '🧹', title: 'Giluminis plovimas', desc: 'Aukšto slėgio plovimas pašalina samanas, dumblius, nešvarumus ir seną alyvą prieš šlifavimą.' },
        { icon: '🎨', title: 'Spalva pagal pageidavimą', desc: 'Terasinė alyva arba dažai – plati spalvų paletė, galima išlaikyti natūralų medienos toną arba pakeisti.' },
        { icon: '🔄', title: 'Priežiūros sutartys', desc: 'Rekomenduojame atnaujinti terasą kas 1–2 metus. Siūlome sezoninius priežiūros paketus.' },
      ],
    },
    process: {
      sectionTag: 'Atnaujinimo procesas',
      headline: 'Kaip atnaujinama terasa',
      steps: [
        { step: 1, icon: '📋', title: 'Apžiūra ir sąmata', desc: 'Atvykstame, įvertiname terasos būklę, medienos tipą ir poreikius. Pateikiame nemokamą sąmatą.' },
        { step: 2, icon: '🧹', title: 'Giluminis plovimas', desc: 'Profesionalus aukšto slėgio plovimas – pašalinamos samanos, dumbliai, sena alyva ir nešvarumai.' },
        { step: 3, icon: '⚙️', title: 'Šlifavimas', desc: 'Paviršiaus šlifavimas seno lako ar alyvos sluoksnio nuėmimui ir medienos paruošimui apdailai.' },
        { step: 4, icon: '✅', title: 'Alyvavimas ir rezultatas', desc: 'Užnešame specialią lauko alyvą su UV ir drėgmės apsauga. Terasa atrodo kaip nauja ir apsaugota 1–2 sezonams.' },
      ],
    },
    ba: { location: 'Verkiai, Vilnius', type: 'Pušies terasa · Osmo UV-Schutzöl' },
    faq: {
      sectionTag: 'DUK',
      headline: 'Klausimai apie terasų atnaujinimą',
      items: [
        { q: 'Kada geriausias metas atnaujinti terasą?', a: 'Idealus laikas – pavasaris (balandis–gegužė) arba ruduo (rugsėjis). Temperatūra turi būti virš +10°C, be lietaus prognozės artimiausiai parai.' },
        { q: 'Ar reikia šlifuoti, ar pakanka tik alyvuoti?', a: 'Jei sena alyva nėra stipriai pažeista, kartais pakanka nuvalyti ir užnešti naują sluoksnį. Jei mediena pilkėjusi ar su senesniu lako sluoksniu – šlifavimas būtinas. Tiksliai pasakysime po apžiūros.' },
        { q: 'Kiek trunka terasos atnaujinimas?', a: 'Vidutinė terasa (20–40 m²) – 1–2 dienos, priklausomai nuo būklės ir oro sąlygų. Alyvai džiūvimas – 24–48 val.' },
        { q: 'Ar galima naudoti terasą po alyvavimo tą pačią dieną?', a: 'Rekomenduojame palaukti bent 24–48 val. Pilna apsauga susiformuoja per 3–5 dienas, priklausomai nuo temperatūros ir drėgmės.' },
        { q: 'Kaip dažnai reikia atnaujinti terasą?', a: 'Rekomenduojame kas 1–2 metus – priklausomai nuo medienos tipo ir poveikio. Tik (ipė) ir thermomedis yra atsparesni, pušies terasa reikalauja dažnesnės priežiūros.' },
      ],
    },
    cta: {
      headline: 'Pasiruoškite terasą vasaros sezonui',
      subtext: 'Nemokama apžiūra ir sąmata. Dirbame visame Vilniuje ir apylinkėse – taip pat ir privačiuose namuose.',
    },
  },

  'komercines-grindys': {
    slug: 'komercines-grindys',
    seo: {
      title: 'Komercinių Grindų Šlifavimas Vilniuje | Restoranai · Viešbučiai | UAB Mistras',
      description: 'Komercinių grindų šlifavimas Vilniuje. Restoranai, viešbučiai, sporto salės, muziejai. Bona Traffic HD lakas. Dirbame naktimis ir savaitgaliais. Nemokama apžiūra.',
      keyword: 'komercinių grindų šlifavimas',
    },
    hero: {
      eyebrow: 'Komercinės grindys',
      headline: 'Komercinių grindų',
      headlineAccent: 'šlifavimas Vilniuje.',
      subheadline: 'Restoranai, viešbučiai, sporto salės, muziejai, mokyklos, biurai. Turime patirties su dideliais projektais ir dirbame pagal jūsų grafiką – naktimis ir savaitgaliais.',
      priceTag: 'Pagal projektą',
      priceNote: 'Individualūs sprendimai dideliems plotams.',
      badges: ['🏢 Nuo 100 m²', '⏰ Naktiniai darbai', '💎 Bona Traffic HD', '📋 Dokumentacija'],
    },
    features: {
      sectionTag: 'Komerciniai privalumai',
      headline: 'Kodėl verslai renkasi mus',
      items: [
        { icon: '🏢', title: 'Dideli projektai', desc: 'Nuo 100 iki 5000+ m². Turime įrangą ir komandą didelių objektų šlifavimui be kompromisų kokybėje.' },
        { icon: '⏰', title: 'Lankstus grafikas', desc: 'Dirbame naktimis, savaitgaliais, švenčių dienomis – netrukdome jūsų verslo veiklai.' },
        { icon: '💎', title: 'Bona Traffic HD', desc: 'Aukščiausios klasės pramoninis lakas, sukurtas intensyviam komerciniam naudojimui. 10+ metų apsauga.' },
        { icon: '📋', title: 'Pilna dokumentacija', desc: 'Pateikiame sąmatas, sutartis, darbo aktus, kokybės ir naudojamų medžiagų sertifikatus.' },
        { icon: '✨', title: 'Greitas ir tvarkingas procesas', desc: 'Naudojame profesionalią įrangą, kuri užtikrina maksimalią švarą jūsų namuose. Darbus atliekame operatyviai.' },
        { icon: '🔧', title: 'Kompleksinė paslauga', desc: 'Šlifavimas, lakavimas, tarpų glaistymas, grindjuosčių montavimas – viskas vienoje sutartyje.' },
      ],
    },
    process: {
      sectionTag: 'Komercinis procesas',
      headline: 'Kaip dirbame su verslu',
      steps: [
        { step: 1, icon: '📋', title: 'Konsultacija ir apžiūra', desc: 'Atvykstame į objektą, įvertiname grindų būklę, plotą, medienos tipą ir poreikius. Aptariame grafiką.' },
        { step: 2, icon: '📝', title: 'Sąmata ir sutartis', desc: 'Paruošiame detalią sąmatą ir darbo grafiką. Pasirašome sutartį su aiškiomis sąlygomis ir terminais.' },
        { step: 3, icon: '⚙️', title: 'Darbų vykdymas', desc: 'Dirbame pagal sutartą grafiką – dažniausiai naktimis ar savaitgaliais, minimizuodami poveikį veiklai.' },
        { step: 4, icon: '✅', title: 'Perdavimas ir garantija', desc: 'Galutinė patikra ir kokybės aktas. Pateikiame naudojamų medžiagų sertifikatus ir garantiją.' },
      ],
    },
    ba: { location: 'Senamiesčio restoranas, Vilnius', type: 'Ąžuolo grindys · Bona Traffic HD' },
    faq: {
      sectionTag: 'DUK',
      headline: 'Klausimai apie komercines grindis',
      items: [
        { q: 'Ar galite dirbti naktimis?', a: 'Taip, turime patirties dirbant naktinėmis pamainomis restoranuose, viešbučiuose ir biuruose. Tai mūsų standartinė praktika komerciniams klientams.' },
        { q: 'Koks minimalus plotas komerciniam projektui?', a: 'Nėra griežtos ribos – galime aptarnauti ir mažus 50 m² restoranus, ir didelius 3000+ m² sandėlius ar sporto centrus.' },
        { q: 'Ar suteikiate garantiją komercinėms grindims?', a: 'Taip, visiems komercinėms projektams suteikiame rašytinę garantiją ir pateikiame naudojamų medžiagų sertifikatus.' },
        { q: 'Ar turite patirties su sporto salėmis?', a: 'Taip, esame šlifavę krepšinio, rankinio, šokių salių ir treniruoklių centrų grindis. Naudojame specialų Bona Sport laką, sukurtą sportui.' },
        { q: 'Kiek kainuoja komercinių grindų šlifavimas?', a: 'Kaina priklauso nuo ploto, grindų būklės ir pasirinktų medžiagų. Dideliems plotams taikome nuolaidas. Nemokama apžiūra ir sąmata.' },
      ],
    },
    cta: {
      headline: 'Aptarkime jūsų projektą',
      subtext: 'Nemokama apžiūra ir sąmata. Dirbame pagal jūsų grafiką – naktimis ir savaitgaliais.',
    },
  },
}

/** Get all service slugs for static generation */
export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData)
}

/** Get service data by slug, returns undefined if not found */
export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return servicesData[slug]
}
