export interface Video {
  title: string;
  url: string;
  duration: string;
  category: string;
}

export interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}
