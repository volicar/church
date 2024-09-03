'use client'

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
          <Link href="/" className="p-4 hover:bg-slate-700">Home</Link>
          <Link href="/about" className="p-4 hover:bg-slate-700">About</Link>
          <Link href="/services" className="p-4 hover:bg-slate-700">Services</Link>
          <Link href="/contact" className="p-4 hover:bg-slate-700">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
