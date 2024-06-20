'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function page() {
  return (
    <div 
      className='w-[100vw] min-h-[70vh] flex flex-col items-center justify-start py-20 secondaryBg'>
        <motion.h1 
          className='text-7xl sm:text-8xl secondaryText'
          variants={{
            initial: { opacity: 0, y: '20%'},
            animate: { opacity: 1, y: 0,
              transition: { duration: 0.6 }
            }
          }}
          initial='initial'
          animate='animate'>Notes</motion.h1>

        <motion.p 
          className='secondaryText italic w-[95vw] max-w-[450px] text-lg text-center'
          variants={{
            initial: { opacity: 0, y: '20%'},
            animate: { opacity: 1, y: 0,
              transition: { duration: 0.6 }
            }
          }}
          initial='initial'
          animate='animate'>
            Right now there is nothing here.  I plan to fill this page with all kinds of things that I am interested in; programming, cooking, star wars fan fiction, New York Knicks basketball, and anything else that feels worth sharing to me.
          </motion.p>
    </div>
  )
}
