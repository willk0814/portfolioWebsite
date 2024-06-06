import React from 'react'
import LinkBar from './LinkBar'

export default function TitleScreen() {
  return (
    <div className="flex flex-col w-[100vw] items-center justify-center min-h-[45vh] primaryBg pt-20 p-10">
      
      <div className='flex flex-col items-start space-y-2'>
        <h1 className="text-[1.5rem] sm:text-3xl primaryText text-start">Hi! My name is</h1>
        <h1 className="text-[4.5rem] sm:text-8xl primaryText text-start">Will Koenig</h1>
        <h1 className="text-[2.5rem] sm:text-6xl text-[#A1E5AB] text-start pb-2">
          I am a Software Engineer
        </h1>
        
        <LinkBar />
      </div>
    </div>
  )
}
