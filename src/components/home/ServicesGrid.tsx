'use client'

/**
 * ServicesGrid — 2x2 grid of service cards.
 * Each card: icon, title, description, price badge, link.
 * Hover: border highlight, slight lift, shadow.
 * Scroll-triggered reveal animation.
 */
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { services } from '@/lib/content'
import React from 'react'

const WoodFloorIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-walnut">
    {/* Staggered planks pattern */}
    <rect x="2" y="6" width="24" height="8" rx="1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <rect x="28" y="6" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <rect x="2" y="16" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <rect x="16" y="16" width="22" height="8" rx="1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <rect x="2" y="26" width="26" height="8" rx="1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <rect x="30" y="26" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    {/* Subtle wood grain lines */}
    <path d="M6 10H14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M22 20H30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M10 30H20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
  </svg>
)

const ICON_MAP: Record<string, React.ReactNode> = {
  'FLOOR_ICON': <WoodFloorIcon />,
}

export default function ServicesGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="services" className="py-20 px-[5%] bg-bg" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-xs font-bold uppercase tracking-[0.1em] text-orange mb-3">
          {services.sectionTag}
        </div>
        <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark tracking-tight mb-4">
          {services.headline}
        </h2>
        <p className="text-muted text-base leading-relaxed max-w-[560px] mb-12">
          {services.subtext}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={card.href}
                className="block relative bg-white rounded-brand-lg p-8 lg:p-10 border-[1.5px] border-transparent hover:border-walnut-light transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-lg overflow-hidden group"
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-walnut/[0.04] to-transparent pointer-events-none" />

                <span className="text-4xl block mb-5 relative h-10">
                  {typeof card.icon === 'string' && ICON_MAP[card.icon] 
                    ? ICON_MAP[card.icon] 
                    : card.icon}
                </span>
                <h3 className="font-heading font-extrabold text-xl text-walnut-dark mb-3 relative">
                  {card.title}
                </h3>
                <p className="text-muted text-[0.95rem] leading-relaxed mb-6 relative">
                  {card.desc}
                </p>
                <div className="inline-block bg-orange/10 text-orange font-bold text-sm px-3 py-1.5 rounded-md mb-4 relative">
                  {card.price}
                </div>
                <br />
                <span className="text-walnut font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200 relative">
                  {card.linkLabel}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
