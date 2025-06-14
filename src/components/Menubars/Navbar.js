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
          ? 'backdrop-blur-lg shadow-md' 
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
              className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Redesigned hamburger icon with animation */}
              <div className="relative w-8 h-8 flex justify-center items-center">
                <span 
                  className={`absolute w-7 h-0.5 rounded-full transition-all transform duration-300 ease-in-out ${
                    isMenuOpen 
                      ? 'rotate-45 w-6 bg-white' 
                      : 'w-6 translate-y-[-6px] bg-white'
                  }`}
                ></span>
                <span 
                  className={`absolute w-5 h-0.5 rounded-full transition-all duration-200 ease-in-out ${
                    isMenuOpen 
                      ? 'opacity-0 translate-x-3' 
                      : 'bg-white'
                  }`}
                ></span>
                <span 
                  className={`absolute w-7 h-0.5 rounded-full transition-all transform duration-300 ease-in-out ${
                    isMenuOpen 
                      ? '-rotate-45 w-6 bg-white' 
                      : 'w-6 translate-y-[6px] bg-white'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Updated with gradient background and no icons */}
      <div 
        className={`md:hidden fixed right-4 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
        style={{
          width: '180px',
          top: '70px',
        }}
      >
        <div className="py-2 shadow-lg rounded-2xl border border-white/20" 
             style={{
              background: 'linear-gradient(135deg, rgba(5, 5, 5, 0.98), rgba(70, 30, 0, 0.95))'
}}>
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center px-3 py-2.5 mx-2 my-1 text-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200
                        ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-medium text-center w-full">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
