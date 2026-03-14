'use client'

/**
 * Calculator — Pricing estimator widget.
 * Area slider + finish type select → price range display.
 * 2-column layout: description left, calc widget right.
 * Uses pricing logic from lib/pricing.ts.
 */
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { calculateEstimate, MINIMUM_ORDER } from '@/lib/pricing'
import type { FinishType } from '@/lib/pricing'
import { calculator } from '@/lib/content'

export default function Calculator() {
  const [area, setArea] = useState(50)
  const [finish, setFinish] = useState<FinishType>('lacquer')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const estimate = calculateEstimate(area, finish)
  const sliderPercent = ((area - 10) / (200 - 10)) * 100

  return (
    <section id="calc" className="py-20 px-[5%] bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold uppercase tracking-[0.1em] text-orange mb-3">
              {calculator.sectionTag}
            </div>
            <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark tracking-tight mb-4">
              {calculator.headline}
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-[560px] mb-8">
              {calculator.subtext}
            </p>

            {/* Minimum order note */}
            <div className="bg-orange/[0.08] border-l-[3px] border-orange px-5 py-4 rounded-r-lg text-sm text-slate-brand">
              💡 <strong>Minimalus užsakymas nuo {MINIMUM_ORDER}€.</strong> Kainos nurodytos +PVM.
            </div>
          </motion.div>

          {/* Right: calc widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-bg border border-gray-200 rounded-brand-lg p-8 lg:p-10"
          >
            {/* Area slider */}
            <div className="mb-6">
              <label className="font-semibold text-sm text-slate-brand block mb-3">
                {calculator.areaLabel}:
                <span className="font-heading text-2xl font-extrabold text-walnut float-right">
                  {area} {calculator.areaUnit}
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
            </div>

            {/* Finish type select */}
            <div className="mb-6">
              <label className="font-semibold text-sm text-slate-brand block mb-3">
                {calculator.finishLabel}:
              </label>
              <select
                value={finish}
                onChange={(e) => setFinish(e.target.value as FinishType)}
                className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] font-body text-base text-walnut-dark bg-white cursor-pointer outline-none focus:border-orange transition-colors"
              >
                {calculator.finishOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Result box */}
            <div className="bg-gradient-to-br from-walnut to-walnut-dark rounded-brand p-8 text-center text-white">
              <div className="text-sm opacity-70 mb-2">{calculator.resultLabel}</div>
              <motion.div
                key={`${area}-${finish}`}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                className="font-heading text-4xl font-black text-orange"
              >
                {estimate.displayMin} – {estimate.displayMax}
              </motion.div>
              <div className="text-xs opacity-60 mt-2">{estimate.disclaimer}</div>

              {/* CTA button */}
              <a
                href="#kontaktai"
                className="block mt-6 bg-orange hover:bg-orange-dark text-white py-4 rounded-[10px] font-heading font-bold text-base transition-colors w-full text-center"
              >
                📋 {calculator.ctaLabel}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
