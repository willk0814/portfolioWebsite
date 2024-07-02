import React from 'react'

import { projectsData } from '@/app/assets/projectsData'
import ProjectInfoContainer from '@/app/components/pageComponents/workPage/projectPagesComponents/ProjectInfoContainer'

export default function page() {

  const PROJ_ID = 'algoVisualizer'
  const data = projectsData[PROJ_ID]

  return (
    <div>
      <ProjectInfoContainer projectData={data}>
      <div className='flex flex-col space-y-3'>
          
          <div className='flex flex-col space-y-1'>
            <h1 className='text-3xl secondaryText'>Description</h1>
            <div className='w-full h-[3px] rounded-full primaryBg'></div>
            <h1 className='text-md secondaryText font-semibold'>Algorithms are an essential part of computer science and of landing a software engineering job.  Too often when we are taught (or are teaching ourselves) algorithms we focus on the implementation in order to understand some of the more logical choices made.  I think that this is backwards and we would all be best served if we focused on the logic and philosophy behind an algorithm before diving into the implementation.  This project is meant to illustrate the 'choices' taken by different algorithms as they accomplish their goals.  When we understand these choices it becomes much easier to understand how to implement these algorithms.</h1>
          </div>
          
          <div className='flex flex-col space-y-1'>
            <h1 className='text-3xl secondaryText'>The Project</h1>
            <div className='w-full h-[3px] rounded-full primaryBg'></div>
            <h1 className='text-md secondaryText font-semibold'>I built this project completely in JavaScript using React.JS, Next.JS, and TailwindCSS.  This project allows the user to visualize the decisions made by a number of popular sorting and pathfinding algorithms.  Hopefully by witnessing how these algorithms behave it becomes easier for you to make sense of their implementation.</h1>
          </div>

        </div>
      </ProjectInfoContainer>
    </div>
  )
}
