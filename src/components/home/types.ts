export interface HeroContentProps {
  title: string;
  description: string;
}

export interface HeroSectionProps extends HeroContentProps {}

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

export interface FeatureCardProps {
  title: string;
  description: string;
  Icon: React.FC;
  gradient: string;
  delay?: number;
  link?: {
    text: string;
    url: string;
  };
  titleLink?: string;
}

export interface Feature extends Omit<FeatureCardProps, 'Icon'> {
  IconComponent: React.FC;
  link?: {
    text: string;
    url: string;
  };
  titleLink?: string;
}
