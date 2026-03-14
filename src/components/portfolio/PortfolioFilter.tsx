'use client'

/**
 * PortfolioFilter — Horizontal filter tabs for portfolio categories.
 * Active tab gets orange highlight.
 */
import { portfolio } from '@/lib/content'

interface PortfolioFilterProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
  dynamicCategories: string[]
}

export default function PortfolioFilter({ activeFilter, onFilterChange, dynamicCategories }: PortfolioFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {dynamicCategories.map((label) => (
        <button
          key={label}
          onClick={() => onFilterChange(label)}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
            activeFilter === label
              ? 'bg-orange text-white shadow-orange'
              : 'bg-white border border-gray-200 text-muted hover:border-walnut-light hover:text-walnut-dark'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
