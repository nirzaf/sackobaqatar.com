import { FC } from 'react';
import { Filter } from 'react-feather';
import { FiltersProps } from './types';

export const Filters: FC<FiltersProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center gap-4 overflow-x-auto pb-4">
        <Filter className="text-gray-400 w-4 h-4" />
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors
              ${selectedCategory === category 
                ? 'bg-blue-400 text-white' 
                : 'text-white bg-gray-400 hover:bg-gray-500'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};
