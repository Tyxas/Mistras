'use client'

/**
 * FaqAccordion — Expandable FAQ items in a 2-column grid.
 * Animated expand/collapse with chevron rotation.
 * Items from lib/content.ts faq.items.
 */
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { faq } from '@/lib/content'

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="py-20 px-[5%] bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-xs font-bold uppercase tracking-[0.1em] text-orange mb-3">
          {faq.sectionTag}
        </div>
        <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark tracking-tight mb-12">
          {faq.headline}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faq.items.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-[1.5px] border-gray-200 rounded-brand overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-bold text-[0.95rem] text-walnut-dark hover:bg-walnut/[0.04] transition-colors"
              >
                {item.q}
                <span
                  className={`text-orange text-base transition-transform duration-300 ml-4 flex-shrink-0 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  ▾
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted text-sm leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
