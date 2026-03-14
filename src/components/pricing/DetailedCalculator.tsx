'use client'

/**
 * DetailedCalculator — Extended pricing calculator for /kainos/ page.
 * Includes area slider, finish type, floor condition, extras.
 * More detailed than the homepage Calculator.
 */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MINIMUM_ORDER, PRICE_RANGES } from '@/lib/pricing'
import type { FinishType } from '@/lib/pricing'
import { calculator } from '@/lib/content'

type Condition = 'good' | 'medium' | 'bad'

const CONDITION_MULTIPLIER: Record<Condition, number> = {
  good: 1.0,
  medium: 1.15,
  bad: 1.3,
}

const CONDITION_LABELS: Record<Condition, string> = {
  good: 'Gera (maži įbrėžimai)',
  medium: 'Vidutinė (matomi pažeidimai)',
  bad: 'Bloga (didelis atnaujinimas)',
}

export default function DetailedCalculator() {
  const [area, setArea] = useState(50)
  const [finish, setFinish] = useState<FinishType>('lacquer')
  const [condition, setCondition] = useState<Condition>('good')
  const [includeFillers, setIncludeFillers] = useState(false)

  const sliderPercent = ((area - 10) / (200 - 10)) * 100

  // Calculate price with condition multiplier and extras
  const [baseLow, baseHigh] = PRICE_RANGES[finish]
  const condMult = CONDITION_MULTIPLIER[condition]
  const fillerExtra = includeFillers ? 4 : 0 // avg filler price per m²
  const adjustedLow = (baseLow * condMult + fillerExtra) * area
  const adjustedHigh = (baseHigh * condMult + fillerExtra) * area
  const finalMin = Math.max(MINIMUM_ORDER, Math.round(adjustedLow))
  const finalMax = Math.round(adjustedHigh)

  return (
    <section className="py-20 px-[5%] bg-bg">
      <div className="max-w-[800px] mx-auto">
        <div className="text-xs font-bold uppercase tracking-[0.1em] text-orange mb-3">
          Detalus skaičiavimas
        </div>
        <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark tracking-tight mb-4">
          Apskaičiuokite savo kainą
        </h2>
        <p className="text-muted text-base leading-relaxed mb-10">
          Pasirinkite parametrus – gausite tikslesnę orientacinę kainą nei pagrindiniame puslapyje.
        </p>

        <div className="bg-white rounded-brand-lg border border-gray-200 p-8 lg:p-10 shadow-brand">
          {/* Area slider */}
          <div className="mb-8">
            <label className="font-semibold text-sm text-slate-brand block mb-3">
              Grindų plotas:
              <span className="font-heading text-2xl font-extrabold text-walnut float-right">
                {area} m²
              </span>
            </label>
            <input
              type="range"
              min={10}
              max={200}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-1.5 rounded-full outline-none cursor-pointer appearance-none"
              style={{
                background: `linear-gradient(to right, #E67E22 0%, #E67E22 ${sliderPercent}%, #E5E7EB ${sliderPercent}%)`,
              }}
            />
            <div className="flex justify-between text-xs text-muted mt-1">
              <span>10 m²</span>
              <span>200 m²</span>
            </div>
          </div>

          {/* Finish type */}
          <div className="mb-6">
            <label className="font-semibold text-sm text-slate-brand block mb-3">
              Apdailos tipas:
            </label>
            <select
              value={finish}
              onChange={(e) => setFinish(e.target.value as FinishType)}
              className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] font-body text-base text-walnut-dark bg-bg cursor-pointer outline-none focus:border-orange transition-colors"
            >
              {calculator.finishOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Floor condition */}
          <div className="mb-6">
            <label className="font-semibold text-sm text-slate-brand block mb-3">
              Grindų būklė:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(Object.entries(CONDITION_LABELS) as [Condition, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setCondition(key)}
                  className={`px-4 py-3 rounded-[10px] text-sm font-medium transition-all border-[1.5px] ${
                    condition === key
                      ? 'border-orange bg-orange/10 text-orange'
                      : 'border-gray-200 bg-bg text-muted hover:border-walnut-light'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Extras */}
          <div className="mb-8">
            <label className="font-semibold text-sm text-slate-brand block mb-3">
              Papildomos paslaugos:
            </label>
            <label className="flex items-center gap-3 cursor-pointer px-4 py-3 rounded-[10px] border-[1.5px] border-gray-200 bg-bg hover:border-walnut-light transition-colors">
              <input
                type="checkbox"
                checked={includeFillers}
                onChange={(e) => setIncludeFillers(e.target.checked)}
                className="w-5 h-5 rounded accent-orange cursor-pointer"
              />
              <span className="text-sm text-walnut-dark">
                Glaistymas (tarpų užpildymas) — +2–6 €/m²
              </span>
            </label>
          </div>

          {/* Result */}
          <div className="bg-gradient-to-br from-walnut to-walnut-dark rounded-brand p-8 text-center text-white">
            <div className="text-sm opacity-70 mb-2">Orientacinė kaina</div>
            <motion.div
              key={`${area}-${finish}-${condition}-${includeFillers}`}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              className="font-heading text-4xl lg:text-5xl font-black text-orange"
            >
              {finalMin}€ – {finalMax}€
            </motion.div>
            <div className="text-xs opacity-60 mt-2">
              *Orientacinė kaina be PVM. Tikslią sąmatą pateikiame po nemokamos apžiūros.
            </div>

            {/* Breakdown */}
            <div className="mt-6 text-left bg-white/10 rounded-lg p-4 text-xs space-y-1">
              <div className="flex justify-between"><span>Plotas:</span><span>{area} m²</span></div>
              <div className="flex justify-between"><span>Kaina/m²:</span><span>{(baseLow * condMult + fillerExtra).toFixed(0)}–{(baseHigh * condMult + fillerExtra).toFixed(0)} €</span></div>
              {condition !== 'good' && (
                <div className="flex justify-between"><span>Būklės koeficientas:</span><span>×{condMult}</span></div>
              )}
              {includeFillers && (
                <div className="flex justify-between"><span>Glaistymas:</span><span>+4 €/m²</span></div>
              )}
              <div className="border-t border-white/20 pt-1 mt-1 flex justify-between font-bold">
                <span>Viso:</span><span>{finalMin}€ – {finalMax}€</span>
              </div>
            </div>

            <a
              href="#kontaktai"
              className="block mt-6 bg-orange hover:bg-orange-dark text-white py-4 rounded-[10px] font-heading font-bold text-base transition-colors w-full text-center"
            >
              📋 Gauti tikslią sąmatą →
            </a>
          </div>
        </div>

        {/* Min order note */}
        <div className="mt-6 bg-orange/[0.08] border-l-[3px] border-orange px-5 py-4 rounded-r-lg text-sm text-slate-brand">
          💡 <strong>Minimalus užsakymas nuo {MINIMUM_ORDER}€.</strong> Kainos nurodytos be PVM. Tiksli kaina po nemokamos apžiūros.
        </div>
      </div>
    </section>
  )
}
