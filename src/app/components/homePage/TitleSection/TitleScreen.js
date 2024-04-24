import React from 'react'
import LinkBar from './LinkBar'

export default function TitleScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] bg-blue-600 pt-20 p-10">
      
      <div className='flex flex-col items-start space-y-2'>
        <h1 className="text-[1.5rem] sm:text-3xl text-white text-start">Hi! My name is</h1>
        <h1 className="text-[4.5rem] sm:text-8xl text-white text-start">Will Koenig</h1>
        <h1 className="text-[2.5rem] sm:text-6xl text-green-400 text-start">
          I am a Software Engineer
        </h1>
        
        <LinkBar />
      </div>
    </div>
  )
}
