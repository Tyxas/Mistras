'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { aboutIntro } from '@/lib/content'

/**
 * AboutIntro — Informational section about the company.
 * Placed above the calculator to provide context and trust.
 * 2-column layout: Story/Philosophy left, Quality/Features right.
 */
export default function AboutIntro() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 px-[5%] bg-white overflow-hidden" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Headline & Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-orange mb-4">
              {aboutIntro.sectionTag}
            </div>
            <h2 className="font-heading font-black text-display-lg text-walnut-dark tracking-tight mb-8 leading-tight">
              {aboutIntro.headline}
            </h2>
            <div className="space-y-6 text-muted text-base lg:text-lg leading-relaxed">
              <p>{aboutIntro.text1}</p>
              <p className="font-medium text-walnut-light">{aboutIntro.text2}</p>
            </div>
          </motion.div>

          {/* Right: Features & closing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="bg-bg rounded-brand-lg p-8 lg:p-12 relative border border-gray-100 shadow-sm"
          >
            {/* Soft decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange/5 rounded-full -mr-10 -mt-10 blur-3xl pointer-events-none" />
            
            <h3 className="font-heading font-extrabold text-xl text-walnut-dark mb-8">
              {aboutIntro.featuresTitle}
            </h3>
            
            <ul className="space-y-5 mb-10">
              {aboutIntro.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-orange/20 transition-colors">
                    <span className="text-orange text-xs">✓</span>
                  </div>
                  <span className="text-slate-brand font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm italic text-muted leading-relaxed">
                {aboutIntro.closing}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
