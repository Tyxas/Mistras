'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { dukPage } from '@/lib/content'
import CtaBanner from '@/components/shared/CtaBanner'

export default function DukPage() {
  const [activeCategory, setActiveCategory] = useState(dukPage.categories[0].id)
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const currentCategory = dukPage.categories.find((c) => c.id === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-walnut-dark pt-32 pb-24 px-[5%]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-accent/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-accent/15 rounded-full blur-[100px]" />
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
        </div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-blue-accent text-[0.7rem] font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-8 shadow-2xl">
              <span className="w-2 h-2 bg-green-accent rounded-full animate-ping" />
              {dukPage.hero.eyebrow}
            </div>
            <h1 className="font-heading font-black text-display-lg lg:text-7xl text-white mb-8 leading-[1.05] tracking-tight">
              {dukPage.hero.headline}
              <span className="bg-gradient-to-r from-orange to-orange-dark bg-clip-text text-transparent">
                {dukPage.hero.headlineAccent}
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-white/60 max-w-[750px] mx-auto font-medium">
              {dukPage.hero.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-24 px-[5%] bg-slate-50 relative min-h-screen">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar Categories */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.15em] text-walnut-dark mb-4 pl-2 flex items-center gap-2">
                <span className="w-6 h-1 bg-orange rounded-full" />
                Kategorijos
              </h3>
              <nav className="flex flex-col gap-3">
                {dukPage.categories.map((category) => {
                  const isActive = activeCategory === category.id
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`group relative text-left pl-6 pr-8 py-5 rounded-2xl font-heading font-black transition-all duration-300 border-2 overflow-hidden ${
                        isActive 
                          ? 'bg-walnut-dark text-white border-walnut-dark shadow-xl shadow-walnut-dark/20 translate-x-3' 
                          : 'bg-white text-walnut-dark/50 border-transparent hover:border-slate-200 hover:text-walnut-dark hover:translate-x-2'
                      }`}
                    >
                      <span className="relative z-10">{category.title}</span>
                      {isActive && (
                        <motion.div 
                          layoutId="activeGlow"
                          className="absolute inset-0 bg-gradient-to-r from-blue-accent/10 to-transparent pointer-events-none" 
                        />
                      )}
                      <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 translate-x-2'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-orange">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </button>
                  )
                })}
              </nav>

              {/* Decorative Card */}
              <div className="hidden lg:block bg-walnut-dark p-8 rounded-3xl text-white shadow-2xl mt-12 overflow-hidden relative group border border-white/10">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <h4 className="font-heading font-black text-2xl mb-2 text-white">Nerandi atsakymo?</h4>
                <p className="text-white/80 text-sm mb-8 font-medium leading-relaxed">Susisiekite tiesiogiai ir mes padėsime atsakyti į visus jums rūpimus klausimus.</p>
                <Link 
                  href="/kontaktai"
                  className="inline-flex items-center justify-center w-full py-4 bg-orange text-white font-heading font-bold rounded-xl hover:bg-orange-dark transition-all hover:shadow-orange hover:-translate-y-1 group/btn"
                >
                  Susisiekti
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </aside>

          {/* FAQ Accordions */}
          <main className="lg:w-2/3">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="mb-10">
                <h2 className="font-heading font-black text-4xl lg:text-5xl text-walnut-dark tracking-tight mb-4">
                  {currentCategory?.title}
                </h2>
                <div className="h-1.5 w-full max-w-[400px] bg-gradient-to-r from-orange via-blue-accent to-transparent rounded-full opacity-80" />
              </div>

              {currentCategory?.items.map((item, index) => {
                const itemId = `${activeCategory}-${index}`
                const isOpen = openItems[itemId]

                return (
                  <div 
                    key={itemId}
                    className={`group rounded-3xl transition-all duration-500 border-2 overflow-hidden bg-white ${
                      isOpen 
                        ? 'border-blue-accent/20 shadow-2xl shadow-blue-accent/5' 
                        : 'border-white hover:border-slate-200 shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(itemId)}
                      className="w-full text-left px-8 py-7 flex items-center justify-between gap-6 group"
                    >
                      <span className={`font-heading font-black text-xl lg:text-2xl transition-all duration-300 leading-tight ${
                        isOpen ? 'text-walnut-dark' : 'text-walnut-dark/80 group-hover:text-walnut-dark'
                      }`}>
                        {item.q}
                      </span>
                      <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isOpen ? 'bg-orange text-white rotate-180 shadow-lg shadow-orange/30' : 'bg-slate-50 text-walnut-dark group-hover:bg-slate-100'
                      }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <div className="px-8 pb-10 pt-2 text-walnut-dark/70 text-lg lg:text-xl leading-relaxed font-medium">
                            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden">
                              <div className="absolute top-0 left-0 w-1 h-full bg-blue-accent/30" />
                              {item.a}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </motion.div>
          </main>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
