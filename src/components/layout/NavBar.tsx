'use client'

/**
 * NavBar — Fixed top navigation bar.
 * Transparent over hero, solid walnut-dark when scrolled > 60px.
 * Desktop: logo + links + CTA. Mobile: hamburger → full-screen drawer.
 */
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { nav } from '@/lib/content'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Track scroll position to toggle solid bg
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between h-[72px] px-[5%] transition-all duration-300 bg-walnut-dark ${
          scrolled
            ? 'shadow-[0_2px_20px_rgba(0,0,0,.3)]'
            : 'bg-opacity-95 backdrop-blur-md'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="font-heading font-extrabold text-[1.4rem] text-white tracking-tight">
          {nav.logo}<span className="text-orange">.</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/85 text-[0.9rem] font-medium hover:text-orange transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => {
            const el = document.getElementById('kontaktai')
            el?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="hidden md:inline-flex bg-orange hover:bg-orange-dark text-white px-5 py-2.5 rounded-lg font-heading font-bold text-[0.9rem] transition-all duration-200 hover:-translate-y-0.5"
        >
          {nav.ctaLabel}
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Atidaryti meniu"
        >
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[99] bg-walnut-dark flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-heading font-bold hover:text-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Phone number */}
            <a
              href="tel:+37060410608"
              className="text-orange text-xl font-heading font-bold mt-4"
            >
              📞 +370 604 10608
            </a>

            {/* CTA */}
            <button
              onClick={() => {
                setMobileOpen(false)
                setTimeout(() => {
                  document.getElementById('kontaktai')?.scrollIntoView({ behavior: 'smooth' })
                }, 350)
              }}
              className="bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-brand font-heading font-bold text-lg mt-2 transition-colors shadow-orange"
            >
              {nav.ctaLabel}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
