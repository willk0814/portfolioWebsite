'use client'
import React from 'react'
import LinkBar from './LinkBar'
import { motion } from 'framer-motion'

export default function TitleScreen() {
  return (
    <div className="flex flex-col w-[100vw] items-center justify-center min-h-[45vh] primaryBg pt-20 p-10">
      
      <div className='flex flex-col items-start space-y-2'>
        <h1 className="text-[1.5rem] sm:text-3xl primaryText text-start">Hi! My name is</h1>
        <h1 className="text-[4.5rem] sm:text-8xl primaryText text-start">Will Koenig</h1>
        <motion.h1 
          className="text-[2.5rem] sm:text-6xl text-[#A2D0AC] text-start pb-2"
          variants={{
            initial: { opacity: 0, y: 30},
            animate: { opacity: 1, y: 0,
              transition: { duration: 0.7}
            }
          }}
          initial='initial'
          animate='animate'>
          I am a Software Engineer
        </motion.h1>
        
        <LinkBar />
      </div>
    </div>
  )
}
