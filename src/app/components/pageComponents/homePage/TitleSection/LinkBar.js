'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'
// import KoenigResume from '@/'



export default function LinkBar() {
  return (
    <div className='hidden sm:flex flex-row space-x-2'>
        <motion.a
            href='https://github.com/willk0814' 
            target='_blank'
            rel='noreferrer'
            className='bg-green-500 bg-opacity-40 rounded-lg p-2 px-4'
            whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}>
            <AiFillGithub size={45} className='primaryText'/>
        </motion.a>

        <motion.a
            href='https://linkedin.com/in/will-koenig' 
            target='_blank'
            rel='noreferrer'
            className='bg-green-500 bg-opacity-40 rounded-lg p-2 px-4'
            whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}>
            <FaLinkedinIn size={45} className='primaryText'/>
        </motion.a>

        <motion.a
            href={'/KoenigResume.pdf'}
            target='_blank'
            rel='noreferrer'
            className='bg-green-500 bg-opacity-40 rounded-lg p-2 px-4'
            whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)', opacity: 1}}>
            <HiOutlineDocumentText size={45} className='primaryText'/>
        </motion.a>
    </div> 
  )
}
