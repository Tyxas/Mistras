'use client'

/**
 * MobileStickyBar — Fixed bottom bar, visible ONLY on mobile (md:hidden).
 * Left button: 📞 Skambinti → tel link.
 * Right button: Gauti sąmatą → scrolls to #kontaktai.
 * Both buttons: min-height 44px (touch target).
 * Safe-area-inset padding for notch devices.
 */
import { nav } from '@/lib/content'

export default function MobileStickyBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,.12)] flex gap-3 px-4 py-3"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      {/* Call button */}
      <a
        href="tel:+37060410608"
        className="flex-1 flex items-center justify-center gap-2 min-h-touch rounded-[10px] border-[1.5px] border-gray-200 bg-white text-slate-brand font-heading font-bold text-[0.9rem]"
      >
        📞 {nav.mobileCallLabel}
      </a>

      {/* Quote button */}
      <button
        onClick={() => {
          const el = document.getElementById('kontaktai')
          el?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="flex-[2] flex items-center justify-center min-h-touch rounded-[10px] bg-orange text-white font-heading font-bold text-[0.9rem] hover:bg-orange-dark transition-colors"
      >
        ✉ {nav.mobileQuoteLabel}
      </button>
    </div>
  )
}
