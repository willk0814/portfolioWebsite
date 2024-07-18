import React from 'react'
import Link from 'next/link'
import { motion, useCycle, AnimatePresence, MotionConfig } from 'framer-motion'

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'

export default function SecondaryMobileNav() {

    const [showMobile, toggleMobileNav] = useCycle(false, true)

  return (
    <div className='flex w-full h-full justify-between items-center px-4'>

        <Link
            href={'/'}>
            <h1 className='text-[#121212] text-2xl'>Will Koenig</h1>
        </Link>


        <motion.button
            className='flex flex-col space-y-2 primaryBg p-2 rounded-md border-[#A1E5AB] border-2 z-20'
            onClick={() => toggleMobileNav()}
            animate={showMobile ? 'open' : 'closed'}>
            <motion.span 
                variants={{
                    open: { rotate: 45, y: 11 },
                    closed: { rotate: 0, y: 0 }
                }} 
                className='w-6 h-[3px] secondaryBg rounded-lg'></motion.span>
            <motion.span 
                variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 }
                }}
                className='w-6 h-[3px] secondaryBg rounded-lg'></motion.span>
            <motion.span 
                variants = {{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -11 }
                }}
                className='w-6 h-[3px] secondaryBg rounded-lg'></motion.span>
        </motion.button>

        <AnimatePresence>
            {showMobile && 
            <MotionConfig
                transition = {{ type: 'spring', bounce: 0.2 }}>
                <motion.div
                    key = 'mobile-nav'
                    variants = {{
                        open: {
                            x: 0,
                            transition: { 
                                when: 'beforeChildren',
                                type: 'spring',
                                bounce: 0.2 }},
                        closed: { 
                            x: '-100vw',
                            transition: { 
                                when: 'afterChildren',
                                type: 'spring',
                                bounce: 0.2 }}
                    }}
                    animate = 'open'
                    initial = 'closed'
                    exit = 'closed'
                    className='fixed flex flex-col justify-center inset-0 h-[100vh] w-[100vw] secondaryBg p-6'>
                    <motion.div
                        variants = {{
                            open: { y: 0, opacity: 1 },
                            closed: { y: '25%', opacity: 0 }
                        }}>
                        <ul className='space-y-6'>
                            
                            <motion.li
                                whileHover = {{ scale: 1.3, originX: 0 }}>
                                <Link href='/'  onClick = {toggleMobileNav}>
                                    <h1 className='secondaryText text-5xl font-extrabold'>Home</h1>
                                </Link>
                            </motion.li>
                            <motion.li
                                whileHover = {{ scale: 1.3, originX: 0 }}>
                                <Link href='/work'  onClick = {toggleMobileNav}>
                                    <h1 className='secondaryText text-5xl font-extrabold'>Work</h1>
                                </Link>
                            </motion.li>
                            <motion.li
                                whileHover = {{ scale: 1.3, originX: 0 }}>
                                <Link href='/notes' onClick = {toggleMobileNav}>
                                    <h1 className='secondaryText text-5xl font-extrabold'>Notes</h1>
                                </Link>
                            </motion.li>
                            <motion.li
                                whileHover = {{ scale: 1.3, originX: 0 }}>
                                <Link href='/contactMe' onClick = {toggleMobileNav}>
                                    <h1 className='secondaryText text-5xl font-extrabold'>Contact Me</h1>
                                </Link>
                            </motion.li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className='w-[100%] h-[3px] rounded-md primaryBg mt-8 mb-4'
                        variants = {{
                            open: { y: 0, opacity: 1 },
                            closed: { y: '25%', opacity: 0 }
                        }}>
                    </motion.div>
                    
                    <motion.div 
                        className = 'flex flex-row my-2 w-[100%] space-x-3 justify-center'
                        variants = {{
                            open: { y: 0, opacity: 1 },
                            closed: { y: '25%', opacity: 0 }
                        }}>
                        <motion.a 
                            className='flex justify-center py-1 px-3 rounded-lg' 
                            href='https://linkedin.com/in/will-koenig' 
                            target='_blank'
                            rel='noreferrer'
                            whileHover = {{boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)'}}>
                            <AiFillLinkedin className='cursor-pointer secondaryText' size={70}/>
                        </motion.a>
                        <motion.a 
                            className='flex justify-center py-1 px-3 rounded-lg' 
                            href='https://github.com/willk0814' 
                            target='_blank'
                            rel='noreferrer'
                            whileHover = {{boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)'}}>
                            <AiFillGithub className='cursor-pointer secondaryText' size={70}/>
                        </motion.a>
                        <motion.a 
                            className='flex justify-center py-1 px-3 rounded-lg' 
                            href={'/KoenigResume.pdf'}
                            target='_blank'
                            rel='noreferrer'
                            whileHover = {{boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)'}}>
                            <HiOutlineDocumentText className='cursor-pointer secondaryText' size={70} />
                        </motion.a>
                    </motion.div>
                    
                </motion.div>
            </MotionConfig>}
        </AnimatePresence>
    </div>
  )
}
