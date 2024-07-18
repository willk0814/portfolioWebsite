'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion'

import { FaBriefcase } from 'react-icons/fa'
import { FaNoteSticky } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function SecondaryFullNav() {

    let pathname = usePathname() || '/'

    // SV boolean to determine which Navbar to show
    const [showMobile, setShowMobile] = useState(false)
    
    // SV to hold hovered state
    const [workHovered, setWorkHovered] = useState(false)
    const [notesHovered, setNotesHovered] = useState(false)
    const [contactHovered, setContactHovered] = useState(false)

    const containerVariants = {
        initial: { width: '59px' },
        hover: {
          width: '145px',
          originX: 0,
          boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)',
          transition: {
            when: 'beforeChildren'
          }
        },
        hover_lg: {
          width: '160px',
          originX: 0,
          boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)',
          transition: {
            when: 'beforeChildren'
        }}};

    const textVariants = {
        initial: { 
            opacity: 0,
            y: '2rem' 
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
            delay: 0.2
            }
        }
        };

  return (
    <div className='flex flex-row w-[95%] h-full justify-between items-center'>
            
        <Link
            className='text-3xl secondaryText'
            href={'/'}>Will Koenig
        </Link>
        

        <div className='flex flex-row space-x-3'>
            
            <AnimatePresence>
                <Link href='/work'>
                <motion.div      
                    onHoverStart={() => setWorkHovered(true)}
                    onHoverEnd={() => setWorkHovered(false)}
                    className='flex flex-row items-center justify-between px-[12px] py-2 rounded-lg bg-[#A2D0AC]'
                    variants={containerVariants}
                    animate={`${pathname.includes('/work') ? 'hover' : ''}`}
                    initial='initial'
                    whileHover='hover'>
                    <motion.div>
                        <FaBriefcase size={'35px'} color={'#121212'}/>
                    </motion.div>

                    {(workHovered || pathname.includes('/work')) && 
                        <motion.h1
                            className='text-xl font-bold secondaryText'
                            variants={textVariants}
                            initial='initial'
                            animate='animate'>
                            Work
                        </motion.h1>}
                </motion.div>
                </Link>
            </AnimatePresence>

            <AnimatePresence>
                <Link href='/notes'>
                <motion.div      
                    onHoverStart={() => setNotesHovered(true)}
                    onHoverEnd={() => setNotesHovered(false)}
                    className='flex flex-row items-center justify-between px-[12px] py-2 rounded-lg bg-[#A2D0AC]'
                    variants={containerVariants}
                    animate={(pathname.includes('/notes') || notesHovered) ? 'hover' : ''}
                    initial='initial'
                    // whileHover='hover'
                    >
                    <motion.div>
                        <FaNoteSticky size={'35px'} color={'#121212'}/>
                    </motion.div>

                    {(notesHovered || pathname.includes('/notes')) && 
                        <motion.h1
                        className='text-xl font-bold secondaryText'
                        variants={textVariants}
                        initial='initial'
                        animate='animate'>
                        Notes
                        </motion.h1>}
                </motion.div>
                </Link>
            </AnimatePresence>

            <AnimatePresence>
                <Link href='/contactMe'>
                <motion.div      
                    onHoverStart={() => setContactHovered(true)}
                    onHoverEnd={() => setContactHovered(false)}
                    className='flex flex-row items-center justify-between px-[12px] py-2 rounded-lg bg-[#A2D0AC]'
                    variants={containerVariants}
                    animate={(pathname === '/contactMe' || contactHovered) ? 'hover_lg' : ''}
                    initial='initial'
                    // whileHover='hover_lg'
                    >
                    <motion.div>
                        <MdAlternateEmail size={'35px'} color={'#121212'}/>
                    </motion.div>

                    {(contactHovered || pathname === '/contactMe') && 
                        <motion.h1
                        className='text-xl font-bold secondaryText'
                        variants={textVariants}
                        initial='initial'
                        animate='animate'>
                        Contact
                        </motion.h1>}
                </motion.div>
                </Link>
            </AnimatePresence>
            
        </div>
    </div>
  )
}
