// components/college-history/HistoryAccordion.tsx
import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { HistoryPeriod } from '../../types/collegeHistoryTypes'; // Import the type
import NotablePersonCard from './NotablePersonCard'; // Import NotablePersonCard

interface HistoryAccordionProps {
  period: HistoryPeriod;
  isOpen: boolean;
  onToggle: () => void;
}

const HistoryAccordion: FC<HistoryAccordionProps> = ({ period, isOpen, onToggle }) => {
    
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg transition-colors duration-300"
      >
        <div className="py-6 px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-xl font-bold text-[#FF69B4]">{period.year}</span>
            <h2 className="text-2xl font-bold text-white">{period.title}</h2>
          </div>
          <ChevronDownIcon
            className={`w-6 h-6 text-white transition-transform duration-300 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white rounded-b-lg shadow-sm"
          >
            <div className="p-6">
              {period.image && (
                <div
                  className={`mb-6 rounded-lg overflow-hidden ${
                    period.image.includes('Rugger%20Team') ? 'max-w-3xl mx-auto' : 'max-w-sm mx-auto'
                  }`}
                >
                  <img src={period.image} alt={period.title} className="w-full h-auto object-cover" />
                </div>
              )}
              <div className="prose max-w-none">
                <div
                  className="text-[#5B4886] leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: period.content }}
                />
              </div>
              {period.notablePersons && period.notablePersons.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-[#541D67] mb-4">Notable Persons</h3>
                  <div className="space-y-6">
                    {period.notablePersons.map((person, index) => (
                      <NotablePersonCard key={index} person={person} /> // Render NotablePersonCard
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HistoryAccordion;