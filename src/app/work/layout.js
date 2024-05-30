import React from 'react'
import SecondaryFooter from '../components/layoutComponents/secondaryLayout/SecondaryFooter'
import SecondaryNavbar from '../components/layoutComponents/secondaryLayout/navbar/SecondaryNavbar'

export default function WorkLayout({ children }) {
  return (
    <>
    <SecondaryNavbar />
    { children }
    <SecondaryFooter />
    </>
  )
}
