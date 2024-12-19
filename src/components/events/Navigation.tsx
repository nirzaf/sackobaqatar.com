import { FC } from 'react';
import { Search } from 'react-feather';
import { NavigationProps } from './types';

export const Navigation: FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[#B1B3CE]/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-4">
          <div className="flex gap-3">
            {['upcoming', 'ongoing', 'past'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300
                  ${activeSection === section 
                    ? section === 'upcoming' 
                      ? 'bg-gradient-to-r from-[#541D67] to-[#B62D71] text-white shadow-lg shadow-[#B62D71]/20' 
                      : section === 'ongoing' 
                        ? 'bg-gradient-to-r from-[#9A78AB] to-[#B62D71] text-white shadow-lg shadow-[#9A78AB]/20'
                        : 'bg-gradient-to-r from-[#B62D71] to-[#9A78AB] text-white shadow-lg shadow-[#B62D71]/20'
                    : 'text-[#5B4886] bg-white/80 hover:bg-[#F8F6F9] border border-[#B1B3CE]/20'}`}
              >
                <span className="relative">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/50 rounded-full"></span>
                  )}
                </span>
              </button>
            ))}
          </div>
          
          <div className="relative flex-shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#9A78AB]" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 pl-10 pr-4 py-2.5 rounded-full bg-white/80 border border-[#B1B3CE]/20
                text-[#5B4886] placeholder-[#9A78AB] 
                focus:outline-none focus:ring-2 focus:ring-[#B62D71]/20 focus:border-[#B62D71]/20
                transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
