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
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex gap-6">
            {['upcoming', 'ongoing', 'past'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors
                  ${activeSection === section 
                    ? section === 'upcoming' ? 'bg-blue-400 text-white' :
                      section === 'ongoing' ? 'bg-purple-400 text-white' :
                      'bg-pink-400 text-white'
                    : 'text-white bg-gray-400 hover:bg-gray-500'}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)} Events
              </button>
            ))}
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
