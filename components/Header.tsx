
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="group px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-[--text-secondary] hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
    <span className="relative">
      {children}
      <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-[--glow-cyan] transition-all duration-300 group-hover:w-full group-hover:left-0" />
    </span>
  </a>
);

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      data-noprint
      className={`fixed top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'scale-95' : 'scale-100'
      }`}
    >
      <nav className={`flex items-center gap-0.5 sm:gap-2 p-1.5 sm:p-2 rounded-full backdrop-blur-lg border shadow-lg transition-all duration-500 ${
        scrolled 
          ? 'bg-white/60 dark:bg-black/40 border-gray-200 dark:border-[--border-color]/50 shadow-gray-200/20 dark:shadow-[--glow-cyan]/5' 
          : 'bg-white/80 dark:bg-black/20 border-gray-300 dark:border-[--border-color] shadow-xl'
      }`}>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#work">Work</NavLink>
        <NavLink href="#systems">Systems</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <div className="h-6 w-px bg-gray-300 dark:bg-white/20 mx-0.5 sm:mx-1" />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;