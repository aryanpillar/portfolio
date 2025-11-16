
export interface Experience {
  company: string;
  role: string;
  dates: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Contact {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface AboutContent {
  paragraphs: string[];
  listTitle: string;
  listItems: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  summary: string;
  profileImageUrl: string;
  about: AboutContent;
  details: {
    location: string;
    availability: string;
  };
  contact: Contact;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: EducationItem[];
  certifications: Certification[];
}