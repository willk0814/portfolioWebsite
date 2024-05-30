'use client'

import React, { useState } from 'react'

import { projectsData } from '../assets/projectsData'
import FilterButtons from '../components/pageComponents/workPage/FilterButtons'
import CollapsedProjectCard from '../components/pageComponents/workPage/CollapsedProjectCard'
import { motion } from 'framer-motion'

export default function page() {

  const [filterSettings, setFilterSettings] = useState({
    'fullStack': false,
    'ML': false,
    'webDev': false,
    'others': false
  })

  const handleSelectFilter = (filter_id) => {
    const newFilterSettings = {}

    if (filterSettings[filter_id]) {
      for (const key in filterSettings) {
        newFilterSettings[key] = false
      }
    } else {
      for (const key in filterSettings) {
        newFilterSettings[key] = key === filter_id
      }
    }
    setFilterSettings(newFilterSettings)
  }

  return (
    <div 
      className='w-full min-h-screen flex flex-col items-center justify-center bg-[#E8E8E8] pt-20'>
      
      <div className='flex flex-col items-start w-[95vw]'>
        {/* <FilterButtons 
          filterSettings={filterSettings} 
          selectFilter={handleSelectFilter}/> */}
        
        <motion.div 
          className='gridContainer'
          variants={{
            initial: { opacity: 0},
            animate: { opacity: 1,
              transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2
              }}
          }}
          initial='initial'
          animate='animate'
          exit='initial'>
          {Object.keys(projectsData).map((key, indx) => (
            <motion.div
              variants={{
                initial: { y: '10%', opacity: 0 },
                animate: { y: 0, opacity: 1,
                  transition: {
                    duration: 0.3
                  }},
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


