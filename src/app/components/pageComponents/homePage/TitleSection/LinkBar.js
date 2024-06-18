'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'
// import KoenigResume from '@/'



export default function LinkBar() {
  return (
    <motion.div 
        className='hidden sm:flex flex-row space-x-2'
        variants={{
            initial: { opacity: 0, y: 30},
            animate: { opacity: 1, y: 0,
              transition: { duration: 0.7, delay: 0.3, staggerChildren: 0.1}
            }
          }}
          initial='initial'
          animate='animate'>
        <motion.a
            variants={{
                initial: { opacity: 0, y: 30},
                animate: { opacity: 1, y: 0,
                  transition: { duration: 0.7 }
                }
              }}
            href='https://github.com/willk0814' 
            target='_blank'
            rel='noreferrer'
            className='bg-[#A2D0AC] bg-opacity-50 rounded-lg'
            whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}>
              <motion.div
                whileHover={{ y: '-5px'}}
                className='p-2 px-4 rounded-lg'>
                <AiFillGithub size={45} className='primaryText'/>
            </motion.div>
        </motion.a>

        <motion.a
            variants={{
                initial: { opacity: 0, y: 30},
                animate: { opacity: 1, y: 0,
                  transition: { duration: 0.7}
                }
              }}
            href='https://linkedin.com/in/will-koenig' 
            target='_blank'
            rel='noreferrer'
            className='bg-[#A2D0AC] bg-opacity-50 rounded-lg'
            whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)'}}>
            <motion.div
                whileHover={{ y: '-5px'}}
                className='p-2 px-4 rounded-lg'>
                <FaLinkedinIn size={45} className='primaryText'/>
            </motion.div>
        </motion.a>

        <motion.a
            variants={{
                initial: { opacity: 0, y: 30},
                animate: { opacity: 1, y: 0,
                transition: { duration: 0.7}
                }
            }}
            href={'/KoenigResume.pdf'}
            target='_blank'
            rel='noreferrer'
            className='bg-[#A2D0AC] bg-opacity-50 rounded-lg'
            whileHover = {{ boxShadow: '0px 0px 8px rgb(255, 255, 255)', opacity: 1}}>
            <motion.div
                whileHover={{ y: '-5px'}}
                className='p-2 px-4 rounded-lg'>
                <HiOutlineDocumentText size={45} className='primaryText'/>
            </motion.div>
        </motion.a>
    </motion.div> 
  )
}
