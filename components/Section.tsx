
import React from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const { ref, animationClasses } = useScrollFadeIn<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className={`py-12 ${animationClasses} print:py-6`}>
      <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-[--text-secondary] mb-12 text-center print:text-left print:text-base print:mb-8 print:text-black">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;