import React from 'react'
import SecondaryFooter from '../components/secondaryLayout/SecondaryFooter'
import SecondaryNavbar from '../components/secondaryLayout/navbar/SecondaryNavbar'

export default function WorkLayout({ children }) {
  return (
    <>
    <SecondaryNavbar />
    { children }
    <SecondaryFooter />
    </>
  )
}
