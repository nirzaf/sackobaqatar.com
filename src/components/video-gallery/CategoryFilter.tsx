import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { CategoryFilterProps } from './types';

const CategoryFilter: FC<CategoryFilterProps> = memo(({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-7xl mx-auto mb-8"
    >
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => onCategoryChange('All')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === 'All'
              ? 'bg-primary-600 text-white'
              : 'bg-white text-primary-600 hover:bg-primary-50'
          }`}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-white text-primary-600 hover:bg-primary-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </motion.div>
  );
});

CategoryFilter.displayName = 'CategoryFilter';
export default CategoryFilter;
