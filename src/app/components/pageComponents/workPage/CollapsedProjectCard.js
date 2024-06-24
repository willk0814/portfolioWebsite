import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WorkTechBar from './WorkTechBar'

export default function CollapsedProjectCard({ projectData }) {
    return (
        <motion.div
          className='flex flex-col secondaryBg rounded-lg h-[350px] w-[full] p-2 border-2 border-[#121212]' 
          whileHover = {{ boxShadow: '0 0 10px 5px rgba(18, 18, 18, 0.5)' }}>
          <Link 
            href={projectData.link}
            className='flex flex-col justify-between rounded-lg w-full h-full'>
              <div className='relative rounded-t-lg w-full h-[70%]'>
                <Image 
                  alt='Failed to Load'
                  src={projectData.image_link}
                  fill={true}
                  className='rounded-lg z-0'/>
                <div className='secondaryBg z-9 absolute top-0 left-0 p-2 rounded-br-lg'>
                  <h1 className='text-xl secondaryText'>{projectData.title}</h1>
                </div>
              </div>
            
            <div className='py-2'>
              <WorkTechBar stack={projectData.stack} full={false} />
              <h1 className='secondaryText text-sm'>
              {projectData.content.length > 65 ? 
                projectData.content.slice(0, 65) + '...' : projectData.content}
            </h1>
            </div>
          </Link>
        </motion.div>
      )
    }
