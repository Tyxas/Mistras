'use client'

/**
 * HeroSection — Full-viewport hero with dark gradient,
 * grain texture, orange glow, 2-column layout.
 * Left: eyebrow + H1 + subheadline + CTAs + badges.
 * Right: BeforeAfterSlider + 3 stat cards.
 * Framer-motion scroll animations.
 */
import { motion } from 'framer-motion'
import { hero } from '@/lib/content'
import BeforeAfterSlider from '@/components/shared/BeforeAfterSlider'

export interface HeroData {
  heroEyebrow?: string;
  heroHeadline?: string;
  heroHeadlineAccent?: string;
  heroSubheadline?: string;
  heroCtaPrimary?: string;
  heroCtaSecondary?: string;
}

export default function HeroSection({ data }: { data?: HeroData }) {
  // Use WP data or fallback to offline content
  const eyebrow = data?.heroEyebrow || hero.eyebrow;
  const headline = data?.heroHeadline || hero.headline;
  const headlineAccent = data?.heroHeadlineAccent || hero.headlineAccent;
  const subheadline = data?.heroSubheadline || hero.subheadline;
  const ctaPrimary = data?.heroCtaPrimary || hero.ctaPrimary;
  const ctaSecondary = data?.heroCtaSecondary || hero.ctaSecondary;

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-walnut-dark via-[#2C1810] to-slate-brand">
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

      {/* Orange glow */}
      <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(230,126,34,.15)_0%,transparent_70%)]" />

      {/* Content grid */}
      <div className="relative z-[2] max-w-[1200px] mx-auto px-[5%] pt-20 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <span className="text-orange text-[0.5rem]">●</span>
            {eyebrow}
          </div>

          {/* H1 */}
          <h1 className="font-heading font-black text-display-lg lg:text-display-xl text-white mb-6 max-w-[800px] leading-[1.1]">
            {headline}
            <span className="lg:hidden"> </span>
            <br className="hidden lg:block" />
            <span className="text-orange">{headlineAccent}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg leading-relaxed text-white/70 mb-10 max-w-[480px]">
            {subheadline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#kontaktai"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-[10px] font-heading font-bold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-orange"
            >
              ✉ {ctaPrimary}
            </a>
            <a
              href="/atlikti-darbai/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-[10px] font-heading font-semibold text-base transition-all duration-200 backdrop-blur-sm"
            >
              📸 {ctaSecondary}
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mt-10">
            {hero.badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 bg-white/[0.08] border border-white/[0.12] text-white/80 px-3.5 py-1.5 rounded-lg text-xs font-semibold"
              >
                {badge === 'Nuo 1994 m.' && '✅'}
                {badge === 'Laiku ir tvarkingai' && '⏱️'}
                {badge === 'Nemokama sąmata' && '🎁'}
                {badge === 'Kokybės garantija' && '💎'}
                {' '}{badge}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="hidden lg:flex flex-col gap-4"
        >
          {/* Before/After slider */}
          <BeforeAfterSlider
            beforeSrc="placeholder-before"
            afterSrc="placeholder-after"
            beforeAlt="Senos parketo grindys prieš šlifavimą"
            afterAlt="Atnaujintos parketo grindys po šlifavimo"
            location="Žvėrynas"
            projectType="Ąžuolo parketas"
          />

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/[0.08] border border-white/10 rounded-brand p-5 text-center backdrop-blur-sm">
              <span className="font-heading text-3xl font-black text-orange block">30+</span>
              <div className="text-xs text-white/60 mt-1">Metų patirties</div>
            </div>
            <div className="bg-white/[0.08] border border-white/10 rounded-brand p-5 text-center backdrop-blur-sm">
              <span className="font-heading text-3xl font-black text-orange block">500+</span>
              <div className="text-xs text-white/60 mt-1">Projektų</div>
            </div>
            <div className="bg-white/[0.08] border border-white/10 rounded-brand p-5 text-center backdrop-blur-sm">
              <span className="font-heading text-3xl font-black text-orange block">100%</span>
              <div className="text-xs text-white/60 mt-1">Švara</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
