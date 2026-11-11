export type ProjectCategory = 'all' | 'ai' | 'webapp' | 'uiux' | 'enterprise';

export interface Project {
  id: string;
  number: string;
  title: string;
  badge: string;
  categories: ProjectCategory[];
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  featured?: boolean;
  grantWinner?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  year?: string;
  client?: string;
}

export interface TrackRecordItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  tag: string;
  isCurrent?: boolean;
  points: string[];
  category: 'mentoring' | 'community' | 'engineering';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  linkText: string;
  skills: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  audience: string;
}
