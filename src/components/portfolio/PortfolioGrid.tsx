'use client'

/**
 * PortfolioGrid — Filterable grid of portfolio projects.
 * Combines Filter, Cards, and Modal components.
 * Placeholder data until WordPress API is connected.
 */
import { useState } from 'react'
import PortfolioFilter from '@/components/portfolio/PortfolioFilter'
import PortfolioCard from '@/components/portfolio/PortfolioCard'
import PortfolioModal from '@/components/portfolio/PortfolioModal'
import type { PortfolioProject } from '@/components/portfolio/PortfolioCard'

// Placeholder projects — will be replaced with WP API data
const PLACEHOLDER_PROJECTS: PortfolioProject[] = [
  { id: '1', title: 'Žvėrynas, Vilnius', type: 'Ąžuolo parketas · Lakavimas', categories: ['Parketo šlifavimas'], gradient: 'from-[#4a3728] to-[#8B6914]', area: '65 m²', duration: '2 dienos', description: 'Senas 40 metų ąžuolo parketas buvo visiškai atnaujintas. Nuėmėme 3 sluoksnius seno lako, sušlifavome iki natūralios medienos ir padengėme 3 sluoksniais Bona Traffic HD lako.' },
  { id: '2', title: 'Senamiestis, Vilnius', type: 'Dažytos grindys · Šlifavimas', categories: ['Parketo šlifavimas'], gradient: 'from-[#2a2a2a] to-[#5D4037]', area: '45 m²', duration: '1.5 dienos', description: 'Senamiesčio buto grindys buvo padengtos keliais sluoksniais dažų. Po kruopštaus šlifavimo atsivėrė gražus pušies medienos raštas.' },
  { id: '3', title: 'Restoranas „Amber"', type: 'Komercinės grindys · Bona', categories: ['Komerciniai'], gradient: 'from-[#3E2723] to-[#795548]', area: '180 m²', duration: '3 dienos', description: 'Komercinis projektas – restorano grindų šlifavimas ir padengimas Bona Traffic HD laku. Dirbome naktimis, kad netrukdytume restorano veiklai.' },
  { id: '4', title: 'Antakalnis, Vilnius', type: 'Ąžuolo parketas · Alyvavimas', categories: ['Parketo šlifavimas'], gradient: 'from-[#5D4037] to-[#D4A843]', area: '80 m²', duration: '2 dienos', description: 'Erdvaus namo ąžuolo parketas buvo atnaujintas ir padengtas Osmo Polyx-Oil alyva. Klientas norėjo natūralios, matinės išvaizdos.' },
  { id: '5', title: 'Terasa, Pilaitė', type: 'Pušies terasa · Alyvavimas', categories: ['Terasos'], gradient: 'from-[#2C1810] to-[#6b4c3c]', area: '35 m²', duration: '1 diena', description: 'Pušies terasos atnaujinimas – plovimas aukšto slėgio plovikliu, šlifavimas ir alyvavimas su UV apsauga.' },
  { id: '6', title: 'Sporto salė, Karoliniškės', type: 'Sporto grindys · Lakas', categories: ['Komerciniai'], gradient: 'from-[#1a1a1a] to-[#3E2723]', area: '320 m²', duration: '5 dienos', description: 'Sporto salės grindų šlifavimas ir padengimas specialiu sporto lauku. Atnaujintos žymėjimo linijos.' },
  { id: '7', title: 'Lazdynai, Vilnius', type: 'Uosio parketas · Lakavimas', categories: ['Parketo šlifavimas'], gradient: 'from-[#4a3728] to-[#5D4037]', area: '55 m²', duration: '2 dienos', description: 'Uosio parketo atnaujinimas su pilnu šlifavimo ciklu ir 3 sluoksniais lako.' },
  { id: '8', title: 'Laiptai, Žirmūnai', type: 'Ąžuolo laiptai · Alyva', categories: ['Laiptai'], gradient: 'from-[#3E2723] to-[#8B6914]', area: '15 m²', duration: '1 diena', description: 'Medinių laiptų šlifavimas ir alyvavimas. Ypatingas dėmesys kampams ir laiptų nosims.' },
  { id: '9', title: 'Termomedžio terasa, Baltupiai', type: 'Termomedis · Specialus aliejus', categories: ['Terasos'], gradient: 'from-[#2C1810] to-[#795548]', area: '40 m²', duration: '1.5 dienos', description: 'Termomedžio terasos atnaujinimas specialia lauko alyva su UV ir drėgmės apsauga.' },
]

export default function PortfolioGrid({ initialProjects = PLACEHOLDER_PROJECTS }: { initialProjects?: PortfolioProject[] }) {
  const [filter, setFilter] = useState('Visi')
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)

  const projectsToUse = initialProjects.length > 0 ? initialProjects : PLACEHOLDER_PROJECTS

  // Dynamically calculate unique categories from projects
  const dynamicCategories = ['Visi', ...Array.from(new Set(projectsToUse.flatMap(p => p.categories)))]

  const filteredProjects = filter === 'Visi'
    ? projectsToUse
    : projectsToUse.filter((p) => p.categories.includes(filter))

  return (
    <>
      <PortfolioFilter 
        activeFilter={filter} 
        onFilterChange={setFilter} 
        dynamicCategories={dynamicCategories} 
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, i) => (
          <PortfolioCard
            key={project.id}
            project={project}
            index={i}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-muted">
          <div className="text-4xl mb-4">🔍</div>
          <p>Šioje kategorijoje darbų kol kas nėra.</p>
        </div>
      )}

      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
