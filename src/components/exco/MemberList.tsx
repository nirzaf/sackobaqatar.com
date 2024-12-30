import { FC } from 'react';
import type { ExcoMember } from '@/types';

/**
 * MemberList component displays a grid of members with their names and positions
 * @param title - The section title (e.g., "Seating", "Standing")
 * @param members - Array of ExcoMember objects to display
 */
export const MemberList: FC<MemberListProps> = ({ title, members }) => {
  if (!members || members.length === 0) {
    return null;
  }

  return (
    <div>
      <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map((member, index) => (
          <div key={`${member.name}-${index}`} className="p-3 bg-gray-50 rounded-lg">
            <p className="font-medium text-gray-900">{member.name}</p>
            <p className="text-sm text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

interface MemberListProps {
  title: string;
  members: ExcoMember[];
}
