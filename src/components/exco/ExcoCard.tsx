import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import type { ExcoYear } from '@/types';
import { MemberList } from './MemberList';

/**
 * ExcoCard component displays a card with executive committee information
 * Includes an expandable section with member details
 */
export const ExcoCard: FC<{ data: ExcoYear }> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!data) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        {/* Image with error handling */}
        <img
          src={data.image}
          alt={`Exco ${data.year}`}
          className="w-full h-auto object-cover"
          onError={(e) => {
            e.currentTarget.src = '/fallback-image.jpg'; // Add a fallback image
            e.currentTarget.alt = 'Image not available';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-black/80 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold z-10">
          Exco {data.year}
        </h3>
      </div>

      <div className="p-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left mb-4 flex items-center justify-between text-primary-900 hover:text-primary-700"
          aria-expanded={isExpanded}
        >
          <span className="font-semibold">View Members</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isExpanded && (
          <div className="space-y-6">
            <MemberList title="Seating (Left to Right)" members={data.seatedMembers} />
            <MemberList title="Standing (Left to Right)" members={data.standingMembers} />
            {data.absentees && <MemberList title="Absentees" members={data.absentees} />}
            
            {data.note && (
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">{data.note}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
