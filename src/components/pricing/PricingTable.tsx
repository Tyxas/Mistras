'use client'

/**
 * PricingTable — Renders the full pricing table from lib/pricing.ts.
 * 3 category tables: Šlifavimas, Apdaila, Papildomos paslaugos.
 * Clean tabular layout with orange accents.
 */
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { PRICING_TABLE } from '@/lib/pricing'

export default function PricingTable() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const categories = [
    { key: 'sanding' as const, icon: '🪵' },
    { key: 'finishing' as const, icon: '✨' },
    { key: 'extras' as const, icon: '🔧' },
  ]

  return (
    <section className="py-20 px-[5%] bg-white" ref={ref}>
      <div className="max-w-[1000px] mx-auto">
        <div className="text-xs font-bold uppercase tracking-[0.1em] text-orange mb-3">
          Kainų lentelė
        </div>
        <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark tracking-tight mb-4">
          Detalios kainos
        </h2>
        <p className="text-muted text-base leading-relaxed max-w-[560px] mb-12">
          Pateikiamos kainos yra orientacinės. Tiksli kaina priklauso nuo grindų būklės, ploto ir pasirinktų medžiagų.
        </p>

        <div className="space-y-12">
          {categories.map(({ key, icon }, catIdx) => {
            const cat = PRICING_TABLE[key]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              >
                <h3 className="font-heading font-extrabold text-xl text-walnut-dark mb-6 flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  {cat.title}
                </h3>

                {/* Table */}
                <div className="rounded-brand-lg overflow-hidden border border-gray-200">
                  {/* Header */}
                  <div className="grid grid-cols-[2fr_2fr_1fr] bg-walnut-dark text-white">
                    <div className="px-6 py-4 font-heading font-bold text-sm">Paslauga</div>
                    <div className="px-6 py-4 font-heading font-bold text-sm hidden md:block">Aprašymas</div>
                    <div className="px-6 py-4 font-heading font-bold text-sm text-right">Kaina</div>
                  </div>

                  {/* Rows */}
                  {cat.rows.map((row, rowIdx) => (
                    <div
                      key={row.service}
                      className={`grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] ${
                        rowIdx % 2 === 0 ? 'bg-white' : 'bg-bg'
                      } border-t border-gray-100`}
                    >
                      <div className="px-6 py-4 font-semibold text-sm text-walnut-dark">
                        {row.service}
                        <div className="md:hidden text-xs text-muted font-normal mt-1">{row.desc}</div>
                      </div>
                      <div className="px-6 py-4 text-sm text-muted hidden md:block">{row.desc}</div>
                      <div className="px-6 py-4 text-sm font-heading font-bold text-orange text-right">
                        {row.price}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footnotes */}
        <div className="mt-12 bg-orange/[0.06] border border-orange/20 rounded-brand p-6">
          <h4 className="font-heading font-bold text-sm text-walnut-dark mb-3">📋 Svarbi informacija</h4>
          <ul className="space-y-2">
            {PRICING_TABLE.footnotes.map((note) => (
              <li key={note} className="text-sm text-muted flex items-start gap-2">
                <span className="text-orange mt-0.5">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
