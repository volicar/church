import React from 'react'
import Link from 'next/link'

const DesktopMenu = () => {
  return (
    <nav className="navbar flex">
      <ul className="menu flex gap-3 uppercase">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>

  )
}

export default DesktopMenu
