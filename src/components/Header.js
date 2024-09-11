import React from 'react';
import Container from './Container';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header flex items-center justify-between p-1 h-14 w-full bg-slate-950 text-white">
      <Container className="flex items-center justify-between w-full">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu (aparece apenas em telas médias ou maiores) */}
        <div className="hidden md:flex">
          <DesktopMenu />
        </div>

        {/* Mobile Menu (aparece apenas em telas pequenas) */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
