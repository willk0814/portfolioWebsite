import React from 'react'
import { projectsData } from '@/app/assets/projectsData'
import TechnologyBar from './TechnnologyBar'

function ProjectCard ({ projectData }) {
  return (
    <div className='flex flex-col justify-between bg-white rounded-lg p-2 h-[225px] min-w-[300px]'>
      <h1 className='text-blue-600 text-2xl'>{projectData.title}</h1>
      
      <div>
        <TechnologyBar stack={projectData.stack} full={false} />
        <h1 className='text-blue-600'>
          {projectData.content.length > 90 ? 
            projectData.content.slice(0, 90) + '...' : projectData.content}
      </h1>
     </div>
    </div>
  )
}


export default function ProjectSection() {
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-blue-600 py-10">
        <h1 className="text-7xl sm:text-8xl text-white text-center mb-5">Projects</h1>

        <div className='w-[95vw] flex flex-row space-x-2 overflow-x-scroll'>
          {Object.keys(projectsData).map((key, indx) => {
            if (projectsData[key].status === 'working') {
              return (
                <ProjectCard
                  key={indx}
                  projectData={projectsData[key]} />
              )
            } else {
              return 
              (
              <></>
            )}
          })}
        </div>
        
    </div>
  )
}
