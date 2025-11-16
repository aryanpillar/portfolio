
import React from 'react';
import Section from './Section';
import type { SkillCategory } from '../types';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  const categoriesMap: { [key: string]: string } = {
    "Languages & Backend": "Secure Backend & APIs",
    "Frontend & UI": "Resilient Frontend",
    "Systems & Infra": "Scalable Infrastructure",
    "Data & ML": "Intelligent Automation",
    "Product & Process": "Product Engineering"
  };

  const descriptionsMap: { [key: string]: string } = {
      "Languages & Backend": "Building robust, secure server-side logic and APIs.",
      "Frontend & UI": "Crafting performant, accessible, and secure user interfaces.",
      "Systems & Infra": "Designing and maintaining cloud infrastructure that scales.",
      "Data & ML": "Applying machine learning for moderation and automation.",
      "Product & Process": "Bridging product requirements with engineering execution."
  }

  return (
    <Section title="What I Build">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div 
            key={category.category} 
            className="group relative p-6 bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/0 border border-gray-200 dark:border-[--border-color] rounded-xl transition-all duration-500 hover:border-[--glow-cyan]/50 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-[--glow-cyan]/20 print:border-gray-200 print:p-4 print:shadow-none print:transform-none overflow-hidden"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[--glow-cyan]/0 to-[--glow-cyan]/0 group-hover:from-[--glow-cyan]/5 group-hover:to-transparent transition-all duration-500 print:hidden" />
            <div className="relative z-10">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-[--glow-cyan] transition-colors duration-300 print:text-black">
                {categoriesMap[category.category] || category.category}
              </h3>
              <p className="text-sm text-gray-600 dark:text-[--text-secondary] mt-2 mb-4 h-10 print:text-gray-600">
                {descriptionsMap[category.category]}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill.name} 
                    className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-full text-gray-700 dark:text-[--text-secondary] hover:bg-gray-200 dark:hover:bg-white/10 hover:border-[--glow-cyan]/30 hover:text-gray-900 dark:hover:text-white transition-all duration-300 cursor-default print:bg-gray-100 print:border-gray-200 print:text-gray-700"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;