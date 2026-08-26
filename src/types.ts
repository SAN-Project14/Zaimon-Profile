export type ProjectStatus = 'LIVE' | 'PROTOTYPE' | 'DEVELOPMENT' | 'ARCHIVED';

export interface BaseProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  status: ProjectStatus;
  githubUrl?: string;
  image?: string;
  accentColor?: string;
  features?: string[];
  keyMechanics?: string[];
}

export interface LiveGame extends BaseProject {
  status: 'LIVE';
  liveUrl: string;
  gameplayHighlight: string;
  controls?: string[];
}

export interface GameProject extends BaseProject {
  gameplayConcepts: string[];
  prototypeNotes?: string;
}

export interface SoftwareProject extends BaseProject {
  problemSolved: string;
  liveDemoUrl?: string;
  architectureHighlights?: string[];
}

export interface SkillItem {
  name: string;
  level?: 'Core' | 'Advanced' | 'Proficient';
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface DevStat {
  value: string;
  label: string;
  subtext?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  details: string;
}
