
import React from 'react'
import ContactForm from '../components/pageComponents/contactPage/ContactForm'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'


export default function page() {
  
  return (
    
    <div 
      className='w-full min-h-screen flex flex-col py-20 items-center justify-start bg-[#E8E8E8]'>
        <ContactForm />
    </div>

  )
}
