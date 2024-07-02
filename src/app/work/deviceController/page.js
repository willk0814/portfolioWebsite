import React from 'react'

import { projectsData } from '@/app/assets/projectsData'
import ProjectInfoContainer from '@/app/components/pageComponents/workPage/projectPagesComponents/ProjectInfoContainer'

export default function page() {

  const PROJ_ID = 'deviceController'
  const data = projectsData[PROJ_ID]

  return (
    <div>
      <ProjectInfoContainer projectData={data}>
        <div className='flex flex-col space-y-3'>
          
          <div className='flex flex-col space-y-1'>
            <h1 className='text-3xl secondaryText'>Description</h1>
            <div className='w-full h-[3px] rounded-full primaryBg'></div>
            <h1 className='text-md secondaryText font-semibold'>I got involved with this project through a brief work study that my undergraduate curriculum sponsored.  After a few months I was asked to come on part time so that I had more time and resources to work on the project.  The lab is using robots called SMURFs to run different resistance tests on developing corn plants.  The goal of their research was to determine early warning signs for plants that would have under developed root systems and ultimately be susceptible to falling from a strong wind.  This may not seem like the most important problem in the world, but corn is the most widely grown industrial crop in the country and it is estimated that farmer's lose up to 25% of their yield due to fully grown plants with under developed root systems falling over and knocking down their neighbors.  All of the sudden this is a multi-billion dollar problem.</h1>
          </div>

          <div className='flex flex-col space-y-1'>
            <h1 className='text-3xl secondaryText'>The Problem</h1>
            <div className='w-full h-[3px] rounded-full primaryBg'></div>
            <h1 className='text-md secondaryText'>Their current testing and data collection process required them to run multiple bash scripts on a computer that was hard wired to the SMURF.  The SMURF then returned a series of floating point numbers representative of the force that the plant exerted back on the SMURF at different push force intervals which had to be copied into an excel spreadsheet.  This process is fine for a single plant, but when asked to gather measurements for an entire field it became very difficult and was hindering the progression of their research.</h1>
          </div>

          <div className='flex flex-col space-y-1'>
            <h1 className='text-3xl secondaryText'>Our Goal</h1>
            <div className='w-full h-[3px] rounded-full primaryBg'></div>
            <h1 className='text-md secondaryText'>Our goal was to make the researchers as efficient as possible in their data collection.  This means removing as many steps as possible from the data collection process as possible and flattening the learning curve necessary to effectively perform data and collect data.</h1>
            <h1 className='text-md secondaryText pt-[12px]'>We sought to accomplish these goals by replacing the hard wired connected laptop with a bluetooth connected iPad and replacing the intimidating shell with an easy to use application capable of interfacing with the robot to run commands and formatting data into immediately respresenative graphs and workable excel spreadhsheets that were prepared for data analysis.</h1>
          </div>

          <div className='flex flex-col space-y-1'>
            <h1 className='text-3xl secondaryText'>Results</h1>
            <div className='w-full h-[3px] rounded-full primaryBg'></div>
            <h1 className='text-md secondaryText'>I am truly proud of the results that my team and I was able to achieve while working on this project.  Once we deployed a developement build to all of the iPads around the lab the researchers were testing plants at a rate 3x that of the prior model.  They also found that they were running into signifcantly less problems with their data as the layout had been standardized and they were able to spot faulty tests with the preview graph that our application provided.</h1>
          </div>
        </div>
      </ProjectInfoContainer>
    </div>
  )
}
