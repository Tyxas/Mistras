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
    text: 'Labai patiko visa komunikacija su Jonu — greit apskaičiavo sąmatą, suderino tinkamą laiką ir darbai atlikti per sutartą laiką. Grindys stipriai pagražėjo.',
    name: 'Klientas',
    city: 'Vilnius',
    initial: 'K',
    source: 'paslaugos.lt',
  },
  {
    id: 2,
    stars: 5,
    text: 'Jonas ir komanda — tikri profesionalai. Prieš darbus supažindino su technika, rezultatas visiškai atitiko lūkesčius. Žmonės su patirtimi, išmintimi ir sklandžia komunikacija. Rekomenduoju.',
    name: 'Klientė',
    city: 'Vilnius',
    initial: 'K',
    source: 'paslaugos.lt',
  },
  {
    id: 3,
    stars: 5,
    text: 'Darbą padarė greitai ir kokybiškai. Rankomis šlifavo sunkiai prieinamas vietas. Pasiūlė variantus su pavyzdžiais ir nuoširdžiai patarė. Esu labai patenkinta.',
    name: 'Klientė',
    city: 'Vilnius',
    initial: 'K',
    source: 'paslaugos.lt',
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {placeholderReviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-brand p-8 shadow-brand-sm border border-gray-200 flex flex-col h-full"
            >
              {/* Stars */}
              <div className="text-amber-400 text-lg tracking-wider mb-4">
                {'★'.repeat(review.stars)}
              </div>

              {/* Review text */}
              <p className="text-slate-brand text-[0.95rem] leading-relaxed mb-6 italic flex-grow">
                &bdquo;{review.text}&ldquo;
              </p>

              {/* Source label */}
              <div className="text-[11px] text-muted mb-6 uppercase tracking-wider font-semibold">
                Šaltinis: {review.source}
              </div>

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

        {/* Link to all reviews */}
        <div className="flex justify-center">
          <a
            href="https://paslaugos.lt/jonas-jg280"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-walnut-dark/10 hover:border-orange text-walnut-dark hover:text-orange font-bold rounded-brand transition-all duration-200 group"
          >
            Skaityti visus atsiliepimus
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
