import { FC, memo } from 'react';
import { NoticeBoard } from './NoticeBoard';
import { HistorySection } from './HistorySection';
import { FeaturesSection } from './FeaturesSection';
import { CollegeDetailsSection } from './CollegeDetailsSection';
import { ExcoPreview } from './ExcoPreview';

/**
 * HomeContent component - Main content section for the home page
 * Contains feature cards, notice board, history section, college details, and Exco preview
 * Implements responsive design with proper overflow handling
 */
export const HomeContent: FC = memo(() => (
  <section className="relative py-16 bg-white overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
      <div className="flex flex-col space-y-16">
        <FeaturesSection />
        <NoticeBoard />
        <HistorySection />
        <CollegeDetailsSection />
        <ExcoPreview />
      </div>
    </div>
  </section>
));
