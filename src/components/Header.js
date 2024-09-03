import React from 'react'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <>
    <header className='header flex items-center justify-between p-1 h-14 w-full bg-slate-950 text-white'>
      <Logo />
      <MobileMenu />
    </header>
    </>
  )
}

export default Header
