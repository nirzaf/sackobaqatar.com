import { FC } from 'react';
import { MemberCard } from './MemberCard';
import { MemberSectionProps } from '@/types/components/exco';
import { ExcoMember } from '@/types/index';

export const MemberSection: FC<MemberSectionProps> = ({ title, members }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {members.map((member: ExcoMember, index: number) => (
          <MemberCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </div>
  );
};
