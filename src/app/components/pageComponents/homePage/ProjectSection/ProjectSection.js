'use client'

import React from 'react'
import { projectsData } from '../../../../assets/projectsData'
import HomeTechnologyBar from './HomeTechnnologyBar'
import { animate, motion } from 'framer-motion'

function ProjectCard ({ projectData }) {
  return (
    <motion.div 
      className='flex flex-col justify-between bg-[#E8E8E8] rounded-lg p-2 h-[350px] min-w-[300px] mx-[0.4rem]'
      variants={{
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0,
          transition: { duration: 0.9 }
        }

      }}>
      <h1 className='secondaryText text-2xl'>{projectData.title}</h1>
      
      <div>
        <HomeTechnologyBar stack={projectData.stack} full={false} />
        <h1 className='secondaryText'>
          {projectData.content.length > 60 ? 
            projectData.content.slice(0, 60) + '...' : projectData.content}
      </h1>
     </div>
    </motion.div>
  )
}


export default function ProjectSection() {
  return (
    <div className="flex flex-col items-center justify-center w-screen primaryBg py-10">
        <motion.div 
          className='w-[95vw] max-w-[1050px] flex flex-row overflow-y-hidden overflow-x-scroll pb-3 scroll-container rounded-md h-fit primaryBg'
          variants={{
            initial: { opacity: 0, },
            animate: { opacity: 1, 
              transition: { staggerChildren: 0.2, delay: 0.4 }
            }
          }}
          initial='initial'
          animate='animate'>
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
        </motion.div>
        
    </div>
  )
}
