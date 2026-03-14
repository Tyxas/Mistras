'use client'

/**
 * CtaBanner — Dark walnut gradient banner with 2 action buttons.
 * Full-width section encouraging contact.
 */
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ctaBanner } from '@/lib/content'

export default function CtaBanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section
      id="cta-banner"
      ref={ref}
      className="py-20 px-[5%] bg-gradient-to-br from-walnut to-walnut-dark text-center"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-bold uppercase tracking-[0.1em] text-white/60 mb-3">
            {ctaBanner.sectionTag}
          </div>
          <h2 className="font-heading font-black text-display-lg text-white tracking-tight mb-4">
            {ctaBanner.headline}
          </h2>
          <p className="text-white/70 text-lg mb-10">
            {ctaBanner.subtext}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#kontaktai"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-10 py-4 rounded-[10px] font-heading font-bold text-lg transition-all duration-200"
            >
              ✉ {ctaBanner.ctaPrimary}
            </a>
            <a
              href="tel:+37060410608"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-[10px] font-heading font-semibold text-lg transition-all duration-200"
            >
              📞 {ctaBanner.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
