import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Section } from './Section';
import { VideoCard } from './VideoCard';

export const VideoSection: FC = memo(() => (
  <Section title="Featured Videos" className="bg-[#B1B3CE]/5">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <VideoCard
        title="SACKOBA Q 10th Year Anniversary"
        duration="01:44"
      />
      <VideoCard
        title="TALONS SMASH 2018"
        duration="00:15"
      />
      <VideoCard
        title="Decades Rewind"
        duration="15:10"
      />
    </div>
    <div className="text-center mt-12">
      <Link 
        to="/videos"
        className="inline-flex items-center px-6 py-3 bg-[#541D67] text-white rounded-full hover:bg-[#B62D71] transition-colors"
      >
        View All Videos
        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  </Section>
));
