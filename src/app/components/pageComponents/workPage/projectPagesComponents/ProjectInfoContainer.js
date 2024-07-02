'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from "react-icons/cg";
import YouTube from 'react-youtube';


import ProjectTechBar from './ProjectTechBar'

export default function ProjectInfoContainer({ projectData, children }) {

    const [playerSize, setPlayerSize] = useState()


    const smPlayerOpts = {
        height: '200px',
        width: '260px',
        playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            showinfo: 0,
            fs: 0,
            rel: 0
        }}
    
    const mdPlayerOpts = {
        height: '430px',
        width: '400px',
        playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            showinfo: 0,
            fs: 0,
            rel: 0
        }}
    
    const lgPlayerOpts = {
        height: '600px',
        width: '800px',
        playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            showinfo: 0,
            fs: 0,
            rel: 0,
            color: 'black'
        }}

        useEffect(() => {
            const handleResize = () => {
              const screenWidth = window.innerWidth
        
              if (screenWidth > 1005){
                setPlayerSize('full')
              } else if (screenWidth <= 1005 && screenWidth > 675) {
                setPlayerSize('md')
              } else {
                setPlayerSize('sm')
              }
            }
            handleResize()
            window.addEventListener('resize', handleResize)
            return () => {
              window.removeEventListener('resize', handleResize)
            }
          }, [])
  return (
    <div 
    className='flex flex-col items-center justify-start py-20 w-[100vw] min-h-[70vh] secondaryBg'>
        <div className='mb-2'>
            <h1 className='text-4xl secondaryText'>{projectData.title}</h1>
        </div>

        <motion.div 
            className='flex flex-col justify-center items-center'
            variants={{ 
                initial: { opacity: 0 },
                animate: { opacity: 1,
                    transition: {
                        
                    }}
             }}
             initial='initial'
             animate='animate'>

            {projectData.video_id !== '' && <motion.div 
                className='bg-black m-2 rounded-lg flex items-center justify-center p-4'
                variants={{
                    initial: { opacity: 0, y: '5%' },
                    animate: { opacity: 1, y: 0,
                        transition: { duration: 0.6}}}}>
                    <>
                      {playerSize === 'sm' &&
                        <YouTube 
                          style={{ borderRadius: '15px', overflow: 'hidden'}}
                          videoId={projectData.video_id} 
                          opts={smPlayerOpts}/>}
                      
                      {playerSize === 'md' &&
                        <YouTube 
                          style={{ borderRadius: '15px', overflow: 'hidden'}}
                          videoId={projectData.video_id} 
                          opts={mdPlayerOpts}/>}

                      {playerSize === 'full' &&
                        <YouTube 
                          style={{ borderRadius: '15px', overflow: 'hidden'}}
                          videoId={projectData.video_id} 
                          opts={lgPlayerOpts}/>}
                    </>

            </motion.div>}

            <motion.div 
                variants={{
                    initial: { opacity: 0, y: '15%' },
                    animate: { opacity: 1, y: 0,
                        transition: { delay: 0.7, duration: 0.6 }}
                }}
                className='flex flex-col w-[95vw] max-w-[1000px] space-y-3 m-2'>
                
                <div className='flex flex-col space-y-3 sm:space-y-0 sm:flex-row justify-between'>
                    <div className='flex flex-col space-y-1'>
                        <h1 className='text-3xl secondaryText'>Links</h1>

                        <div className='flex flex-row space-x-2'>
                            {projectData.repo_link !== '' &&
                            <motion.a
                                href={projectData.repo_link}
                                target='_blank'
                                rel='noreferrer'
                                className='cursor-pointer flex flex-row items-center primaryBg rounded-lg p-2'
                                whileHover = {{ boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)' }}>
                                    <AiFillGithub size={30} className='primaryText'/>
                                    <h1 className='primaryText text-xl ml-2'>Repo</h1>
                            </motion.a>}

                            {/* Demo Link */}
                            {projectData.demo_link !== '' &&
                                <motion.a
                                href={projectData.demo_link}
                                target='_blank'
                                rel='noreferrer'
                                className='cursor-pointer flex flex-row items-center  primaryBg rounded-lg p-2'
                                whileHover = {{ boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)' }}>
                                    <CgWebsite size={30} className='primaryText'/>
                                    <h1 className='primaryText text-xl ml-2'>Demo</h1>
                                </motion.a>
                            }
                        </div>
                    </div>
                    <div className='flex flex-col space-y-1 sm:items-end'>
                        <h1 className='text-3xl secondaryText'>Stack</h1>
                        <ProjectTechBar stack={projectData.stack} full={true} />
                    </div>
                </div>
                
                
                <div className='flex rounded-md primaryBg p-2'>
                    <h1 className='primaryTexts text-md font-semibold'>{projectData.content}</h1>
                </div>

                {children}
            </motion.div>
        </motion.div>
    </div>
  )
}
