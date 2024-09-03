import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <img src="https://placehold.co/40x40" alt="Logo Placeholder" className="h-auto w-auto" />
    </Link>
  );
};

export default Logo;
