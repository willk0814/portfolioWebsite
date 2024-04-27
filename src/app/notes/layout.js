import React from 'react'
import SecondaryFooter from '../components/secondaryLayout/SecondaryFooter'
import SecondaryNavbar from '../components/secondaryLayout/SecondaryNavbar'

export default function NotesLayout({ children }) {
  return (
    <>
    <SecondaryNavbar />
    { children }
    <SecondaryFooter />
    </>
  )
}
