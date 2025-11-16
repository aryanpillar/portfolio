
import React from 'react';
import Section from './Section';
import type { Project } from '../types';

interface ProjectsProps {
  id?: string;
  projects: Project[];
}

const LinkIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const Projects: React.FC<ProjectsProps> = ({ id, projects }) => {
  return (
    <Section id={id} title="Systems">
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative border border-gray-200 dark:border-[--border-color] p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-[#121214] dark:to-[#0a0a0b] transition-all duration-500 hover:border-[--glow-cyan]/50 hover:shadow-2xl hover:shadow-[--glow-cyan]/10 hover:-translate-y-1 print:border-gray-200 print-break-inside-avoid overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[--glow-cyan]/0 via-transparent to-purple-500/0 group-hover:from-[--glow-cyan]/5 group-hover:to-purple-500/5 transition-all duration-700 print:hidden" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-2xl transition-colors duration-300 group-hover:text-[--glow-cyan] print:text-black mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-[--text-secondary] leading-relaxed print:text-gray-700">
                    {project.description}
                  </p>
                </div>
                {project.repoUrl && (
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium text-gray-600 dark:text-[--text-secondary] hover:text-[--glow-cyan] transition-all duration-300 flex-shrink-0 ml-6 hidden md:flex items-center gap-1 group/link print:hidden"
                  >
                    <span>Repository</span>
                    <LinkIcon />
                  </a>
                )}
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span 
                    key={tech} 
                    className="inline-block px-4 py-1.5 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-500/20 rounded-full text-purple-700 dark:text-purple-300/90 hover:bg-purple-200 dark:hover:bg-purple-900/50 hover:border-purple-400 dark:hover:border-purple-500/40 hover:text-purple-800 dark:hover:text-purple-200 transition-all duration-300 print:bg-gray-100 print:border-gray-200 print:text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.repoUrl && (
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-medium text-gray-600 dark:text-[--text-secondary] hover:text-[--glow-cyan] transition-colors mt-6 flex items-center gap-1 md:hidden print:flex"
                >
                  <span>View Repository</span>
                  <LinkIcon />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;