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
    <div className="sticky top-0 z-50 bg-[#0F0E40]/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="relative max-w-xs mx-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-2.5 bg-white/10 text-white rounded-lg text-sm font-medium
              border border-white/20 hover:bg-white/15 transition-all duration-300
              flex items-center justify-between"
          >
            <span>{selectedYear === 'all' ? 'All Years' : selectedYear}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isOpen && (
            <div className="absolute top-full left-0 w-full mt-2 bg-[#0A0A2A] rounded-lg shadow-xl border border-white/15 py-2 backdrop-blur-xl">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    onYearChange(year);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors
                    ${selectedYear === year ? 'text-white font-medium' : 'text-slate-200'}`}
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
