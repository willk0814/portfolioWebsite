import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { FiHome } from "react-icons/fi";
import { FaBriefcase } from 'react-icons/fa'
import { FaNoteSticky } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function SecondaryMobileNav() {

    const [initialRender, setInitialRender] = useState(true)

    useEffect(() => {
        setInitialRender(false)
    }, [])

    const containerVariants = {
        initial: {}, 
        hover: { boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)' },
        hover_lg: { boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)' }};

    let pathname = usePathname() || '/'
  return (
    <div className='flex w-[95%] h-full'>

            <motion.div
                variants={{
                    initial: {opacity: 0},
                    animate: { opacity: 1, 
                        transition: { when: 'beforeChildren', staggerChildren: 0.1}
                    }
                }}
                initial={initialRender? 'initial' : 'animate'}
                animate='animate'
                className='flex flex-row w-full space-x-4 justify-center items-center'>
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: '-150%'},
                        animate: { opacity: 1, y: 0 }
                    }}>
                    <Link href='/'>
                        <motion.div      
                            className='flex flex-row items-center justify-between px-[10px] py-2 rounded-lg bg-green-300'
                            variants={containerVariants}
                            animate={`${pathname === '/' ? 'hover' : ''}`}
                            initial='initial'
                            whileHover={{ boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)' }}>
                                
                                <FiHome className='secondaryText' size={'35px'} />
                                
                        </motion.div>
                    </Link>
                </motion.div>
             

                <motion.div
                    variants={{
                        initial: { opacity: 0, y: '-150%'},
                        animate: { opacity: 1, y: 0 }
                    }}>
                    <Link href='/work'>
                    <motion.div      
                        className='flex flex-row items-center justify-between px-[12px] py-2 rounded-lg bg-green-300'
                        variants={containerVariants}
                        animate={`${pathname === '/work' ? 'hover' : ''}`}
                        initial='initial'
                        whileHover={{ boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)' }}>
                            <FaBriefcase className='secondaryText' size={'35px'} />
                    </motion.div>
                    </Link>
                </motion.div>
             

                
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: '-150%'},
                        animate: { opacity: 1, y: 0 }
                    }}>
                    <Link href='/notes'>
                    <motion.div      
                        className='flex flex-row items-center justify-between px-[12px] py-2 rounded-lg bg-green-300'
                        variants={containerVariants}
                        animate={`${pathname === '/notes' ? 'hover' : ''}`}
                        initial='initial'
                        whileHover={{ boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)' }}>
                        
                            <FaNoteSticky className='secondaryText' size={'35px'} />
                        
                    </motion.div>
                    </Link>
                </motion.div>
             

                <motion.div
                    variants={{
                        initial: { opacity: 0, y: '-150%'},
                        animate: { opacity: 1, y: 0 }
                    }}>
                    <Link href='/contactMe'>
                        <motion.div      
                            className='flex flex-row items-center justify-between px-[12px] py-2 rounded-lg bg-green-300'
                            variants={containerVariants}
                            animate={`${pathname === '/contactMe' ? 'hover_lg' : ''}`}
                            initial='initial'
                            whileHover={{ boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)' }}>
                            
                                <MdAlternateEmail className='secondaryText' size={'35px'} />
                            
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>
             
    </div>
  )
}
