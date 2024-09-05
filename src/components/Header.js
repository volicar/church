import React from 'react'
import Container from './Container'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

const Header = () => {
  return (
    <>
      <header className='header flex items-center justify-between p-1 h-14 w-full bg-slate-950 text-white'>
        <Container className='flex items-center'>
          <Logo />
          <DesktopMenu />
          <MobileMenu />
        </Container>
      </header>
    </>
  )
}

export default Header
