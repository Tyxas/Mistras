'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import CtaBanner from '@/components/shared/CtaBanner'

interface AboutData {
  hero: {
    eyebrow: string
    headline: string
    headlineAccent: string
    subheadline: string
  }
  intro: {
    title: string
    text: string
    image: string
  }
  services: {
    title: string
    items: string[]
  }
  history: {
    sectionTag: string
    headline: string
    image: string
    p1: string
    p2: string
    p3: string
  }
  works: {
    sectionTag: string
    headline: string
    text: string
    closing: string
  }
}

export default function AboutClient({ data }: { data: AboutData }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-walnut-dark via-[#2C1810] to-slate-brand pt-24 pb-20 px-[5%]">
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Herringbone pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.3) 10px, rgba(255,255,255,.3) 11px)',
          }}
        />

        {/* Brand Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        {/* '55' Branding Watermark */}
        <div className="absolute right-[5%] bottom-[10%] select-none pointer-events-none z-[1]">
          <span className="font-heading font-black text-[15rem] leading-none text-white/[0.03] tracking-tighter">
            55
          </span>
        </div>

        <div className="relative z-[2] max-w-[1200px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-[800px]"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
              <span className="text-orange text-[0.5rem]">●</span>
              {data.hero.eyebrow}
            </div>
            <h1 className="font-heading font-black text-display-lg lg:text-display-xl text-white mb-6 leading-[1.1]">
              {data.hero.headline}{' '}
              <span className="text-orange">{data.hero.headlineAccent}</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/70 max-w-[600px]">
              {data.hero.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro & Services Section */}
      <section className="py-24 px-[5%] bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark mb-6">
              {data.intro.title}
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed whitespace-pre-wrap">
              {data.intro.text}
            </p>
            
            <div className="bg-bg p-8 rounded-brand-lg border-l-4 border-blue-brand shadow-brand-sm">
              <h3 className="font-heading font-bold text-xl text-walnut-dark mb-6">
                {data.services.title}
              </h3>
              <ul className="space-y-4">
                {data.services.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <span className="text-green-accent mt-1">✓</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-brand-lg overflow-hidden shadow-brand-lg">
              <Image 
                src={data.intro.image} 
                alt="Meistrystės pavyzdys"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut-dark/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Section (Family Story) */}
      <section className="py-24 px-[5%] bg-bg relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-brand-lg overflow-hidden border-[12px] border-white shadow-brand"
              >
                <Image 
                  src={data.history.image} 
                  alt="UAB Mistras įkūrėjai"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 order-1 lg:order-2"
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-brand mb-4">
                {data.history.sectionTag}
              </div>
              <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark mb-8 leading-tight">
                {data.history.headline}
              </h2>
              <div className="space-y-6 text-lg text-muted leading-relaxed">
                <p className="whitespace-pre-wrap">{data.history.p1}</p>
                <div className="p-6 bg-gradient-to-r from-blue-brand/5 to-green-brand/5 border-l-2 border-green-brand rounded-r-brand">
                  <p className="italic whitespace-pre-wrap">{data.history.p2}</p>
                </div>
                <p className="whitespace-pre-wrap">{data.history.p3}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="py-24 px-[5%] bg-white overflow-hidden">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-green-brand mb-4">
              {data.works.sectionTag}
            </div>
            <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark mb-8">
              {data.works.headline}
            </h2>
            <div className="text-xl text-muted space-y-8 leading-relaxed mb-12">
              <p className="whitespace-pre-wrap">{data.works.text}</p>
              <p className="font-heading font-bold text-walnut-dark">
                {data.works.closing}
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
              {[
                { label: 'Privatūs namai', icon: '🏠' },
                { label: 'Viešbučiai', icon: '🏨' },
                { label: 'Sporto salės', icon: '🏀' },
                { label: 'Muziejai', icon: '🏛️' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-bg rounded-brand border border-slate-100 hover:border-green-brand/30 transition-colors group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-walnut-dark">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
