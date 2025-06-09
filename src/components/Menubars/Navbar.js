"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Members', path: '/members' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-lg shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/logoDark.png"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-14 flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`${
                    scrolled 
                      ? 'text-gray-50 font-bold hover:text-blue-600' 
                      : 'text-white font-bold hover:text-gray-300'
                  } font-medium transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden flex">
            <button
              onClick={toggleMenu}
              className={`${
                scrolled ? 'text-gray-800' : 'text-white'
              } inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Redesigned hamburger icon with animation */}
              <div className="relative w-8 h-8 flex justify-center items-center">
                <span 
                  className={`absolute w-7 h-0.5 rounded-full transition-all transform duration-300 ease-in-out ${
                    isMenuOpen 
                      ? 'rotate-45 w-6 bg-slate-700' 
                      : 'w-6 translate-y-[-6px] bg-gray-800'
                  }`}
                  style={{ backgroundColor: !isMenuOpen && !scrolled ? 'white' : '' }}
                ></span>
                <span 
                  className={`absolute w-5 h-0.5 rounded-full transition-all duration-200 ease-in-out ${
                    isMenuOpen 
                      ? 'opacity-0 translate-x-3' 
                      : scrolled ? 'bg-gray-800' : 'bg-white'
                  }`}
                ></span>
                <span 
                  className={`absolute w-7 h-0.5 rounded-full transition-all transform duration-300 ease-in-out ${
                    isMenuOpen 
                      ? '-rotate-45 w-6 bg-slate-700' 
                      : 'w-6 translate-y-[6px] bg-gray-800'
                  }`}
                  style={{ backgroundColor: !isMenuOpen && !scrolled ? 'white' : '' }}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={`md:hidden fixed w-full transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <div className="px-4 py-5 space-y-3 backdrop-blur-2xl bg-white/20 shadow-lg rounded-b-2xl border-t border-white/20">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center text-gray-800 hover:bg-white/20 hover:text-gray-900
                        rounded-xl px-5 py-3.5 text-base font-medium transition-all duration-200
                        transform backdrop-blur-md bg-white/40 shadow-sm ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'}`}
              style={{ transitionDelay: `${index * 75}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-3 text-gray-700">
                {item.name === 'Home' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                )}
                {item.name === 'About us' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                )}
                {item.name === 'Members' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                )}
                {item.name === 'Events' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                )}
                {item.name === 'Contact' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                )}
              </span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
