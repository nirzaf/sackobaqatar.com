import { FC } from 'react';
import type { ExcoMember } from '@/types';

interface MemberCardProps {
  member: ExcoMember;
}

export const MemberCard: FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
      <p className="text-sm text-gray-600">{member.position}</p>
    </div>
  );
};
