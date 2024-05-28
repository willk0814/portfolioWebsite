import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { FiHome } from "react-icons/fi";
import { FaBriefcase } from 'react-icons/fa'
import { FaNoteSticky } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function SecondaryMobileNav() {

    const containerVariants = {
        initial: {},
        hover: { boxShadow: '0 0 10px 5px rgba(38, 99, 235, 0.5)' },
        hover_lg: { boxShadow: '0 0 10px 5px rgba(38, 99, 235, 0.5)'}};

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
                initial='initial'
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
                            initial='initial'>
                                
                                <FiHome size={'35px'} color={'#2663eb'}/>
                                
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
                        initial='initial'>
                            <FaBriefcase size={'35px'} color={'#2663eb'}/>
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
                        initial='initial'>
                        
                            <FaNoteSticky size={'35px'} color={'#2663eb'}/>
                        
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
                            initial='initial'>
                            
                                <MdAlternateEmail size={'35px'} color={'#2663eb'}/>
                            
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>
             
    </div>
  )
}
