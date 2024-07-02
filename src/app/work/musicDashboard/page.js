import React from 'react'

import { projectsData } from '@/app/assets/projectsData'
import ProjectInfoContainer from '@/app/components/pageComponents/workPage/projectPagesComponents/ProjectInfoContainer'

export default function page() {

  const PROJ_ID = 'musicDashboard'
  const data = projectsData[PROJ_ID]

  return (
    <div>
      <ProjectInfoContainer projectData={data}> 
        
        <div className='flex flex-col space-y-3'>

          <div className='flex flex-col space-y-1'>
            <h1 className='text-3xl secondaryText'>Description</h1>
            <div className='w-full h-[3px] rounded-full primaryBg'></div>
            <h1 className='text-md secondaryText font-semibold'>Spotify wrapped is awesome.  Looking back and seeing what your most played songs were throughout the year is so much fun.  I wanted these insights into my listening history throughout the year.  I wanted to be able to capture a complete picture of my music taste at that moment.</h1>
          </div>
          
          <div className='flex flex-col space-y-1'>
            <h1 className='text-3xl secondaryText'>Project Layout</h1>
            <div className='w-full h-[3px] rounded-full primaryBg'></div>
            <h1 className='text-md secondaryText font-semibold'>This project has a few different components that are important to discuss, let's take a look at each...</h1>
            
            <h1 className='text-2xl secondaryText pt-[12px]'>Harvesting Listening Data</h1>
            <h1 className='text-md secondaryText font-semibold'>In order to keep track of what songs I am listening to I am going to use Spotify's API which allows you (with the proper Authentication) to query for the last 15 song's that you listened to.  Since we can only query for 15 songs at a time we are going to need to repeat this process on a loop so that we can capture our complete listening data.  We are going to use a node.js server hosted on an AWS EC2 instance to do this.  It is going to handle the initial OAuth authentication Spotify, refreshing our access token as is necessary, making API calls to Spotify to gather listening data, storing new songs in our song database, and storing each listen in our listens database.</h1>

            <h1 className='text-2xl secondaryText pt-[12px]'>Making Data Available</h1>
            <h1 className='text-md secondaryText font-semibold'>In order for the data to be available to the front-end we need to host a set of api's each of which provides a different data set to the front-end.  In order to host these APIs I am using a combination of AWS Lambda Functions with AWS API Gateway.</h1>

            <h1 className='text-2xl secondaryText pt-[12px]'>Front End</h1>
            <h1 className='text-md secondaryText font-semibold'>The front end of this application is built with React, TailwindCSS, and Framer Motion.  I have hosted the front end with Vercel since it is free.  I am using axios to make requests to the backend for data.</h1>
          </div>
          

        </div>
  
      </ProjectInfoContainer>
    </div>
  )
}
