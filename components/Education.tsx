
import React from 'react';
import Section from './Section';
import type { EducationItem, Certification } from '../types';

interface EducationProps {
  education: EducationItem[];
  certifications: Certification[];
}

const Education: React.FC<EducationProps> = ({ education, certifications }) => {
  const hasEducation = education && education.length > 0;
  const hasCerts = certifications && certifications.length > 0;

  if (!hasEducation && !hasCerts) {
    return null;
  }
  
  const title = hasEducation ? education[0].institution : certifications[0].issuer;

  return (
    <Section title={title}>
      <div className="text-center print:text-left">
        {hasEducation && education.map((edu, index) => (
          <div key={index} className="mb-2 print-break-inside-avoid">
            <h3 className="font-bold text-lg text-white print:text-black">{edu.degree}</h3>
            <p className="text-sm text-[--text-secondary] mt-1">{edu.year}</p>
          </div>
        ))}
        {hasCerts && certifications.map((cert, index) => (
           <div key={index} className="mt-6 print-break-inside-avoid">
            <h3 className="font-bold text-lg text-white print:text-black">{cert.name}</h3>
             <p className="text-sm text-[--text-secondary] mt-1">{cert.year}</p>
          </div>
        ))}
        <p className="mt-6 text-base text-[--text-secondary] italic">
          Focused on algorithms, ML systems, and secure engineering.
        </p>
      </div>
    </Section>
  );
};

export default Education;