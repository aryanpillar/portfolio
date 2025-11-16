
import React from 'react';
import type { Contact } from '../types';

interface HeroProps {
  name: string;
  title: string;
  summary: string;
  details: {
    location: string;
    availability: string;
  };
  contact: Contact;
}

const Hero: React.FC<HeroProps> = ({ name, title, summary, details, contact }) => {
  return (
    <section className="py-16 md:py-24 border-b border-gray-100">
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight-custom leading-tight">
        {name}
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-prose text-gray-800">
        {summary}
      </p>
      <div className="mt-6 text-sm text-gray-500">
        <span>{details.location}</span>
        <span className="mx-2">|</span>
        <span>{details.availability}</span>
      </div>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono text-gray-600 print:hidden">
        <a href={`mailto:${contact.email}`} className="hover:text-black">{contact.email}</a>
        <span className="text-gray-300 hidden sm:inline">/</span>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black">LinkedIn</a>
        <span className="text-gray-300 hidden sm:inline">/</span>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-black">GitHub</a>
      </div>
       <div className="mt-8 hidden flex-col print:flex print:text-sm">
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
        <span>{details.location}</span>
        <span>{contact.linkedin}</span>
        <span>{contact.github}</span>
      </div>
    </section>
  );
};

export default Hero;
