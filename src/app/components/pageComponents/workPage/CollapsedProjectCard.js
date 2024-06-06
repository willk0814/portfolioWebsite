import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WorkTechBar from './WorkTechBar'

export default function CollapsedProjectCard({ projectData }) {
    return (
        <motion.div
          className='flex flex-col primaryBg border-2 border-blue-600 rounded-lg h-[350px] w-[full]' 
          whileHover = {{ boxShadow: '0px 0px 8px rgb(38, 99, 235)'}}>
          <Link 
            href={projectData.link}
            className='flex flex-col justify-between rounded-lg w-full h-full'>
              <div className='relative rounded-t-lg w-full h-[80%]'>
                {/* <h1 className='text-xl secondaryText z-9 absolute'>{projectData.title}</h1> */}
                <Image 
                  alt='Failed to Load'
                  src={projectData.image_link}
                  fill={true}
                  className='rounded-t-lg z-0'/>
              </div>
            
            <div className='p-2'>
              <WorkTechBar stack={projectData.stack} full={false} />
              <h1 className='text-2xl primaryText'>{projectData.title}</h1>
            </div>
          </Link>
        </motion.div>
      )
    }
