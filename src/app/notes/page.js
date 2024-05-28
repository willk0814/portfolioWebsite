'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function page() {
  return (
    <div 
      className='w-full min-h-[70vh] flex flex-col items-center justify-start py-20 bg-[#E8E8E8]'>
        <motion.h1 
          className='text-7xl sm:text-8xl text-blue-600'
          variants={{
            initial: { opacity: 0, y: '20%'},
            animate: { opacity: 1, y: 0,
              transition: { duration: 0.6 }
            }
          }}
          initial='initial'
          animate='animate'>Notes</motion.h1>

        <motion.p 
          className='text-blue-600 italic w-[95vw] max-w-[450px] text-lg text-center'
          variants={{
            initial: { opacity: 0, y: '20%'},
            animate: { opacity: 1, y: 0,
              transition: { duration: 0.6 }
            }
          }}
          initial='initial'
          animate='animate'>Right now there is nothing here, but I plan to document my continuing learning, projects, and just general thoughts that feel worth sharing.</motion.p>
    </div>
  )
}
