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
          <h1 className='text-wrap text-[#E8E8E8]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
        </div>
      </div>
    </div>
  )
}
