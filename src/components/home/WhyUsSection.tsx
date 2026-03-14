'use client'

/**
 * WhyUsSection — 4 pillars grid showing competitive advantages.
 * Icons, titles, descriptions from lib/content.ts whyUs.
 * Staggered scroll-reveal animation.
 */
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { whyUs } from '@/lib/content'

export default function WhyUsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="why" className="py-20 px-[5%] bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-xs font-bold uppercase tracking-[0.1em] text-orange mb-3">
          {whyUs.sectionTag}
        </div>
        <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark tracking-tight mb-4">
          {whyUs.headline}
        </h2>
        <p className="text-muted text-base leading-relaxed max-w-[560px] mb-12">
          {whyUs.subtext}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center px-4 py-8"
            >
              <span className="text-4xl block mb-4">{pillar.icon}</span>
              <h3 className="font-heading font-extrabold text-lg text-walnut-dark mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
