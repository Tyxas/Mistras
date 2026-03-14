'use client'

/**
 * /apie-mus/ — About page.
 * Refined with personal story, new images and Titas' favorite colors.
 */
import { motion } from 'framer-motion'
import Image from 'next/image'
import { aboutPage } from '@/lib/content'
import CtaBanner from '@/components/shared/CtaBanner'

export default function ApieMus() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-walnut-dark via-blue-brand to-green-brand pt-32 pb-24 px-[5%] overflow-hidden">
        {/* Animated backgrounds */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-accent/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-[2] max-w-[1200px] mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-accent rounded-full animate-pulse" />
              {aboutPage.hero.eyebrow}
            </div>
            <h1 className="font-heading font-black text-display-xl text-white mb-6 leading-[1.1]">
              {aboutPage.hero.headline}
              <span className="text-green-accent">{aboutPage.hero.headlineAccent}</span>
            </h1>
            <p className="text-xl leading-relaxed text-white/80 max-w-[700px] mx-auto lg:mx-0">
              {aboutPage.hero.subheadline}
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
              {aboutPage.intro.title}
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              {aboutPage.intro.text}
            </p>
            
            <div className="bg-bg p-8 rounded-brand-lg border-l-4 border-blue-brand shadow-brand-sm">
              <h3 className="font-heading font-bold text-xl text-walnut-dark mb-6">
                {aboutPage.services.title}
              </h3>
              <ul className="space-y-4">
                {aboutPage.services.items.map((item, i) => (
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
                src="/images/about/floor-masterpiece.png" 
                alt="Meistrystės pavyzdys"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut-dark/60 to-transparent" />
            </div>
            {/* 55 Easter Egg Badge */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-brand text-white rounded-full flex flex-col items-center justify-center border-4 border-white shadow-brand-lg z-10 rotate-12">
              <span className="text-3xl font-black font-heading">55</span>
              <span className="text-[0.6rem] font-bold uppercase tracking-tighter">Premium Grade</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Section (Family Story) */}
      <section className="py-24 px-[5%] bg-bg relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, order: 2 }}
              whileInView={{ opacity: 1, order: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-square rounded-brand-lg overflow-hidden border-[12px] border-white shadow-brand">
                <Image 
                  src="/images/about/founders.png" 
                  alt="UAB Mistras įkūrėjai"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, order: 1 }}
              whileInView={{ opacity: 1, order: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-brand mb-4">
                {aboutPage.history.sectionTag}
              </div>
              <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark mb-8 leading-tight">
                {aboutPage.history.headline}
              </h2>
              <div className="space-y-6 text-lg text-muted leading-relaxed">
                <p>{aboutPage.history.p1}</p>
                <div className="p-6 bg-gradient-to-r from-blue-brand/5 to-green-brand/5 border-l-2 border-green-brand rounded-r-brand">
                  <p className="italic">{aboutPage.history.p2}</p>
                </div>
                <p>{aboutPage.history.p3}</p>
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
              {aboutPage.works.sectionTag}
            </div>
            <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark mb-8">
              {aboutPage.works.headline}
            </h2>
            <div className="text-xl text-muted space-y-8 leading-relaxed mb-12">
              <p>{aboutPage.works.text}</p>
              <p className="font-heading font-bold text-walnut-dark">
                {aboutPage.works.closing}
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
