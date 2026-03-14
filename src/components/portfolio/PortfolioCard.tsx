'use client'

/**
 * PortfolioCard — Before/after thumbnail card for portfolio grid.
 * Shows gradient background, category badge, location + type.
 * Clickable to open PortfolioModal.
 */
import { motion } from 'framer-motion'
import Image from 'next/image'

export interface PortfolioProject {
  id: string
  title: string
  type: string
  category: string
  image?: string
  gradient?: string
  area: string
  duration: string
  description: string
}

interface PortfolioCardProps {
  project: PortfolioProject
  index: number
  onClick: () => void
}

export default function PortfolioCard({ project, index, onClick }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={onClick}
      className="rounded-brand overflow-hidden relative aspect-square cursor-pointer group bg-walnut/10"
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient || 'from-gray-800 to-gray-900'} transition-transform duration-700 group-hover:scale-110`} />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:from-black/90" />

      {/* Category badge */}
      <div className="absolute top-4 right-4 bg-orange text-white text-[0.65rem] font-bold uppercase px-2.5 py-1 rounded">
        Prieš / Po
      </div>

      {/* Meta */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="font-heading font-bold text-white text-base">{project.title}</div>
        <div className="text-white/70 text-xs mt-0.5">{project.type}</div>
        <div className="text-white/50 text-xs mt-1">{project.area}</div>
      </div>
    </motion.div>
  )
}
