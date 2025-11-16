
import React from 'react';
import Header from './components/Header';
import { BackgroundPaths as Hero } from './components/ui/background-paths';
import About from './components/About';
import CreatorJourney from './components/CreatorJourney';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[--bg-charcoal] text-gray-900 dark:text-[#EAEAEA] antialiased selection:bg-[--glow-cyan] selection:text-black print:bg-white transition-colors duration-300">
      <Header />
      
      <Hero 
        name={portfolioData.name}
        title={portfolioData.title}
        summary={portfolioData.summary}
        profileImageUrl={portfolioData.profileImageUrl}
      />

      <main className="max-w-5xl mx-auto px-6 sm:px-8 py-24 md:py-32 print:py-0">
        <div className="space-y-28 md:space-y-36">
          <About 
            id="about" 
            content={portfolioData.about} 
            name={portfolioData.name}
            imageUrl="/Aryan photo.jpg"
          />
          <CreatorJourney />
          <Skills skillCategories={portfolioData.skills} />
          <Experience id="work" experiences={portfolioData.experience} />
          <Projects id="systems" projects={portfolioData.projects} />
          <Education education={portfolioData.education} certifications={portfolioData.certifications} />
        </div>
      </main>
      <Footer id="contact" contact={portfolioData.contact} />
    </div>
  );
};

export default App;