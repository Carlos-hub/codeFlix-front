'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';


export function Header() {
    const [isScrolled,setIsScrolled] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY  > 0){
                setIsScrolled(true);
            }else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return ()=>{
            window.addEventListener('scroll', handleScroll)
        }
    },[])

  return (
    <header  className={`${isScrolled && 'bg-black'} false
    fixed top-0 z-50
    flex w-full items-center justify-between p-2 px-4 transition-all lg:px-16 lg:py-4`}>
        <div className='flex items-center space-x-2 md:space-x-4'>
        <Image
        src="/netflix.png"
        alt="netflix"
        width={120}
        height={120}
        fill={false}
        className="object-cover"
        />
        <>
        <ul className='md:flex sm:hidden gap-6'>
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
        </div>
        <div className='flex items-center space-x-4'>
        <p className='hidden md:inline cursor-not-allowed'>Teste</p>
        <button>Tests</button>
        </div>
        
        
        
    </header>
  );
}