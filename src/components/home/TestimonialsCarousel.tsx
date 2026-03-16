'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { testimonials } from '@/lib/content'

export default function TestimonialsCarousel() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeImageIdx, setActiveImageIdx] = useState<Record<number, number>>({})

  const handleImageChange = (reviewIdx: number, imgIdx: number) => {
    setActiveImageIdx(prev => ({ ...prev, [reviewIdx]: imgIdx }))
  }

  return (
    <section id="testimonials" className="py-24 px-[5%] bg-slate-50 overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-orange font-black uppercase tracking-[0.2em] text-sm mb-4"
            >
              {testimonials.sectionTag}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-heading font-black text-4xl lg:text-5xl text-walnut-dark tracking-tight leading-[1.1]"
            >
              {testimonials.headline}
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-brand-sm border border-slate-100 self-center md:self-end"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <div className="w-full h-full bg-walnut/20 flex items-center justify-center text-[10px] font-bold text-walnut">M</div>
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-amber-400 text-xs">{'★'.repeat(5)}</div>
              <div className="text-[10px] font-black text-walnut-dark/40 uppercase tracking-widest mt-1">4.9/5 REITINGAS</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.realReviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col h-full hover:shadow-2xl hover:shadow-walnut/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Gallery Header */}
              {review.images && review.images.length > 0 && (
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImageIdx[idx] || 0}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={review.images[activeImageIdx[idx] || 0]} 
                        alt={`Darbas - ${review.name}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Image Selectors */}
                  {review.images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                      {review.images.map((_, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={() => handleImageChange(idx, imgIdx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            (activeImageIdx[idx] || 0) === imgIdx 
                              ? 'bg-orange w-6' 
                              : 'bg-white/50 hover:bg-white'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                  
                  <div className="absolute top-4 left-4 bg-walnut-dark/80 backdrop-blur-md text-[10px] font-black text-white px-3 py-1.5 rounded-full uppercase tracking-widest">
                    REALI NUOTRAUKA
                  </div>
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                {/* Rating */}
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-walnut-dark/80 font-medium leading-relaxed text-lg mb-8 flex-grow">
                  &bdquo;{review.text}&ldquo;
                </blockquote>

                {/* Footer */}
                <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-walnut to-walnut-dark flex items-center justify-center text-white font-black text-lg shadow-lg shadow-walnut/20">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-heading font-black text-walnut-dark leading-none mb-1">{review.name}</div>
                      <div className="text-xs font-black text-walnut-dark/40 uppercase tracking-widest">{review.date}</div>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block">
                    <a 
                      href="https://paslaugos.lt/jonas-jg280" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] font-black text-walnut-dark/30 hover:text-orange transition-colors uppercase tracking-[0.2em] border-b border-walnut-dark/10 hover:border-orange pb-1"
                    >
                      PASLAUGOS.LT
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="https://paslaugos.lt/jonas-jg280"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-walnut-dark text-white font-heading font-black rounded-2xl hover:bg-orange transition-all duration-300 shadow-2xl shadow-walnut-dark/20 hover:shadow-orange/30 group"
          >
            PERŽIŪRĖTI VISUS ATSILIEPIMUS
            <span className="group-hover:translate-x-1 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
