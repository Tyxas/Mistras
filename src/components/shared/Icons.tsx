import React from 'react'

export const WoodFloorIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-walnut">
    {/* Staggered planks pattern */}
    <rect x="2" y="6" width="24" height="8" rx="1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <rect x="28" y="6" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <rect x="2" y="16" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <rect x="16" y="16" width="22" height="8" rx="1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <rect x="2" y="26" width="26" height="8" rx="1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <rect x="30" y="26" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    {/* Subtle wood grain lines */}
    <path d="M6 10H14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M22 20H30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M10 30H20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
  </svg>
)

export const ICON_MAP: Record<string, React.ReactNode> = {
  'FLOOR_ICON': <WoodFloorIcon />,
}
