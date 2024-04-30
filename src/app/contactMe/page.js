'use client'
import React from 'react'
import { animate, motion } from 'framer-motion'

export default function page() {
  return (
    <div className='w-full min-h-screen flex flex-col py-20 items-center justify-start bg-[#E8E8E8]'>

        <motion.div 
          variants={{
            initial: { y: '5%' },
            animate: { y: 0, 
             transition: { duration: 0.6 }} 
          }}
          initial='initial'
          animate='animate'
          className='flex items-center flex-col bg-blue-600 rounded-lg p-4 w-[95vw] max-w-[750px] space-y-3 mt-10'>
          <div className='w-full flex justify-start'>
            <h1 className='text-4xl sm:text-6xl text-[#A1E5AB] mb-5 text-start font-bold'>Let's talk</h1>
          </div>

          <div className='flex flex-col w-full items-start space-y-1'>
            <h1 className='text-[#E8E8E8] text-xl'>Email:</h1>
            <input
              type='email'
              placeholder='mc@donalds.com'
              className='rounded-lg p-2 text-blue-600 w-full text-2xl bg-[#E8E8E8]' />
          </div>

          <div className='flex flex-col w-full items-start justify-between'>
            <h1 className='text-[#E8E8E8] text-xl'>Subject:</h1>
            <input 
              type='text'
              placeholder='Order'
              className='rounded-lg p-2 text-blue-600 w-full text-2xl bg-[#E8E8E8]' />
          </div>

          <div className='flex flex-col w-full space-y-1'>
            <h1 className='text-[#E8E8E8] text-xl'>Content:</h1>
            <textarea 
              placeholder='med 2 cheeseburgers meal, Diet Coke, apple pie'
              className='resize-none rounded-lg h-[60vh] max-h-[325px] bg-[#E8E8E8] text-xl text-blue-600 p-2'/>
          </div>
          
          <motion.button 
            className='bg-[#A1E5AB] rounded-lg flex justify-center w-fit p-6 px-10'
            whileHover={{
              scaleX: 1.2
            }}>
              <h1 className='text-blue-600 font-extrabold text-3xl'>Send</h1>
          </motion.button>
        </motion.div>
    </div>
  )
}
