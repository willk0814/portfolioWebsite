'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { FaArrowRight } from "react-icons/fa";


import Link from 'next/link'

export default function Footer() {

    const [hoverWork, setHoverWork] = useState(false)
    const [hoverNotes, setHoverNotes] = useState(false)
    const [hoverContact, setHoverContact] = useState(false)

  return (
    // Footer Container
    <div className='w-screen h-[30vh] flex justify-center bg-blue-600 p-6'>

        {/* Blue footer */}
        <div className='flex flex-row justify-between items-center w-[95vw] max-w-[1000px] bg-[#E8E8E8] h-full rounded-lg p-3'>

            <div className='flex flex-col justify-between h-full'>
                {/* Page Links */}
                <div className='flex flex-col space-y-1'>
                    
                    <Link 
                        className='flex flex-row space-x-1 items-center'
                        href='/work'
                        onMouseEnter={() => setHoverWork(true)}
                        onMouseLeave={() => setHoverWork(false)}>
                        <h1 className='text-blue-600 text-xl'>Work</h1>
                        <motion.div
                            variants={{
                                initial: { x: 0 },
                                hover: { x: 5 }
                            }}
                            initial='initial'
                            animate={hoverWork ? 'hover' : 'initial'}>
                            <FaArrowRight size={20} color='#2663eb'/>
                        </motion.div>
                    </Link>

                    <Link 
                        className='flex flex-row space-x-1 items-center'
                        href='/notes'
                        onMouseEnter={() => setHoverNotes(true)}
                        onMouseLeave={() => setHoverNotes(false)}>
                        <h1 className='text-blue-600 text-xl'>Notes</h1>
                        <motion.div
                            variants={{
                                initial: { x: 0 },
                                hover: { x: 5 }
                            }}
                            initial='initial'
                            animate={hoverNotes ? 'hover' : 'initial'}>
                            <FaArrowRight size={20} color='#2663eb'/>
                        </motion.div>
                    </Link>
                    <Link
                        className='flex flex-row space-x-1 items-center'
                        href='/contactMe'
                        onMouseEnter={() => setHoverContact(true)}
                        onMouseLeave={() => setHoverContact(false)}>
                        <h1 className='text-xl text-blue-600'>Contact</h1>
                        <motion.div
                            variants={{
                                initial: { x: 0 },
                                hover: { x: 5 }
                            }}
                            initial='initial'
                            animate={hoverContact ? 'hover' : 'initial'}>
                            <FaArrowRight size={20} color='#2663eb'/>
                        </motion.div>
                    </Link>
                </div>

                {/* Social Links */}
                <div className='flex flex-row space-x-3'>
                    <a
                        href='https://github.com/willk0814' 
                        target='_blank'
                        rel='noreferrer'>
                        <AiFillGithub size={35} color='#2663eb'/>
                    </a>

                    <a
                        href='https://linkedin.com/in/will-koenig' 
                        target='_blank'
                        rel='noreferrer'>
                        <FaLinkedinIn size={35} color='#2663eb'/>
                    </a>

                    <a
                        href=''>
                        <HiOutlineDocumentText size={35} color='#2663eb'/>
                    </a>
                </div>

            </div>

            <div className='flex'>
                <Link 
                    className='flex flex-row space-x-1 items-center'
                    href='/'>
                        <h1 className='text-blue-600 text-2xl text-end'>Will Koenig</h1>
                </Link>
            </div>
        </div>
        
    </div>
  )
}
