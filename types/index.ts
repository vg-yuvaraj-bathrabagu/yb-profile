// File: types/index.ts
export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Achievement {
  title: string;
  company: string;
  description: string;
  metrics: Metric[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface TimelineItem {
  date: string;
  company: string;
  role: string;
  description: string;
}

export interface ContactItem {
  icon: any;
  label: string;
  value: string;
  href?: string;
}

export interface TerminalCommand {
  type: 'prompt' | 'output' | 'error' | 'success';
  text: string;
}