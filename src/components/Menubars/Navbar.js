"use client"
import React, { useState, useEffect, useCallback, memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NavbarStyles = {
  hoverTransition: 'transition-all duration-300 ease-in-out',
  linkPadding: 'px-5 py-[1px]',

  activeIndicator: `
    before:absolute before:inset-0 before:bg-white/5 before:rounded-md before:backdrop-blur-sm
    after:absolute after:bottom-[-4px] after:left-[15%] after:right-[15%] after:h-[2px]
    after:bg-gradient-to-r after:from-white/40 after:via-white after:to-white/40
  `,
};

const NavItem = memo(({ name, path, isActive, scrolled }) => {
  return (
    <Link
      href={path}
      className={`group relative text-white font-bold ${NavbarStyles.hoverTransition} ${NavbarStyles.linkPadding}
        ${isActive ? NavbarStyles.activeIndicator : ''}
        ${isActive ? 'text-white' : 'hover:text-white/90'}`}
    >
      <span className="relative z-10">{name}</span>
      
      {!isActive && (
        <>
          <span className="absolute inset-x-0 bottom-[-8px] h-[1px] bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out"></span>
          <span className="absolute inset-x-0 top-[-8px] h-[1px] bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out"></span>
          
          <span className="absolute inset-x-0 bottom-[-4px] h-[2px] bg-white scale-x-0 group-hover:scale-x-75 transition-transform duration-300 delay-100 ease-out-cubic"></span>
          <span className="absolute inset-x-0 top-[-4px] h-[2px] bg-white scale-x-0 group-hover:scale-x-75 transition-transform duration-300 delay-100 ease-out-cubic"></span>
          
          <span className="absolute inset-y-0 left-0 w-[1px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-center"></span>
          <span className="absolute inset-y-0 right-0 w-[1px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-center"></span>
        </>
      )}
      
      {isActive && (
        <>
          <span className="absolute inset-x-0 bottom-[-8px] h-[1px] bg-white/40 scale-x-100"></span>
          <span className="absolute inset-x-[15%] bottom-[-4px] h-[2px] bg-white scale-x-100"></span>
          <span className="absolute inset-x-0 top-[-8px] h-[1px] bg-white/40 scale-x-100"></span>
          <span className="absolute inset-x-[15%] top-[-4px] h-[2px] bg-white scale-x-100"></span>
          <span className="absolute inset-y-0 left-0 w-[1px] bg-white/40 scale-y-100"></span>
          <span className="absolute inset-y-0 right-0 w-[1px] bg-white/40 scale-y-100"></span>

          <span className="absolute inset-0 rounded-md bg-white/5 filter blur-[2px]"></span>
        </>
      )}
    </Link>
  );
});

NavItem.displayName = 'NavItem';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Members', path: '/members' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 ${NavbarStyles.hoverTransition} ${
        scrolled 
          ? 'backdrop-blur-lg bg-transparent shadow-lg shadow-black/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group relative">
              <Image
                src="/logoDark.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-8 w-auto filter group-hover:brightness-110 transition-all duration-300"
              />

              <span className="absolute -inset-2 rounded-full border border-white/0 group-hover:border-white/20 transition-all duration-300 scale-90 group-hover:scale-100"></span>
            </Link>
          </div>
          
          {/* Desktop Menu with improved active state */}
          <div className="hidden md:block">
            <div className=" flex items-center sm:space-x-1 lg:space-x-8">
              {navItems.map((item) => (
                <NavItem
                  key={item.name}
                  name={item.name}
                  path={item.path}
                  isActive={pathname === item.path}
                  scrolled={scrolled}
                />
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex">
            <button
              onClick={toggleMenu}
              className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon animation */}
              <div className="relative w-8 h-8 flex justify-center items-center">
                <span 
                  className={`absolute w-7 h-0.5 rounded-full ${NavbarStyles.hoverTransition} ${
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
                  className={`absolute w-7 h-0.5 rounded-full ${NavbarStyles.hoverTransition} ${
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
      
      {/* Mobile Menu active state */}
      <div 
        className={`md:hidden fixed right-4 ${NavbarStyles.hoverTransition} ${
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
              className={`flex items-center px-3 py-2.5 mx-2 my-1 text-sm text-white rounded-lg ${NavbarStyles.hoverTransition}
                        ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'}
                        ${pathname === item.path 
                           ? 'bg-gradient-to-r from-white/10 to-white/5' 
                           : 'hover:bg-white/10'}`}
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

export default memo(Navbar);
