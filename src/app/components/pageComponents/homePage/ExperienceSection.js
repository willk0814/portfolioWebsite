'use client'

import React, { useState, useRef } from 'react'
import { experienceData } from '../../../assets/experienceData'
import { animate, motion, useInView } from 'framer-motion'

import { FaArrowCircleDown } from 'react-icons/fa'


function ExperienceCard({ exp_id, experienceData, expanded, handleExpand }) {

  const iconVariants = {
      initial: {},
      expanded: {
          rotate: 180,
          transition: {
              duration: 0.4
          }
      }
  }

  return (
    <div 
        className='secondaryBg rounded-lg p-2 max-w-[800px] flex flex-col w-[95vw] m-1'>
        <div className='flex flex-row justify-between'>
            <h1 className='text-xl sm:text-4xl secondaryText'>{experienceData.company}</h1>
            <motion.div
                className='flex w-fit h-fit cursor-pointer'
                variants={iconVariants}
                initial='initial'
                animate={expanded ? 'expanded' : ''}
                onClick={() => handleExpand(exp_id)}>
                <FaArrowCircleDown size={35} className='secondaryText'/>
            </motion.div>
        </div>
        <h1 className='sm:text-xl italic secondaryText'>{experienceData.position}</h1>

        <motion.ul 
            variants={{
              initial: { height: 0,
                transition: {
                  duration: 0.2,
                  when: 'afterChildren'
                }},
              open: { 
                height: 'auto',
                transition: {
                  duration: 0.6,
                  when: 'beforeChildren',
                  staggerChildren: 0.2,
                }}
            }}
            initial='initial'
            animate={expanded ? 'open' : 'initial'}
            exit='initial'
            className='list-disc pl-5'>
              {experienceData.bullets.map((text, ind) => (
                  <motion.li 
                      key={ind}
                      variants={{
                        initial: { x: '-20%', opacity: 0 },
                        open: { x: 0, opacity: 1}
                      }}
                      className='sm:text-lg secondaryText'>{text}</motion.li>
              ))}
        </motion.ul>
    </div>
  )
  }

export default function ExperienceSection() {

  const [expandedState, setExpandedState] = useState({
    exp_1: false,
    exp_2: false,
    exp_3: false
  })

  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const handleExpand = (exp_id) => {
    const newExpandedState = {}

    if (expandedState[exp_id]){
      for (const key in expandedState) {
        newExpandedState[key] = false
      }  
    } else {
      for (const key in expandedState) {
        newExpandedState[key] = key === exp_id
      }
    }
    setExpandedState(newExpandedState)
  }

  return (
    <div className="flex flex-col items-center justify-start w-[100vw] primaryBg py-10">
        <h1 className="text-[3.5rem] sm:text-8xl primaryText mb-3">Experience</h1>

        <motion.div 
          className='flex flex-col justify-center'
          variants={{
            initial: { opacity: 0, x: '-10%' },
            animate: { opacity: 1, x: '0',
              transition: { staggerChildren: 0.2 }
             }
          }}
          initial='initial'
          animate={inView ? 'animate': 'initial'}>
            {Object.keys(experienceData).map((key, indx) => (
              <motion.div
                className='flex'
                variants={{
                  initial: { opacity: 0, x: '-10%' },
                  animate: { opacity: 1, x: '0' }
                }}>
                <ExperienceCard
                  key={indx}
                  exp_id={key}
                  experienceData={experienceData[key]}
                  expanded={expandedState[key]}
                  handleExpand={handleExpand} />
              </motion.div>
              ))}
            <div ref={ref}></div>
        </motion.div>
    </div>
  )
}
