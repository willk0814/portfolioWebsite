import React from 'react'

export default function FilterButtons() {
  return (
    <div className='flex flex-row'>

        <button
            className='border-2 border-blue-600 rounded-lg text-blue-600 text-lg p-1 m-2'>
            Full Stack
        </button>
        
        <button
            className='border-2 border-blue-600 rounded-lg text-blue-600 text-lg p-1 m-2'>
            ML/AI
        </button>

        <button
            className='border-2 border-blue-600 rounded-lg text-blue-600 text-lg p-1 m-2'>
            Web Dev
        </button>

        <button
            className='border-2 border-blue-600 rounded-lg text-blue-600 text-lg p-1 m-2'>
            Others
        </button>
        
    </div>
  )
}
