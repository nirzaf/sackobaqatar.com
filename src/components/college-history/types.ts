export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface HistorySectionProps {
  title: string;
  content: string;
  year: string;
  image?: string;
}

export interface HistoryPeriod {
  year: string;
  title: string;
  content: string;
  image?: string;
  notablePersons?: Array<{
    name: string;
    role: string;
    period: string;
    image?: string;
    description: string;
    achievements?: string[];
  }>;
}

export interface HistoryTimelineProps {
  events: TimelineEvent[];
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 }
};

export const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};
