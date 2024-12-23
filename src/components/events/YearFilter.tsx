import { FC, useState } from 'react';
import { ChevronDown } from 'react-feather';

interface YearFilterProps {
  years: string[];
  selectedYear: string;
  onYearChange: (year: string) => void;
}

export const YearFilter: FC<YearFilterProps> = ({ years, selectedYear, onYearChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[#B1B3CE]/20">
      <div className="container mx-auto px-4 py-4">
        <div className="relative max-w-xs mx-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-2.5 bg-white text-[#541D67] rounded-lg text-sm font-medium
              border border-[#B1B3CE]/20 hover:bg-[#F8F6F9] transition-all duration-300
              flex items-center justify-between"
          >
            <span>{selectedYear === 'all' ? 'All Years' : selectedYear}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isOpen && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg border border-[#B1B3CE]/20 py-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    onYearChange(year);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-[#F8F6F9] transition-colors
                    ${selectedYear === year ? 'text-[#B62D71] font-medium' : 'text-[#5B4886]'}`}
                >
                  {year === 'all' ? 'All Years' : year}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
