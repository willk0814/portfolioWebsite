'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from "react-icons/cg";
import YouTube from 'react-youtube';


import ProjectTechBar from './ProjectTechBar'

export default function ProjectInfoContainer({ projectData }) {

    const playerSize = 'full'

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
  return (
    <div 
    className='flex flex-col items-center justify-start py-20 w-full min-h-[70vh] bg-[#E8E8E8]'>
        <div className='mb-2'>
            <h1 className='text-4xl text-blue-600'>{projectData.title}</h1>
        </div>

        <motion.div 
            className='flex flex-col justify-center items-center'
            variants={{ 
                initial: { opacity: 0 },
                animate: { opacity: 1,
                    transition: {
                        staggerChildren: 0.6
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
                    initial: { opacity: 0, y: '5%' },
                    animate: { opacity: 1, y: 0,
                        transition: { duration: 0.6}}
                }}
                className='flex flex-col w-[95vw] max-w-[1000px] space-y-2 m-2'>
                
                <div className='flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-between'>
                    <div className='flex flex-col space-y-1'>
                        <h1 className='text-2xl text-blue-600'>Links</h1>

                        <div className='flex flex-row space-x-2'>
                            <motion.a
                                href={projectData.repo_link}
                                target='_blank'
                                rel='noreferrer'
                                className='cursor-pointer flex flex-row items-center bg-blue-600 rounded-lg p-2'
                                whileHover = {{ boxShadow: '0px 0px 20px rgb(38, 99, 235)'}}>
                                    <AiFillGithub size={30} color='#E8E8E8'/>
                                    <h1 className='text-[#E8E8E8] text-xl ml-2'>Repo</h1>
                            </motion.a>

                            {/* Demo Link */}
                            {projectData.demo_link !== '' &&
                                <motion.a
                                href={projectData.demo_link}
                                target='_blank'
                                rel='noreferrer'
                                className='cursor-pointer flex flex-row items-center  bg-blue-600 rounded-lg p-2'
                                whileHover = {{ boxShadow: '0px 0px 20px rgb(38, 99, 235)'}}>
                                    <CgWebsite size={30} color='#E8E8E8'/>
                                    <h1 className='text-[#E8E8E8] text-xl ml-2'>Demo</h1>
                                </motion.a>
                            }
                        </div>
                    </div>
                    <div className='flex flex-col space-y-1 sm:items-end'>
                        <h1 className='text-2xl text-blue-600'>Stack</h1>
                        <ProjectTechBar stack={projectData.stack} full={true} />
                    </div>
                </div>
                
                
                <div className='flex flex-col space-y-1'>
                    <h1 className='text-2xl text-blue-600'>Description</h1>
                    <h1 className='text text-blue-600'>{projectData.content}</h1>
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}
