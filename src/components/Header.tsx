'use client'
import React, { useState } from 'react';
import { UserProfile } from './UserProfile';
import { Brand } from './Brand';
import { NavBar } from './NavBar';
import { useScroll } from '../hooks/useScroll';


export function Header() {
    const isScrolled = useScroll();

  return (
    <header  className={`${isScrolled && 'bg-black'} false
    fixed top-0 z-50
    flex w-full items-center justify-between p-2 px-4 transition-all lg:px-16 lg:py-4`}>
        <div className='flex items-center space-x-2 md:space-x-4'>
            <Brand/>
            <NavBar/>
        </div>
        <div className='flex items-center space-x-4'>
            <UserProfile/>
        </div>
    </header>
  );
}