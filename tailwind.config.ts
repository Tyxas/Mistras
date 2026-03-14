import type { Config } from 'tailwindcss'

/**
 * tailwind.config.ts — Mistras brand design tokens.
 * All components must use only these custom tokens.
 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand
        walnut: {
          DEFAULT: '#5D4037',
          dark: '#3E2723',
          light: '#8D6E63',
        },
        // Secondary / trust
        slate: {
          brand: '#2C3E50',
        },
        // CTA
        orange: {
          DEFAULT: '#E67E22',
          dark: '#CF6D17',
          light: '#F39C12',
        },
        // Titas' favorites (Premium selection)
        blue: {
          brand: '#1E3A8A', // Deep Trust Blue
          accent: '#3B82F6',
        },
        green: {
          brand: '#064E3B', // Deep Emerald / Forest
          accent: '#10B981',
        },
        // Backgrounds
        bg: {
          DEFAULT: '#F9F9F9',
        },
        // Text
        muted: '#6B7280',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        // Display sizes
        'display-xl': ['clamp(2.4rem, 5vw, 3.8rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(1.8rem, 3.5vw, 2.8rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.4rem, 2.5vw, 2rem)', { lineHeight: '1.2' }],
      },
      borderRadius: {
        'brand': '12px',   // cards
        'brand-lg': '20px',   // hero, modal
      },
      boxShadow: {
        'brand-sm': '0 1px 3px rgba(0,0,0,.10)',
        'brand': '0 4px 20px rgba(0,0,0,.12)',
        'brand-lg': '0 10px 40px rgba(0,0,0,.16)',
        'orange': '0 8px 24px rgba(230,126,34,.40)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'price-pop': 'pricePop 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        pricePop: {
          from: { transform: 'scale(0.9)' },
          to: { transform: 'scale(1)' },
        },
      },
      minHeight: {
        touch: '44px',  // minimum touch target
      },
    },
  },
  plugins: [],
}

export default config
