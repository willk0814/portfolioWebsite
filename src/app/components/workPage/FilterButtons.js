'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function FilterButtons({ filterSettings, selectFilter}) {
  return (
    <motion.div 
        variants={{
            initial:  { opacity: 0 },
            animate: { opacity: 1 ,
                transition: {
                    when: 'beforeChildren',
                    staggerChildren: 0.2
                }}
        }}
        initial= 'initial'
        animate='animate'
        className='flex flex-row space-x-2 w-[95vw] max-w-[500px]'>


            <motion.button
                variants={{
                    initial: { opacity: 0, y: '-20%'},
                    animate: { opacity: 1, y: 0,
                        transition: {
                            duration: 0.6
                        }},
                }}
                className={`${filterSettings['fullStack']? 'bg-blue-600 text-[#E8E8E8]' : 'bg-[#A1E5AB] text-black' } rounded-lg text-lg p-1 flex-1`}
                onClick={() => selectFilter('fullStack')}>
                Full Stack
            </motion.button>
            
            <motion.button
                variants={{
                    initial: { opacity: 0, y: '-20%'},
                    animate: { opacity: 1, y: 0,
                        transition: {
                            duration: 0.6
                        }}
                }}
                className={`${filterSettings['ML']? 'bg-blue-600 text-[#E8E8E8]' : 'bg-[#A1E5AB] text-black' } rounded-lg text-lg p-1 flex-1`}
                onClick={() => selectFilter('ML')}>
                ML/AI
            </motion.button>
            
            <motion.button
                variants={{
                    initial: { opacity: 0, y: '-20%'},
                    animate: { opacity: 1, y: 0,
                        transition: {
                            duration: 0.6
                        }}
                }}
                className={`${filterSettings['webDev']? 'bg-blue-600 text-[#E8E8E8]' : 'bg-[#A1E5AB] text-black' } rounded-lg text-lg p-1 flex-1`}
                onClick={() => selectFilter('webDev')}>
                Web
            </motion.button>
            
            <motion.button
                variants={{
                    initial: { opacity: 0, y: '-20%'},
                    animate: { opacity: 1, y: 0,
                        transition: {
                            duration: 0.6
                        }}
                }}
                className={`${filterSettings['others']? 'bg-blue-600 text-[#E8E8E8]' : 'bg-[#A1E5AB] text-black' } rounded-lg text-lg p-1 flex-1`}
                onClick={() => selectFilter('others')}>
                Other
            </motion.button>
        
    </motion.div>
  )
}
