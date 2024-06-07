import React from 'react'
import { projectsData } from '../../../../assets/projectsData'
import HomeTechnologyBar from './HomeTechnnologyBar'

function ProjectCard ({ projectData }) {
  return (
    <div className='flex flex-col justify-between bg-[#E8E8E8] rounded-lg p-2 h-[250px] min-w-[300px]'>
      <h1 className='secondaryText text-2xl'>{projectData.title}</h1>
      
      <div>
        <HomeTechnologyBar stack={projectData.stack} full={false} />
        <h1 className='secondaryText'>
          {projectData.content.length > 60 ? 
            projectData.content.slice(0, 60) + '...' : projectData.content}
      </h1>
     </div>
    </div>
  )
}


export default function ProjectSection() {
  return (
    <div className="flex flex-col items-center justify-center w-screen primaryBg py-10">
        <h1 className="text-7xl sm:text-8xl primaryText text-center mb-5">Projects</h1>

        <div className='w-[95vw] flex flex-row space-x-2 overflow-x-scroll pb-3 scroll-container'>
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
