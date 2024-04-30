'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function SecondaryNavbar() {
  return (
    <div className='fixed left-0 w-full z-10 bg-[#E8E8E8]'>

        <div className='flex w-full items-center justify-center pt-3'>

            <div className='flex justify-between items-center w-[98%] px-2 border-b-2 border-blue-600 h-full mb-1'>

                <Link
                    href={'/'}
                    className='p-1'>
                    <h1 className='text-xl sm:text-3xl text-blue-600'>Will Koenig</h1>
                </Link>

                <div className='flex flex-row space-x-1'>
                    <motion.div
                        variants={{
                            initial: { background: '#E8E8E8' },
                            hover: { background: '#A1E5AB'}
                        }}
                        initial='initial'
                        whileHover='hover'
                        exit='initial'
                        className='rounded-lg flex'>
                        <Link
                            href={'/work'}
                            className='px-2 py-1'>
                            <h1 className='text-xl text-blue-600'>Work</h1>
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={{
                            initial: { background: '#E8E8E8' },
                            hover: { background: '#A1E5AB'}
                        }}
                        initial='initial'
                        whileHover='hover'
                        exit='initial'
                        className='rounded-lg flex'>
                        <Link
                            href={'/notes'}
                            className='px-2 py-1'>
                            <h1 className='text-xl text-blue-600'>Notes</h1>
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={{
                            initial: { background: '#E8E8E8' },
                            hover: { background: '#A1E5AB'}
                        }}
                        initial='initial'
                        whileHover='hover'
                        exit='initial'
                        className='rounded-lg flex'>
                        <Link
                            href={'/contactMe'}
                            className='px-2 py-1'>
                            <h1 className='text-xl text-blue-600'>Contact</h1>
                        </Link>
                    </motion.div>
                </div>

            </div>
        </div>
        
    </div>
  )
}