'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'



export default function LinkBar() {
  return (
    <div className='flex flex-row space-x-2'>
        <motion.a
            href='https://github.com/willk0814' 
            target='_blank'
            rel='noreferrer'
            className='bg-green-400 bg-opacity-40 rounded-lg p-2 px-4'
            whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}>
            <AiFillGithub size={45} color='white'/>
        </motion.a>

        <motion.a
            href='https://linkedin.com/in/will-koenig' 
            target='_blank'
            rel='noreferrer'
            className='bg-green-400 bg-opacity-40 rounded-lg p-2 px-4'
            whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}>
            <FaLinkedinIn size={45} color='white'/>
        </motion.a>

        <motion.a
            href=''
            className='bg-green-400 bg-opacity-40 rounded-lg p-2 px-4'
            whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}>
            <HiOutlineDocumentText size={45} color='white'/>
        </motion.a>
    </div>
  )
}
