import { FC } from 'react';
import { MemberSectionProps } from './types';
import { MemberCard } from './MemberCard';

export const MemberSection: FC<MemberSectionProps> = ({ title, members }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <MemberCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </div>
  );
};
