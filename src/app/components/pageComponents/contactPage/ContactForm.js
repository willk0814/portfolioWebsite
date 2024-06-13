'use client'

import React, { useState } from 'react'
import { useForm, submitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { sendEmail } from '@/app/_actions'
import { motion } from 'framer-motion'
import { Result } from 'postcss'

export const FormDataSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email(2, 'Please enter a valid email'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 chars.'),
})


export default function ContactForm() {

  // SV to toggle when a message is successfully sent
  const [emailSent, setEmailSent] = useState(false)
  const [showError, setShowError] = useState(false)

  // define react hook forms functions
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(FormDataSchema)
  })

  // define a function to process the form
  const processForm = async (data) => {
    
    // send the email and store the response
    const response = await sendEmail(data)

    // log the result
    console.log('Email Req Response: ', response)

    if (!response.success){
      console.log('Something went wrong')
    }

    reset()
    setEmailSent(response.success)

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
          className='flex items-center flex-col primaryBg rounded-lg p-4 w-[95vw] max-w-[750px]  mt-10'>
          <div className='w-full flex justify-between'>
            <h1 className='text-4xl sm:text-6xl text-[#A2D0AC] mb-5 text-start font-bold'>Let's talk</h1>
          </div>
          
          <form
            className='flex flex-col w-full items-center space-y-3'
            onSubmit={handleSubmit(processForm)}
            noValidate>
              
              {/* Name Input */}
            <div className='flex flex-col w-full items-start space-y-1'>
              
              <div className='flex flex-row justify-between w-full'>
                <h1 className='primaryText text-xl'>Name:</h1>
                {errors.name?.message &&
                    <p className='text-md text-red-400'>{errors.name.message}</p>}
              </div>
              
              <input
                placeholder='Ronald'
                className='rounded-lg p-2 secondaryText w-full text-2xl secondaryBg'
                {...register('name')} />
            </div>

            {/* Email Input */}
            <div className='flex flex-col w-full items-start space-y-1'>
              
              <div className='flex flex-row justify-between w-full'>
                <h1 className='primaryText text-xl'>Email:</h1>
                {errors.email?.message &&
                    <p className='text-md text-red-400'>{errors.email.message}</p>}
              </div>
              
              <input
                placeholder='ronald@mcdonalds.com'
                className='rounded-lg p-2 secondaryText w-full text-2xl secondaryBg' 
                {...register('email')}/>
            </div>

            {/* Subject Input */}
            <div className='flex flex-col w-full items-start justify-between'>
            
              <div className='flex flex-row justify-between w-full'>
                  <h1 className='primaryText text-xl'>Subject:</h1>
                  {errors.subject?.message &&
                      <p className='text-md text-red-400'>{errors.subject.message}</p>}
              </div>
            
              <input 
                placeholder='Order'
                className='rounded-lg p-2 secondaryText w-full text-2xl secondaryBg'
                {...register('subject')} />
            </div>

            {/* Content */}
            <div className='flex flex-col w-full space-y-1'>
              
              <div className='flex flex-row justify-between w-full'>
                <h1 className='primaryText text-xl'>Message:</h1>
                {errors.message?.message &&
                    <p className='text-md text-red-400'>{errors.message.message}</p>}
              </div>
              
              <textarea 
                placeholder='med 2 cheeseburgers meal, Diet Coke, apple pie'
                className='resize-none rounded-lg h-[60vh] max-h-[325px] secondaryBg text-xl secondaryText p-2'
                {...register('message')} />
            </div>
            
            <motion.button 
              className='bg-[#A2D0AC] rounded-lg flex justify-center w-fit p-6 px-10'
              whileHover={{
                scaleX: 1.2,
              }}>
                <h1 className='secondaryText font-extrabold text-3xl'>Send</h1>
            </motion.button>
          </form>
        </motion.div>
  )
}
