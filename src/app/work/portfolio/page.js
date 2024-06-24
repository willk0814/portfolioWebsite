import React from 'react'

import { projectsData } from '@/app/assets/projectsData'
import ProjectInfoContainer from '@/app/components/pageComponents/workPage/projectPagesComponents/ProjectInfoContainer'

export default function page() {

  const PROJ_ID = 'portfolioWebsite'
  const data = projectsData[PROJ_ID]

  return (
    <div>
      <ProjectInfoContainer projectData={data} />
    </div>
  )
}
