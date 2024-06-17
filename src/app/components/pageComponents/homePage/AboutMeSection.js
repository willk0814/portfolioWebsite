import React from 'react'

import Image from 'next/image'

export default function AboutMeSection() {
  return (
    <div className="flex flex-col items-center justify-center primaryBg py-10 w-screen">

      <h1 className="text-[4rem] sm:text-8xl primaryText mb-3">About Me</h1>

      <div className='flex flex-wrap items-center justify-center'>
        {/* <div className='primaryBg min-w-[300px] min-h-[300px] w-[25vw] h-[25vw] flex rounded-full m-2'>
        </div> */}

        <Image 
          alt='Failed to Load'
          src={'/headshot.JPG'}
          width={300}
          height={300}
          className='rounded-full border-4 border-[#A2D0AC]'/>

        <div className='bg-[#E8E8E8] w-[95vw] max-w-[450px] rounded-lg p-2 m-4'>
          <h1 className='text-wrap secondaryText'>Now that you have seen some of my projects, read about my work experience and education, and seen some of the technologies I like to work with I figure it is a good time to introduce myself.  I am a passionate full-stack software engineer; I love developing technology that users enjoy interacting with and take some value from.</h1>

          <h1 className='text-wrap secondaryText pt-3'>Thank you for taking the time to scroll through my portfolio, I hope you enjoyed it.</h1>
        </div>
      </div>
    </div>
  )
}
