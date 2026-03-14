'use client'

/**
 * BeforeAfterSlider — Interactive before/after image comparison.
 * Drag handle reveals the "after" image by clipping.
 * Works with mouse drag and touch swipe.
 * Labels: "Prieš" (dark pill) / "Po" (orange pill).
 */
import { useState, useRef, useCallback } from 'react'
import { hero } from '@/lib/content'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  location?: string
  projectType?: string
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  location,
  projectType,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  // Calculate position from clientX relative to container
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100))
    setPosition(pct)
  }, [])

  const handleMouseDown = () => { isDragging.current = true }
  const handleMouseUp = () => { isDragging.current = false }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    updatePosition(e.clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative rounded-brand-lg overflow-hidden aspect-[4/3] bg-walnut-dark shadow-[0_20px_60px_rgba(0,0,0,.5)] cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      aria-label="Prieš ir po palyginimas — vilkite slankiklį"
    >
      {/* Before image (background) */}
      <div
        className="absolute inset-0 flex items-center justify-center text-6xl"
        style={{
          background: `linear-gradient(135deg, #4a3728 0%, #6b4c3c 100%)`,
          backgroundImage: beforeSrc.startsWith('/') ? `url(${beforeSrc})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-label={beforeAlt}
      >
        {!beforeSrc.startsWith('/') && '🪵'}
      </div>

      {/* After image (clipped) */}
      <div
        className="absolute inset-0 flex items-center justify-center text-6xl"
        style={{
          background: `linear-gradient(135deg, #8B6914 0%, #D4A843 100%)`,
          backgroundImage: afterSrc.startsWith('/') ? `url(${afterSrc})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
        aria-label={afterAlt}
      >
        {!afterSrc.startsWith('/') && '✨'}
      </div>

      {/* Drag handle line */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white z-10 -translate-x-1/2"
        style={{ left: `${position}%` }}
      >
        {/* Handle circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-brand flex items-center justify-center">
          <span className="text-walnut font-extrabold text-[0.6rem] whitespace-nowrap">◀ ▶</span>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md z-10">
        {hero.baLabels.before}
      </div>
      <div className="absolute bottom-4 right-4 bg-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md z-10">
        {hero.baLabels.after}
      </div>

      {/* Location label */}
      {location && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs font-medium z-10">
          📍 {location} {projectType && `· ${projectType}`}
        </div>
      )}
    </div>
  )
}
