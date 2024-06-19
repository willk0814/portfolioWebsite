'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  
  return (
    <div className='flex items-center justify-center w-full h-[45vh] primaryBg py-10'>
        
        {/* Link to contact page */}
        <motion.div
          className='flex items-center justify-center py-4 w-[55%] h-[75%] rounded-full bg-[#A2D0AC] cursor-pointer'>
          <Link
              href='/contactMe'
              className='flex items-center justify-center bg-[#A2D0AC] cursor-pointer'>
                  <h1 className='text-2xl sm:text-4xl secondaryText'>Contact Me</h1>
          </Link>
        </motion.div>

        
    </div>
  )
}
