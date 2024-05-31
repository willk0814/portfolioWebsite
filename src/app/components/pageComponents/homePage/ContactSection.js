'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  
  const [copied, setCopied] = useState(false)
  
  const email = "wkoenig0814@gmail.com"

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 4000)
    } catch (err) {
      console.log("Failed to copy text: ", err)
    };
  }
  
  return (
    <div className='flex items-center justify-center w-full h-[45vh] bg-blue-600'>
        
        {/* Link to contact page */}
        {/* <motion.div
          className='flex items-center justify-center py-4 w-[55%] h-[75%] rounded-full bg-[#A1E5AB] cursor-pointer'>
          <Link
              href='/contactMe'
              className='flex items-center justify-center bg-[#A1E5AB] cursor-pointer'>
                  <h1 className='text-2xl sm:text-4xl text-blue-600'>Contact Me</h1>
          </Link>
        </motion.div> */}

        {/* Button to copy email address */}
        <motion.button
          className='flex items-center justify-center py-4 w-[55%] h-[75%] rounded-full bg-[#A1E5AB] cursor-pointer'
          onClick={handleCopyClick}>
            <h1 className='text-2xl sm:text-4xl text-blue-600'>{!copied ? 'Copy Email' : 'Email Copied'}</h1>
        </motion.button>
    </div>
  )
}
