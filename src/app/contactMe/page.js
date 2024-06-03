
import React from 'react'
import ContactForm from '../components/pageComponents/contactPage/ContactForm'
import ContactFormTest from '../components/pageComponents/contactPage/ContactFormTest'


export default function page() {
  
  return (
    
    <div 
      className='w-full min-h-screen flex flex-col py-20 items-center justify-start bg-[#E8E8E8]'>
        {/* <ContactForm /> */}
        <ContactFormTest />
    </div>

  )
}
