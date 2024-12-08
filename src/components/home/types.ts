export interface HeroSectionProps {
  title: string;
  description: string;
}

export interface NewsCardProps {
  tag?: string;
  tagType?: 'new' | 'limited' | 'default';
  title: string;
  date: string;
  description: string;
  price?: string;
  link?: {
    text: string;
    to: string;
  };
}

export interface VideoCardProps {
  title: string;
  duration: string;
  thumbnailUrl?: string;
}

export interface SectionProps {
  title: string;
  children: React.ReactNode;
}
