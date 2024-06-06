'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { FaArrowRight } from "react-icons/fa";


import Link from 'next/link'

export default function SecondaryFooter() {

    const [hoverWork, setHoverWork] = useState(false)
    const [hoverNotes, setHoverNotes] = useState(false)
    const [hoverContact, setHoverContact] = useState(false)

    const [hoverHome, setHoverHome] = useState(false)

  return (
    // Footer Container
    <div className='w-screen min-h-[30vh] flex items-end justify-center secondaryBg p-6'>

        {/* Blue footer */}
        <div className='flex flex-row justify-between items-center w-[95vw] max-w-[1000px] primaryBg h-full rounded-lg p-3'>

            <div className='flex flex-col justify-between space-y-3 h-full'>
                {/* Page Links */}
                <div className='flex flex-col space-y-1'>
                    
                    <Link 
                        className='flex flex-row space-x-1 items-center'
                        href='/work'
                        onMouseEnter={() => setHoverWork(true)}
                        onMouseLeave={() => setHoverWork(false)}>
                        <h1 className='primaryText text-xl'>Work</h1>
                        <motion.div
                            variants={{
                                initial: { x: 0 },
                                hover: { x: 5 }
                            }}
                            initial='initial'
                            animate={hoverWork ? 'hover' : 'initial'}>
                            <FaArrowRight className='primaryText' size={20} />
                        </motion.div>
                    </Link>

                    <Link 
                        className='flex flex-row space-x-1 items-center'
                        href='/notes'
                        onMouseEnter={() => setHoverNotes(true)}
                        onMouseLeave={() => setHoverNotes(false)}>
                        <h1 className='primaryText text-xl'>Notes</h1>
                        <motion.div
                            variants={{
                                initial: { x: 0 },
                                hover: { x: 5 }
                            }}
                            initial='initial'
                            animate={hoverNotes ? 'hover' : 'initial'}>
                            <FaArrowRight className='primaryText' size={20} />
                        </motion.div>
                    </Link>
                    <Link
                        className='flex flex-row space-x-1 items-center'
                        href='/contactMe'
                        onMouseEnter={() => setHoverContact(true)}
                        onMouseLeave={() => setHoverContact(false)}>
                        <h1 className='text-xl primaryText'>Contact</h1>
                        <motion.div
                            variants={{
                                initial: { x: 0 },
                                hover: { x: 5 }
                            }}
                            initial='initial'
                            animate={hoverContact ? 'hover' : 'initial'}>
                            <FaArrowRight className='primaryText' size={20} />
                        </motion.div>
                    </Link>
                </div>

                {/* Social Links */}
                <div className='flex flex-row space-x-3'>
                    <motion.a
                        href='https://github.com/willk0814' 
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ y: -7}}>
                        <AiFillGithub className='primaryText' size={35}/>
                    </motion.a>

                    <motion.a
                        href='https://linkedin.com/in/will-koenig' 
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ y: -7}}>
                        <FaLinkedinIn className='primaryText' size={35}/>
                    </motion.a>

                    <motion.a
                        href={'/KoenigResume.pdf'}
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ y: -7}}>
                        <HiOutlineDocumentText className='primaryText' size={35}/>
                    </motion.a>
                </div>

            </div>

            <div 
                className='flex'
                onMouseEnter={() => setHoverHome(true)}
                onMouseLeave={() => setHoverHome(false)}>
                <Link 
                    className='flex flex-col space-y-1 items-start'
                    href='/'>
                        <h1 className='primaryText text-2xl text-end'>Will Koenig</h1>
                        <motion.div
                            variants={{
                                initial: { width: 0,
                                    transition: {
                                        duration: 0.6
                                    } },
                                hover: { width: '100%',
                                    transition: {
                                        duration: 0.6
                                    }}
                            }}
                            initial='initial'
                            animate={hoverHome ? 'hover' : 'initial'}
                            exit='initial'
                            className='secondaryBg h-[3px] rounded-lg'></motion.div>
                </Link>
            </div>
        </div>
        
    </div>
  )
}
