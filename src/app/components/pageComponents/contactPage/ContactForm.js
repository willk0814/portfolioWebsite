'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'


export default function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        const email_data = {
            name: name,
            email: email,
            subject: subject,
            content: content
        } 

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Specify JSON content type
                },
                body: JSON.stringify({data: email_data}) // Convert object to JSON string
            });
    
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
            // Handle error appropriately
        }
    }

  return (
    <motion.div 
          variants={{
            initial: { opacity: 0, y: '5%' },
            animate: { opacity: 1, y: 0, 
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
              
              {/* Name Input */}
            <div className='flex flex-col w-full items-start space-y-1'>
              <h1 className='text-[#E8E8E8] text-xl'>Name:</h1>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder='Ronald'
                className='rounded-lg p-2 text-blue-600 w-full text-2xl bg-[#E8E8E8]' />
            </div>

            {/* Email Input */}
            <div className='flex flex-col w-full items-start space-y-1'>
              <h1 className='text-[#E8E8E8] text-xl'>Email:</h1>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='ronald@mcdonalds.com'
                className='rounded-lg p-2 text-blue-600 w-full text-2xl bg-[#E8E8E8]' />
            </div>

            {/* Subject Input */}
            <div className='flex flex-col w-full items-start justify-between'>
              <h1 className='text-[#E8E8E8] text-xl'>Subject:</h1>
              <input 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type='text'
                placeholder='Order'
                className='rounded-lg p-2 text-blue-600 w-full text-2xl bg-[#E8E8E8]' />
            </div>

            {/* Content */}
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
  )
}
