import React from 'react'
import SkillsGrid from './SkillsGrid'

export default function SkillsScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] primaryBg py-4">
        <h1 className="text-7xl sm:text-8xl secondaryText text-center mb-3">Skills</h1>
        <SkillsGrid />
    </div>
  )
}
