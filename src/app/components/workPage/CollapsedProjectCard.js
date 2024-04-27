import React from 'react'
import HomeTechnologyBar from '../homePage/ProjectSection/HomeTechnnologyBar'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CollapsedProjectCard({ projectData }) {
    return (
        <motion.div
          className='flex m-2 rounded-lg'
          whileHover = {{ boxShadow: '0px 0px 8px rgb(38, 99, 235)'}}>
          <Link 
            href={projectData.link}
            className='flex flex-col justify-between bg-[#E8E8E8] rounded-lg border-2 border-blue-600 p-2 h-[350px] w-[95vw] max-w-[325px]'>
            <h1 className='text-blue-600 text-2xl'>{projectData.title}</h1>
            
            <div>
              <HomeTechnologyBar stack={projectData.stack} full={false} />
              <h1 className='text-blue-600'>
                {projectData.content.length > 82 ? 
                  projectData.content.slice(0, 82) + '...' : projectData.content}
            </h1>
          </div>
          </Link>
        </motion.div>
      )
    }
