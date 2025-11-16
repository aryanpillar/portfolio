
import React from 'react';
import Section from './Section';
import ProfileCard from './ProfileCard';
import type { AboutContent } from '../types';

interface AboutProps {
  id?: string;
  content: AboutContent;
  name?: string;
  imageUrl?: string;
}

const About: React.FC<AboutProps> = ({ id, content, name = "Aryan", imageUrl = "/20250523_124017_1__1__-_Copy-removebg-preview.png" }) => {
  return (
    <Section id={id} title="About">
      <ProfileCard name={name} imageUrl={imageUrl} />
      <div className="space-y-6 max-w-prose mx-auto text-gray-700 dark:text-[--text-secondary] print:text-gray-800">
        {content.paragraphs.map((p, i) => (
          <p key={i} className="text-base md:text-lg leading-relaxed">
            {p}
          </p>
        ))}
        {content.listItems && content.listItems.length > 0 && (
          <div className="pt-4">
            <h3 className="font-semibold text-gray-900 dark:text-[--text-primary] mt-6 mb-3 text-base md:text-lg print:text-gray-900">{content.listTitle}</h3>
            <ul className="list-disc list-outside space-y-2 pl-5 text-base md:text-lg leading-relaxed">
              {content.listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
};

export default About;