'use client';
import React from 'react';
import Image from 'next/image';

export const Brand = () => (
    <Image
        src="/netflix.png"
        alt="netflix"
        width={120}
        height={120}
        fill={false}
        className="object-cover" />
);
