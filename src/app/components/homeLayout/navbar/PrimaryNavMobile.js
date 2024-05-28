import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { FiHome } from "react-icons/fi";
import { FaBriefcase } from 'react-icons/fa'
import { FaNoteSticky } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function PrimaryNavMobile() {

    const containerVariants = {
        initial: {},
        hover: { boxShadow: '0 0 10px 5px rgba(38, 99, 235, 0.5)' },
        hover_lg: { boxShadow: '0 0 10px 5px rgba(38, 99, 235, 0.5)'}};

    let pathname = usePathname() || '/'
  return (
    <div className='flex flex-row space-x-4 w-[95%] h-full justify-center items-center'>
         
                <Link href='/'>
                <motion.div      
                    className='flex flex-row items-center justify-between px-[10px] py-2 rounded-lg bg-green-300'
                    variants={containerVariants}
                    animate={`${pathname === '/' ? 'hover' : ''}`}
                    initial='initial'>
                      
                        <FiHome size={'35px'} color={'#2663eb'}/>
                      
                </motion.div>
                </Link>
             

             
                <Link href='/work'>
                <motion.div      
                    className='flex flex-row items-center justify-between px-[12px] py-2 rounded-lg bg-green-300'
                    variants={containerVariants}
                    animate={`${pathname === '/work' ? 'hover' : ''}`}
                    initial='initial'>
                        <FaBriefcase size={'35px'} color={'#2663eb'}/>
                </motion.div>
                </Link>
             

             
                <Link href='/notes'>
                <motion.div      
                    className='flex flex-row items-center justify-between px-[12px] py-2 rounded-lg bg-green-300'
                    variants={containerVariants}
                    animate={`${pathname === '/notes' ? 'hover' : ''}`}
                    initial='initial'>
                      
                        <FaNoteSticky size={'35px'} color={'#2663eb'}/>
                      
                </motion.div>
                </Link>
             

             
                <Link href='/contactMe'>
                <motion.div      
                    className='flex flex-row items-center justify-between px-[12px] py-2 rounded-lg bg-green-300'
                    variants={containerVariants}
                    animate={`${pathname === '/contactMe' ? 'hover_lg' : ''}`}
                    initial='initial'>
                      
                        <MdAlternateEmail size={'35px'} color={'#2663eb'}/>
                      
                </motion.div>
                </Link>
             
    </div>
  )
}
