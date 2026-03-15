'use client'

/**
 * TrustBar — Dark walnut bar below hero.
 * 4 stats (year, experience, clients, rating) + 3 partner logos.
 * Animated number count on scroll into view.
 */
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { trustBar } from '@/lib/content'

export default function TrustBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="bg-walnut-dark py-8 px-[5%]">
        {/* Stats */}
        <div className="w-full flex flex-wrap items-center justify-around gap-8">
          {trustBar.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="font-heading text-3xl lg:text-4xl font-black text-orange">
                {stat.value}
              </span>
              <span className="text-xs text-white/60 uppercase tracking-wider text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
    </div>
  )
}
