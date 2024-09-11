import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import SocialLinks from './SocialLinks'

const DesktopMenu = () => {
  return (
    <nav className="navbar w-full hidden md:flex items-center justify-between">
      <ul className="menu flex gap-3 uppercase">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <SocialLinks />
    </nav>

  )
}

export default DesktopMenu
