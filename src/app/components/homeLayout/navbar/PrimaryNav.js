'use client'

import React, { useState, useEffect } from 'react'

import PrimaryNavFull from './PrimaryNavFull'
import PrimaryNavMobile from './PrimaryNavMobile';

export default function PrimaryNav() {
 // SV boolean to determine which Navbar to show
 const [showMobile, setShowMobile] = useState(false);
    

 useEffect(() => {
     const handleResize = () => {
         if (window.innerWidth < 600){
             setShowMobile(true)
         } else {
             setShowMobile(false)
         }
     }

     handleResize()

     window.addEventListener('resize', handleResize)
     return () => {
         window.removeEventListener('resize', handleResize)
     }
 }, [])

return (
 <div className='fixed left-0 w-full h-20 z-10'>
     <div className='flex flex-col h-full items-center w-full'>

         {showMobile ? (
             <PrimaryNavMobile />
             ):(
             <PrimaryNavFull />
             )}
     </div>
{/* 
     {showMobile &&
        <div className='bg-green-300 h-[3px] w-[98%] mb-1'></div>} */}
 </div>
)
}