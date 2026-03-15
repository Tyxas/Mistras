'use client'

/**
 * TestimonialsCarousel — 3-column review cards.
 * Hardcoded reviews for now, will fetch from WordPress in Phase 5.
 * Star ratings, reviewer avatar initials, italic review text.
 */
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { testimonials } from '@/lib/content'

// Placeholder data until WordPress is connected
const placeholderReviews = [
  {
    id: 1,
    stars: 5,
    text: 'Tikrai profesionalai. Labai tvarkingai – net nesupratome, kad vyko šlifavimas. Grindys atrodo kaip naujos, nors jiems buvo 20 metų.',
    name: 'Lina K.',
    city: 'Žvėrynas, Vilnius',
    initial: 'L',
  },
  {
    id: 2,
    stars: 5,
    text: 'Dirbome su komerciniu projektu – restoranas, didelis plotas. Viskas atlikta laiku, kokybiškai, be jokio streso. Rekomenduojame.',
    name: 'Robertas M.',
    city: 'Senamiestis, Vilnius',
    initial: 'R',
  },
  {
    id: 3,
    stars: 5,
    text: 'Jonas ir jo komanda – tikri meistrai. Glaistė, šlifavo, lakavo – viskas vienu metu, be jokios tvarkos sudrumstimo.',
    name: 'Agnė P.',
    city: 'Antakalnis, Vilnius',
    initial: 'A',
  },
]

export default function TestimonialsCarousel() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="testimonials" className="py-20 px-[5%] bg-bg" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-xs font-bold uppercase tracking-[0.1em] text-orange mb-3">
          {testimonials.sectionTag}
        </div>
        <h2 className="font-heading font-extrabold text-display-lg text-walnut-dark tracking-tight mb-12">
          {testimonials.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderReviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-brand p-8 shadow-brand-sm border border-gray-200"
            >
              {/* Stars */}
              <div className="text-amber-400 text-lg tracking-wider mb-4">
                {'★'.repeat(review.stars)}
              </div>

              {/* Review text */}
              <p className="text-slate-brand text-[0.95rem] leading-relaxed mb-6 italic">
                &bdquo;{review.text}&ldquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-walnut to-walnut-light flex items-center justify-center text-white font-bold text-sm">
                  {review.initial}
                </div>
                <div>
                  <div className="font-bold text-sm text-walnut-dark">{review.name}</div>
                  <div className="text-xs text-muted">{review.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
