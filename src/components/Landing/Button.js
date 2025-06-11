'use client';
import React from 'react';
import Link from 'next/link';

export default function Button({ linkto,name }) {
  return (
    <Link href={linkto} passHref>
            <button className="bg-[#b84f2e] hover:bg-[#e06a3c] text-white px-2 mx-37 md:px-2 py-2 rounded-xl  items-center justify-center flex text-base md:text-lg  shadow transition-all duration-200">
              {name}
            </button>
          </Link>
  );
}
