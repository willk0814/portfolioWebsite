'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function page() {
  
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(`Sending email with: \n Email: ${email} \n Subject: ${subject} \n Content: ${content}`)

    try {
      
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  return (
    
    <div 
      className='w-full min-h-screen flex flex-col py-20 items-center justify-start bg-[#E8E8E8]'>

        <motion.div 
          variants={{
            initial: { y: '5%' },
            animate: { y: 0, 
            transition: { duration: 0.6 }} 
          }}
          initial='initial'
          animate='animate'
          className='flex items-center flex-col bg-blue-600 rounded-lg p-4 w-[95vw] max-w-[750px]  mt-10'>
          <div className='w-full flex justify-start'>
            <h1 className='text-4xl sm:text-6xl text-[#A1E5AB] mb-5 text-start font-bold'>Let's talk</h1>
          </div>
          <form
            className='flex flex-col w-full items-center space-y-3'
            onSubmit={handleSubmit}>
            <div className='flex flex-col w-full items-start space-y-1'>
              <h1 className='text-[#E8E8E8] text-xl'>Email:</h1>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='mc@donalds.com'
                className='rounded-lg p-2 text-blue-600 w-full text-2xl bg-[#E8E8E8]' />
            </div>

            <div className='flex flex-col w-full items-start justify-between'>
              <h1 className='text-[#E8E8E8] text-xl'>Subject:</h1>
              <input 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type='text'
                placeholder='Order'
                className='rounded-lg p-2 text-blue-600 w-full text-2xl bg-[#E8E8E8]' />
            </div>

            <div className='flex flex-col w-full space-y-1'>
              <h1 className='text-[#E8E8E8] text-xl'>Content:</h1>
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='med 2 cheeseburgers meal, Diet Coke, apple pie'
                className='resize-none rounded-lg h-[60vh] max-h-[325px] bg-[#E8E8E8] text-xl text-blue-600 p-2'/>
            </div>
            
            <motion.button 
              type="submit"
              className='bg-[#A1E5AB] rounded-lg flex justify-center w-fit p-6 px-10'
              whileHover={{
                scaleX: 1.2
              }}>
                <h1 className='text-blue-600 font-extrabold text-3xl'>Send</h1>
            </motion.button>
          </form>
        </motion.div>
    </div>

  )
}
