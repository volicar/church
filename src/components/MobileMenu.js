'use client'; // Diretiva para indicar renderização no lado do cliente

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { XIcon, MenuIcon } from '@heroicons/react/outline';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Button onClick={toggleMenu} className="flex items-center justify-center p-2 text-white bg-slate-950">
        {isOpen ? (
          <XIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </Button>
      
      {isOpen && (
        <div className="absolute top-12 right-0 bg-slate-950 text-white shadow-lg z-50 flex flex-col">
          <Link href="/" className="flex items-center p-4 hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12l8.954-8.955a1.125 1.125 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Home
          </Link>
          <Link href="/about" className="flex items-center p-4 hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM4.5 21c0-3.314 4.5-6 7.5-6s7.5 2.686 7.5 6M12 3a9 9 0 00-9 9v.75c0 .621.504 1.125 1.125 1.125h1.875c.621 0 1.125-.504 1.125-1.125V12c0-4.971 4.029-9 9-9s9 4.029 9 9v.75c0 .621.504 1.125 1.125 1.125h1.875c.621 0 1.125-.504 1.125-1.125V12a9 9 0 00-9-9z" />
            </svg>
            About
          </Link>
          <Link href="/services" className="flex items-center p-4 hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Services
          </Link>
          <Link href="/contact" className="flex items-center p-4 hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125H3.75c-.621 0-1.125-.504-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125zM21 7.5v9m-6-6h6m-6 3h6" />
            </svg>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
