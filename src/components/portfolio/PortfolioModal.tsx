'use client'

/**
 * PortfolioModal — Full-screen project detail overlay.
 * Shows project info, before/after slider, and details.
 * Closes on ESC key or clicking backdrop.
 */
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BeforeAfterSlider from '@/components/shared/BeforeAfterSlider'
import type { PortfolioProject } from '@/components/portfolio/PortfolioCard'

interface PortfolioModalProps {
  project: PortfolioProject | null
  onClose: () => void
}

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-brand-lg max-w-[900px] w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-5 border-b border-gray-100">
              <div>
                <h2 className="font-heading font-extrabold text-xl text-walnut-dark">
                  {project.title}
                </h2>
                <p className="text-muted text-sm mt-1">{project.type}</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-bg hover:bg-gray-200 flex items-center justify-center text-walnut-dark transition-colors"
                aria-label="Uždaryti"
              >
                ✕
              </button>
            </div>

            {/* Before/After slider */}
            <div className="px-8 py-6">
              <BeforeAfterSlider
                beforeSrc={project.beforeImage || 'placeholder-before'}
                afterSrc={project.afterImage || project.image || 'placeholder-after'}
                beforeAlt={`${project.title} prieš šlifavimą`}
                afterAlt={`${project.title} po šlifavimo`}
              />
            </div>

            {/* Details */}
            <div className="px-8 pb-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-bg rounded-brand p-4">
                  <div className="text-xs text-muted uppercase tracking-wider mb-1">Plotas</div>
                  <div className="font-heading font-bold text-walnut-dark">{project.area}</div>
                </div>
                <div className="bg-bg rounded-brand p-4">
                  <div className="text-xs text-muted uppercase tracking-wider mb-1">Trukmė</div>
                  <div className="font-heading font-bold text-walnut-dark">{project.duration}</div>
                </div>
                <div className="bg-bg rounded-brand p-4">
                  <div className="text-xs text-muted uppercase tracking-wider mb-1">Kategorija</div>
                  <div className="font-heading font-bold text-walnut-dark">{project.categories.join(', ')}</div>
                </div>
              </div>

              <p className="text-muted text-sm leading-relaxed">{project.description}</p>

              <a
                href="#kontaktai"
                onClick={onClose}
                className="inline-flex items-center gap-2 mt-6 bg-orange hover:bg-orange-dark text-white px-6 py-3 rounded-[10px] font-heading font-bold text-sm transition-colors"
              >
                ✉ Gauti panašią sąmatą
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
