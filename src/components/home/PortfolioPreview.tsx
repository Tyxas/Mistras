'use client'

/**
 * PortfolioPreview — 3-card grid showcasing recent projects.
 * Dark walnut background section. Placeholder cards for now.
 * Will fetch from getPortfolioItems() in Phase 5.
 */
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { portfolio } from '@/lib/content'

// Placeholder data until WordPress is connected
const placeholderProjects = [
  { title: 'Žvėrynas', type: 'Ąžuolo parketas · Lakavimas', image: '/images/portfolio/portfolio-zverynas.png' },
  { title: 'Senamiestis', type: 'Dažytos grindys · Šlifavimas', image: '/images/portfolio/portfolio-senamiestis.png' },
  { title: 'Restoranas', type: 'Komercinės grindys · Bona', image: '/images/portfolio/portfolio-restaurant.png' },
]

export default function PortfolioPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="portfolio" className="py-20 px-[5%] bg-walnut-dark" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-xs font-bold uppercase tracking-[0.1em] text-orange-light mb-3">
          {portfolio.sectionTag}
        </div>
        <h2 className="font-heading font-extrabold text-display-lg text-white tracking-tight mb-4">
          {portfolio.headline}
        </h2>
        <p className="text-white/60 text-base leading-relaxed max-w-[560px] mb-12">
          {portfolio.subtext}
        </p>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-brand overflow-hidden relative aspect-square cursor-pointer group bg-walnut/10"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-orange text-white text-[0.65rem] font-bold uppercase px-2.5 py-1 rounded">
                {portfolio.baLabels.before} / {portfolio.baLabels.after}
              </div>

              {/* Meta */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-heading font-bold text-white text-base">{project.title}</div>
                <div className="text-white/70 text-xs mt-0.5">{project.type}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-10">
          <a
            href={portfolio.ctaHref}
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-[10px] font-heading font-bold text-base transition-all duration-200"
          >
            {portfolio.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
