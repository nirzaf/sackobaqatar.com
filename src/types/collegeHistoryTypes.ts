// types/collegeHistoryTypes.ts

export interface NotablePerson {
    name: string;
    role: string;
    period: string;
    description: string;
    image?: string;
    achievements?: string[];
}
  
export interface HistoryPeriod {
    year: string;
    title: string;
    content: string;
    image?: string;
    notablePersons?: NotablePerson[];
}