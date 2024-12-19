import { FC } from 'react';
import { motion } from 'framer-motion';

interface TimelineNavProps {
  activeYear: string;
  onYearChange: (year: string) => void;
}

const timelinePeriods = [
  { year: '1820', label: 'The Beginning' },
  { year: '1854', label: 'School Foundation' },
  { year: '1870', label: 'First Fifty Years' },
  { year: '1892', label: 'Benedictine Era' },
  { year: '1950', label: 'Modern Development' },
  { year: '1979', label: '125th Anniversary' },
  { year: '1994', label: 'Recent History' }
];

export const TimelineNav: FC<TimelineNavProps> = ({ activeYear, onYearChange }) => {
  return (
    <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-lg border-b border-[#B1B3CE]/20 py-4">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto no-scrollbar" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          <style>
            {`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            `}
          </style>
          <div className="relative min-w-max">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#F8F6F9]" />
            
            {/* Timeline Points */}
            <div className="relative flex justify-between items-center gap-16 px-4 min-w-[800px]">
              {timelinePeriods.map(({ year, label }) => (
                <motion.button
                  key={year}
                  onClick={() => onYearChange(year)}
                  className="group relative flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Year Point */}
                  <div 
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      activeYear === year
                        ? 'bg-[#B62D71] border-[#541D67] scale-125 shadow-lg shadow-[#B62D71]/20'
                        : 'bg-white border-[#B62D71] group-hover:border-[#541D67]'
                    }`}
                  />
                  
                  {/* Period Label */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className={`text-xs font-medium transition-colors duration-300 ${
                      activeYear === year ? 'text-[#B62D71]' : 'text-[#9A78AB] group-hover:text-[#B62D71]'
                    }`}>
                      {label}
                    </span>
                  </div>
                  
                  {/* Year Label */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      activeYear === year ? 'text-[#541D67]' : 'text-[#5B4886] group-hover:text-[#B62D71]'
                    }`}>
                      {year}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
