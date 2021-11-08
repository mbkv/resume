import { ReactNode } from "react";

export interface PersonalDetails {
  name: string;
  number: string;
  email: string;
  github: string;
}

export interface Experience {
  start: string;
  end: string;
  company: string;
  title: string;
  summary: string;
  notes: string[];
}

interface SkillScores {
  skill: string;
  score: number;
}

export interface Resume {
  title: string;
  introduction: string;
  technologies: string[];
  skills: SkillScores[];
  experiences: Experience[];
  certifications: ReactNode[];
}

export interface Page {
  details: PersonalDetails;
  resume: Resume;
}