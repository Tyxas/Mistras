/**
 * Root layout for the Mistras website.
 * Sets up Inter Tight (headings) + Open Sans (body) fonts,
 * Lithuanian language tag, base metadata, and layout shell
 * (NavBar + children + Footer + MobileStickyBar).
 */
import type { Metadata } from 'next'
import { Inter_Tight, Open_Sans } from 'next/font/google'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import MobileStickyBar from '@/components/layout/MobileStickyBar'
import './globals.css'

// Heading font — used via font-heading Tailwind class
const interTight = Inter_Tight({
  subsets: ['latin', 'latin-ext'],
  weight: ['700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
})

// Body font — used via font-body Tailwind class
const openSans = Open_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Grindų Šlifavimas Vilniuje | UAB Mistras — Nuo 1994',
    template: '%s | UAB Mistras',
  },
  description:
    'Profesionalus parketo šlifavimas Vilniuje be dulkių. 30+ metų patirtis, premium medžiagos (Bona, Osmo), nemokama sąmata. Skambinkite +370 604 10608.',
  metadataBase: new URL('https://mistras.lt'),
  openGraph: {
    type: 'website',
    locale: 'lt_LT',
    siteName: 'UAB Mistras',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lt" className={`${interTight.variable} ${openSans.variable}`}>
      <body className="font-body antialiased bg-bg text-walnut-dark">
        <NavBar />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  )
}
