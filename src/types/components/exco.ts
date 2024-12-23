import { ExcoMember } from '@/types/index';

export interface MemberCardProps {
  member: ExcoMember;
  index: number;
}

export interface MemberSectionProps {
  title: string;
  members: ExcoMember[];
}

// Re-export base types from index.ts
export type { ExcoYear } from '..';
