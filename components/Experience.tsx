
import React from 'react';
import Section from './Section';
import type { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  id?: string;
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ id, experiences }) => {
  return (
    <Section id={id} title="Experience">
      <div className="relative pl-8 md:pl-12 border-l-2 border-gray-200 dark:border-[--border-color]/30 print:border-l-0 print:pl-0">
        <div className="absolute top-0 left-[-1.5px] h-full w-px bg-gradient-to-b from-[--glow-cyan]/80 via-[--glow-cyan]/50 to-transparent animate-pulse print:hidden" />
        
        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group print-break-inside-avoid">
              <div className="absolute left-[-40px] md:left-[-56px] top-1 h-4 w-4 rounded-full bg-white dark:bg-[--bg-charcoal] border-2 border-[--glow-cyan] shadow-lg shadow-[--glow-cyan]/50 transition-all duration-300 group-hover:scale-150 group-hover:shadow-[--glow-cyan]/80 print:hidden" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-[--glow-cyan] transition-colors duration-300 print:text-black">{exp.role}</h3>
                  <p className="text-gray-800 dark:text-[--text-primary] font-medium text-lg mt-1 print:text-gray-800">{exp.company}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-[--text-secondary] mt-2 md:mt-0 md:text-right font-mono print:text-gray-600">{exp.dates}</p>
              </div>

              <ul className="mt-4 space-y-3 text-gray-700 dark:text-[--text-secondary] print:text-gray-700">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <span className="inline-block mt-2 h-1.5 w-1.5 rounded-full bg-[--glow-cyan] flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300 print:hidden" />
                    <span className="flex-1 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;