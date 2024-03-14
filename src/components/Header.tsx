import React from 'react';
import Image from 'next/image';


export function Header() {
  return (
    <header  className='false
    fixed top-0 z-50
    flex w-full items-center justify-between bg-gradient-to-t from-transparent to-black p-2 px-4 transition-all lg:px-16 lg:py-4'>
        <Image
        src="/netflix.png"
        alt="netflix"
        width={120}
        height={120}
        fill={false}
        className="object-cover"
        />
        <>
        <ul className='flex gap-6'>
            <li>
                Home
            </li>
            <li>
                TV Shows
            </li>
            <li>
                Movies
            </li>
            <li>
                Latest
            </li>
            <li></li>
        </ul>
        </>
    </header>
  );
}