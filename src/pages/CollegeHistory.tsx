import { FC } from 'react';
import { HeroSection } from '../components/college-history/HeroSection';
import { MainContent } from '../components/college-history/MainContent';
import { TimelineEvent } from '../components/college-history/types';

const timelineEvents: TimelineEvent[] = [
  {
    year: '1820',
    title: 'The Beginning',
    description: 'Vincent de Rozairo became the first missionary to Kandy, establishing a church on the grounds of the present Scots Kirk.'
  },
  {
    year: '1828',
    title: 'New Church Site',
    description: 'Governor-General Sir Edward Barnes presented the Catholic Church with a new site, where St. Anthony\'s Cathedral stands today.'
  },
  {
    year: '1854',
    title: 'School Foundation',
    description: 'Fr. Felice Zoppi opened St. Anthony\'s School with 62 boys and 28 girls.'
  },
  {
    year: '1876',
    title: 'Boarding Introduction',
    description: 'Boarding life was first introduced under Fr. D. Paul Perera O.S.B.'
  },
  {
    year: '1927',
    title: 'Move to Katugastota',
    description: 'Bishop Bede Beeckmeyer purchased the old Dunuwille Walauwa, the present premises.'
  },
  {
    year: '1954',
    title: 'Centenary Year',
    description: 'The Golden Year of the College, marked by academic excellence and sporting achievements.'
  }
];

export const CollegeHistory: FC = () => (
  <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 mt-12">
    <HeroSection
      title="Our Rich History"
      subtitle="A Legacy of Excellence Since 1854"
    />
    <MainContent timelineEvents={timelineEvents} />
  </div>
);
