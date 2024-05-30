import React from 'react'

import Image from 'next/image'

export default function AboutMeSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#E8E8E8] py-10 w-screen">

      <h1 className="text-[4rem] sm:text-8xl text-blue-600 mb-3">About Me</h1>

      <div className='flex flex-wrap items-center justify-center'>
        {/* <div className='bg-blue-600 min-w-[300px] min-h-[300px] w-[25vw] h-[25vw] flex rounded-full m-2'>
        </div> */}

        <Image 
          alt='Failed to Load'
          src={'/headshot.JPG'}
          width={300}
          height={300}
          className='rounded-full border-4 border-blue-600'/>

        <div className='bg-blue-600 w-[95vw] max-w-[450px] rounded-lg p-2 m-4'>
          <h1 className='text-wrap text-[#E8E8E8]'>I am a passionate Software Engineer with experience building Full-Stack applications in JavaScript as well as developing Machine Learning Models in Python.  As I continue my growth both personal and professional I am always looking for new challenges that I can apply all that I am continuosly learning to.</h1>

          <h1 className='text-wrap text-[#E8E8E8] pt-3'>Thank you for taking the time to check out my portfolio.  Scroll this page for more info about me and then visit the others for more detailed information.</h1>
        </div>
      </div>
    </div>
  )
}
