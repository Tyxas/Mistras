'use client'

import { motion } from 'framer-motion'

interface Milestone {
  year: string
  title: string
  text: string
  image: string
  highlight?: boolean
}

interface TimelineProps {
  sectionTag: string
  headline: string
  milestones: Milestone[]
}

export default function Timeline({ sectionTag, headline, milestones }: TimelineProps) {
  return (
    <section className="py-24 px-[5%] bg-white overflow-hidden relative">
      {/* Background patterns consistent with the brand */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-walnut mb-4">
            {sectionTag}
          </div>
          <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark mb-4">
            {headline}
          </h2>
          <div className="w-24 h-1 bg-walnut mx-auto rounded-full opacity-20" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-walnut/10 hidden md:block" />

          <div className="space-y-24 md:space-y-32">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Central Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-brand-sm z-10 hidden md:block ${
                  milestone.highlight ? 'bg-orange scale-125' : 'bg-walnut'
                }`} />

                {/* Content Area */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                  <div className={`mb-4 px-4 py-1 rounded-full text-sm font-bold tracking-wider ${
                    milestone.highlight 
                      ? 'bg-orange text-white shadow-orange' 
                      : 'bg-walnut/5 text-walnut'
                  }`}>
                    {milestone.year}
                  </div>
                  <h3 className={`text-2xl font-heading font-bold mb-4 ${
                    milestone.highlight ? 'text-orange' : 'text-walnut-dark'
                  }`}>
                    {milestone.title}
                  </h3>
                  <p className="text-muted text-lg leading-relaxed text-center md:text-left max-w-[500px]">
                    {milestone.text}
                  </p>
                </div>

                {/* Visual Section (Placeholders) */}
                <div className="w-full md:w-1/2">
                  <div className={`relative aspect-video rounded-brand-lg overflow-hidden shadow-brand bg-slate-50 border-2 ${
                    milestone.highlight ? 'border-orange/20' : 'border-walnut/10'
                  }`}>
                    {/* Visual Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-walnut/5 to-transparent">
                      <span className="text-walnut/20 font-bold uppercase tracking-widest text-xs italic">
                        Istorinė nuotrauka: {milestone.year}
                      </span>
                    </div>
                    {/* Simulated image if path exists - using filler for demonstration */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
