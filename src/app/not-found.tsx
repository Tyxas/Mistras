'use client'

/**
 * Custom 404 Page — Mistras
 * Refined layout: 404 above text, white backdrop for readability.
 */
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from '@/lib/content'

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Background Image: Wood Labyrinth */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/404-bg.png"
          alt="Medinis labirintas"
          fill
          className="object-cover"
          priority
        />
        {/* Dark subtle vignette */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-center min-h-[60vh]">
        {/* Radial Gradient Backdrop for Readability */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_50%,transparent_85%)] -z-10 animate-fade-in pointer-events-none" />
        
        <div className="text-center space-y-8 animate-fade-up px-6 py-12">
          {/* 404 Text - Positioned at Top */}
          <div className="font-heading font-black text-6xl md:text-9xl text-walnut-dark/10 select-none leading-none tracking-tighter mb-4">
            404
          </div>
          
          <div className="space-y-6">
            <h2 className="font-heading font-black text-display-md md:text-display-lg text-walnut-dark leading-tight">
              {notFound.headline}
            </h2>
            
            <p className="text-walnut-dark/80 text-lg md:text-xl max-w-md mx-auto leading-relaxed font-medium">
              {notFound.subheadline}
            </p>
            
            <div className="pt-8">
              <Link 
                href="/" 
                className="inline-flex items-center px-10 py-5 bg-orange text-white font-heading font-bold rounded-brand hover:bg-orange-dark transition-all hover:shadow-orange hover:-translate-y-1 group text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 mr-3 group-hover:-translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                {notFound.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
