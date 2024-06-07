'use client'

import React, { useState, useEffect } from 'react'
import SecondaryMobileNav from './SecondaryMobileNav';
import SecondaryFullNav from './SecondaryFullNav';


export default function SecondaryNavbar() {

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
    <div className='fixed left-0 w-full h-20 z-10 secondaryBg'>
        <div className='flex flex-col h-full items-center'>

            {showMobile ? (
                <SecondaryMobileNav />
                ):(
                <SecondaryFullNav />
                )}

            <div className='primaryBg h-[3px] w-[98%] mb-1'></div>
        </div>
    </div>
  )
}