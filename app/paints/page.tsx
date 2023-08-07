import React from 'react';
import Link from 'next/link';


function Paints() {

  const arrow = '<=';

  return (
    <div className='flex min-h-screen flex-col items-center p-4 bg-gray-800 text-white h-full font-mono'>
      <h1 className='text-2xl py-16'>Página en desarrollo</h1>
      
      <Link href={'/'}>
        <p className='text-3xl py-16 hover:text-sky-500'>
          {arrow}
        </p>
      </Link>
    </div>
  )
}

export default Paints
