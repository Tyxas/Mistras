'use client'

/**
 * CookieConsent — Glassmorphism banner for cookie acceptance.
 * Saves preference in localStorage.
 */
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cookieConsent } from '@/lib/content'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('mistras-cookie-consent')
    if (!consent) {
      // Delay visibility for a smoother entrance
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('mistras-cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('mistras-cookie-consent', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-[500px]"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-brand-lg rounded-brand-lg p-6 md:p-8 flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-brand/10 text-blue-brand flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <div>
                <p className="text-walnut-dark text-sm md:text-base leading-relaxed">
                  {cookieConsent.message}{' '}
                  <Link href="/slapukai/" className="text-blue-accent hover:underline font-medium">
                    {cookieConsent.moreInfo}
                  </Link>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-3 bg-blue-brand text-white font-bold rounded-brand hover:bg-blue-accent transition-colors shadow-brand"
              >
                {cookieConsent.accept}
              </button>
              <button
                onClick={handleDecline}
                className="px-6 py-3 bg-walnut-light/10 text-walnut-dark/70 font-semibold rounded-brand hover:bg-walnut-light/20 transition-colors"
              >
                {cookieConsent.decline}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
