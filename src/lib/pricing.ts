/**
 * lib/pricing.ts
 * All pricing logic for the Mistras calculator.
 * Source of truth for price ranges — update here, not in components.
 */

export const MINIMUM_ORDER = 490 // €, excl. VAT

export type FinishType = 'sand' | 'lacquer' | 'oil' | 'premium'

/** Price range per m² [min, max] for each finish type */
export const PRICE_RANGES: Record<FinishType, [number, number]> = {
  sand: [10, 13],  // šlifavimas only
  lacquer: [16, 21],  // šlifavimas + lakavimas (Opal 20)
  oil: [18, 23],  // šlifavimas + alyvavimas (Osmo)
  premium: [22, 27],  // šlifavimas + Bona Traffic HD
}

export interface PriceEstimate {
  min: number
  max: number
  meetsMinimum: boolean
  displayMin: string
  displayMax: string
  disclaimer: string
}

/**
 * Calculate price estimate for a given area and finish type.
 * Enforces minimum order of 490€.
 */
export function calculateEstimate(area: number, finish: FinishType): PriceEstimate {
  const [low, high] = PRICE_RANGES[finish]
  const rawMin = area * low
  const rawMax = area * high
  const min = Math.max(MINIMUM_ORDER, Math.round(rawMin))
  const max = Math.round(rawMax)
  return {
    min,
    max,
    meetsMinimum: rawMin >= MINIMUM_ORDER,
    displayMin: `${min}€`,
    displayMax: `${max}€`,
    disclaimer: '*Preliminari kaina. Tiksli sąmata po apžiūros.',
  }
}

/** Full pricing table data for the /kainos/ page */
export const PRICING_TABLE = {
  sanding: {
    title: 'Parketo šlifavimas',
    rows: [
      { service: 'Parketo šlifavimas (pilnas ciklas)', desc: 'Senų lako sluoksnių nuėmimas, kelių grūdų šlifavimas', price: '10–15 €/m²' },
      { service: 'Dalinis šlifavimas / atnaujinimas', desc: 'Lengvas paviršiaus atnaujinimas', price: '6–9 €/m²' },
    ],
  },
  finishing: {
    title: 'Apdaila',
    rows: [
      { service: 'Lakavimas (3 sluoksniai Opal 20)', desc: 'Su tarpiniais šlifavimais', price: '6–9 €/m²' },
      { service: 'Premium lakas (Bona Traffic HD)', desc: 'Didelio atsparumo lakas komerciniam', price: '12–15 €/m²' },
      { service: 'Alyva 1 sluoksniu', desc: 'Natūrali alyva (Osmo, Bona)', price: '8–10 €/m²' },
      { service: 'Alyva 2 sluoksniais', desc: 'Intensyvesnė apsauga', price: '10–13 €/m²' },
    ],
  },
  extras: {
    title: 'Papildomos paslaugos',
    rows: [
      { service: 'Glaistymas viso ploto', desc: 'Tarpų užpildymas', price: '2–6 €/m²' },
      { service: 'Baldų pernešimas', desc: 'Išrinkimas, surinkimas, pernešimas', price: 'nuo 25 €/val.' },
      { service: 'Lentų tvirtinimas / girgždėjimo šalinimas', desc: 'Varžtų sukimas, tvirtinimas', price: 'nuo 25 €/val.' },
      { service: 'Seno lako nuėmimas (kietas lakas)', desc: 'Papildomas darbas', price: '+2–3 €/m²' },
    ],
  },
  footnotes: [
    'Minimalus užsakymas nuo 490€',
    'Kainos nurodytos be PVM',
    'Tiksli kaina po nemokamos apžiūros',
  ],
}
