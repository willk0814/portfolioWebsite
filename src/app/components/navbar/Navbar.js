'use client'

import React, { useState, useEffect } from 'react'
import FullScreenNav from './FullScreenNav'

export default function Navbar() {
  return (
    <div className='fixed left-0 w-full z-10 p-2'>

      <div className='flex justify-center sm:justify-end items-center'>
        <FullScreenNav />
      </div>
        
    </div>
  )
}
