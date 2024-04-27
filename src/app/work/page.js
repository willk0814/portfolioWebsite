'use client'

import React from 'react'

import { projectsData } from '../assets/projectsData'
import FilterButtons from '../components/workPage/FilterButtons'
import CollapsedProjectCard from '../components/workPage/CollapsedProjectCard'
import { motion } from 'framer-motion'

export default function page() {
  return (
    <div 
      className='w-full min-h-screen flex flex-col items-center justify-center bg-[#E8E8E8] pt-20'>
      
      <div className='flex flex-col items-center justify-center'>
        <FilterButtons />
        
        <motion.div 
          className='flex flex-wrap items-center justify-center'
          variants={{
            initial: { opacity: 0},
            animate: { opacity: 1,
              transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
              }}
          }}
          initial='initial'
          animate='animate'
          exit='initial'>
          {Object.keys(projectsData).map((key, indx) => (
            <motion.div
              variants={{
                initial: { y: '20%', opacity: 0 },
                animate: { y: 0, opacity: 1},
              }}
              key={indx}>
              <CollapsedProjectCard
                projectData={projectsData[key]} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}


