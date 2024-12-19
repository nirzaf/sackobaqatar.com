// components/college-history/NotablePersonCard.tsx
import { FC } from 'react';
import { NotablePerson } from '../../types/collegeHistoryTypes';

interface NotablePersonCardProps {
  person: NotablePerson;
}

const NotablePersonCard: FC<NotablePersonCardProps> = ({ person }) => {
  return (
    <div className="bg-[#F8F6F9] p-6 rounded-lg">
      <div className="flex items-start gap-6">
        {person.image && (
          <img
            src={person.image}
            alt={person.name}
            className="w-24 h-24 object-cover rounded-lg shadow-sm"
          />
        )}
        <div>
          <h4 className="text-lg font-bold text-[#541D67]">{person.name}</h4>
          <p className="text-[#B62D71] font-medium">{person.role}</p>
          <p className="text-sm text-[#5B4886] mb-2">{person.period}</p>
          <p className="text-[#5B4886]">{person.description}</p>
          {person.achievements && (
            <ul className="mt-3 space-y-1 list-disc list-inside text-sm text-[#5B4886]">
              {person.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotablePersonCard;