
import React, { useState, useEffect } from 'react';
import type { Contact } from '../types';
import { GlowButton } from './ui/shiny-button';

interface FooterProps {
    id?: string;
    contact: Contact;
}

const Footer: React.FC<FooterProps> = ({ id, contact }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-4 rounded-full bg-[--glow-cyan] text-black shadow-lg shadow-[--glow-cyan]/30 transition-all duration-500 hover:scale-110 hover:shadow-[--glow-cyan]/50 print:hidden ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <footer id={id} className="border-t border-gray-200 dark:border-[--border-color] relative overflow-hidden" data-noprint>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[--glow-cyan]/5 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Let's build something together.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700 dark:text-[--text-secondary] leading-relaxed">
            I'm currently available for new opportunities. If you have a project in mind or think I'd be a good fit for your team, please get in touch.
          </p>
          
          <div className="mt-12 flex justify-center">
            <GlowButton href={`mailto:${contact.email}`}>
              GET IN TOUCH
            </GlowButton>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-[--text-secondary] hover:text-[--glow-cyan] transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-[--text-secondary] hover:text-[--glow-cyan] transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-[--border-color]/30 text-sm text-gray-600 dark:text-[--text-secondary]">
            <p>&copy; {new Date().getFullYear()} Aryan. Crafted with precision and care.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;