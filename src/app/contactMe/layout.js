import React from 'react'
import SecondaryFooter from '../components/secondaryLayout/SecondaryFooter'
import SecondaryNavbar from '../components/secondaryLayout/navbar/SecondaryNavbar'

export default function ContactLayout({ children }) {
  return (
    <>
    <SecondaryNavbar />
    { children }
    <SecondaryFooter />
    </>
  )
}
