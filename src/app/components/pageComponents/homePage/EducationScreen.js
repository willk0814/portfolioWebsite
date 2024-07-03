'use client'
import React, { useRef } from 'react'
import { educationData } from '../../../assets/educationData'
import { animate, motion, useInView } from 'framer-motion'

function EducationCard({ educationData }) {

    return (
        <div className='secondaryBg rounded-lg flex flex-col m-1 p-2 max-w-[450px] w-[95vw]'>
            <h1 className='text-2xl sm:text-3xl secondaryText'>{educationData.institution}</h1>
            <h1 className='sm:text-xl italic secondaryText'>{educationData.degree}</h1>
            <ul className='list-disc pl-5'>
                {educationData.bullets.map((txt, indx) => (
                    <li
                        key={indx}
                        className='sm:text-lg secondaryText'>{txt}</li>
                ))}
            </ul>
        </div>
    )}


export default function EducationScreen() {

    const ref = useRef(null)
    const inView = useInView(ref, {once: true})

  return (
    <div className="flex flex-col items-center justify-center w-[100vw] min-h-[65vh] primaryBg py-4">
        <h1 className="text-[4rem] sm:text-8xl primaryText mb-3">Education</h1>

        <motion.div 
            className='flex flex-wrap justify-center'
            variants={{
                initial: { opacity: 0, y: '10%'},
                animate: { opacity: 1, y: 0, 
                    transition: { staggerChildren: 0.2}
                }
            }}
            initial='initial'
            animate={inView ? 'animate' : 'initial'}>
            {Object.keys(educationData).map((key, indx) => (
                <motion.div
                    className='flex'
                    variants={{
                        initial: { opacity: 0, y: '10%'},
                        animate: { opacity: 1, y: 0 }
                    }}>
                    <EducationCard 
                        key={indx}
                        educationData={educationData[key]} />
                </motion.div>
            ))}
            <div ref={ref}></div>
        </motion.div>
    </div>
  )
}
