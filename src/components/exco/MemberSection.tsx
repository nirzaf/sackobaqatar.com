import { FC } from 'react';
import { MemberCard } from './MemberCard';
import type { ExcoMember } from '@/types';

interface MemberSectionProps {
  title: string;
  members: ExcoMember[];
}

export const MemberSection: FC<MemberSectionProps> = ({ title, members }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
};
