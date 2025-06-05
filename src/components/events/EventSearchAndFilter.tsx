import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon, 
  XMarkIcon,
  CalendarIcon,
  TagIcon,

} from '@heroicons/react/24/outline';

interface SearchAndFilterProps {
  onSearchChange: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  onYearFilter: (year: string) => void;
  searchQuery: string;
  selectedCategory: string;
  selectedYear: string;
  availableYears: string[];
  availableCategories: string[];
  totalResults: number;
}

export const EventSearchAndFilter: FC<SearchAndFilterProps> = ({
  onSearchChange,
  onCategoryFilter,
  onYearFilter,
  searchQuery,
  selectedCategory,
  selectedYear,
  availableYears,
  availableCategories,
  totalResults
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const clearFilters = () => {
    onSearchChange('');
    onCategoryFilter('all');
    onYearFilter('all');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedYear !== 'all';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      {/* Search Bar */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search events, descriptions, or tags..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#B62D71] focus:border-[#B62D71] text-sm"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <XMarkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Filter Toggle and Results */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
        >
          <FunnelIcon className="h-4 w-4" />
          <span className="text-sm font-medium">Filters</span>
          {hasActiveFilters && (
            <span className="bg-[#B62D71] text-white text-xs px-2 py-1 rounded-full">
              Active
            </span>
          )}
        </button>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            {totalResults} result{totalResults !== 1 ? 's' : ''}
          </span>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-[#B62D71] hover:text-[#541D67] font-medium"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Filter Panel */}
      {isFilterOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-200 pt-4 space-y-4"
        >
          {/* Category Filter */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <TagIcon className="h-4 w-4 mr-2" />
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onCategoryFilter('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-[#B62D71] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {availableCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryFilter(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-[#B62D71] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Year Filter */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <CalendarIcon className="h-4 w-4 mr-2" />
              Year
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onYearFilter('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedYear === 'all'
                    ? 'bg-[#B62D71] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Years
              </button>
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => onYearFilter(year)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedYear === year
                      ? 'bg-[#B62D71] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
