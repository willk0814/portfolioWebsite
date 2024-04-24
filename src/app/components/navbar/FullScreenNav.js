import React from 'react'
import Link from 'next/link'

export default function FullScreenNav() {
  return (
    <div className='flex flex-row space-x-4 bg-white border-2 border-blue-600 rounded-lg p-2'>
        <Link href='/'>
            <h1 className='text-blue-600 text-2xl'>Home</h1>
        </Link>
        <Link href='/projectGallery'>
            <h1 className='text-blue-600 text-2xl'>Work</h1>
        </Link>
        <Link href='/notes'>
            <h1 className='text-blue-600 text-2xl'>Notes</h1>
        </Link>
        <Link href='/contactMe'>
            <h1 className='text-blue-600 text-2xl'>Contact</h1>
        </Link>
    </div>
  )
}
