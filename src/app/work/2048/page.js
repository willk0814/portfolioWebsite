import React from 'react'

import { projectsData } from '@/app/assets/projectsData'
import ProjectInfoContainer from '@/app/components/pageComponents/workPage/projectPagesComponents/ProjectInfoContainer'

export default function page() {

  const PROJ_ID = 'project_8'
  const data = projectsData[PROJ_ID]

  return (
    <div>
      <ProjectInfoContainer projectData={data} />
    </div>
  )
}
