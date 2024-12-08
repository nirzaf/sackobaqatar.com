import { ReactNode } from 'react';

export interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export interface CardProps {
  title: string;
  description?: string;
  date?: string;
  tag?: string;
  link?: {
    text: string;
    to: string;
  };
  className?: string;
}

export interface VideoCardProps {
  title: string;
  duration: string;
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};
