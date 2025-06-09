"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname} from 'next/navigation';
export default function  Banner () {
    const pathname = usePathname();

    const navItems = [
          { href: '/', label: 'Home' },
    { href: '/about', label: 'About us' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact us' },
    ];
  return (
    <header>
     <nav className=" flex items-center justify-between p-0 m-0 ">
     <Link href="/" className="flex items-center space-x-2">
     <Image
     src="/Logo.png"
     alt="Logo"
     width={190}
     height={0}
     className="h-auto"
     />
</Link>

     <div className="flex space-x-10 pr-8 text-xl">
      {navItems.map((item)=>{
        const isActive = pathname === item.href;
        return(
            <Link key={item.href} href={item.href}>
                <span 
                className={ isActive
                    ? "px-3 py-1 rounded-md bg-[#5F2917] text-[#D9C921] font-medium transition " : "px-3 py-1 rounded-md text-[#8D0E0E] font-medium hover:bg-[#5F2917] hover:text-[#D9C921] hover:rounded-md transition"

                }>
                 {item.label}
                </span>
            </Link>
        )
      })}
     </div>
     </nav>
    </header>
  )
}
