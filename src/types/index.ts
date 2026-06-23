export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  slug: string;
}

export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  liveUrl: string;
  tech: string[];
  tags: string[];
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  result?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: string;
  image?: string;
  content: string;
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
