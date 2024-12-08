export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export interface TimelineProps {
  events: TimelineEvent[];
}
