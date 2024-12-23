import { FC, memo } from 'react';
import { NoticeBoard } from './NoticeBoard';
import { HistorySection } from './HistorySection';
import { FeaturesSection } from './FeaturesSection';

export const HomeContent: FC = memo(() => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <FeaturesSection />
      <NoticeBoard />
      <HistorySection />
    </div>
  </section>
));
