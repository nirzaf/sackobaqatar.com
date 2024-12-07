import { FC } from 'react';
import { motion } from 'framer-motion';
import { HistorySection } from '../components/history/HistorySection';
import { HistoryTimeline } from '../components/history/HistoryTimeline';

const timelineEvents = [
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

export const CollegeHistory: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-24 pb-16 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-6"
            >
              Our Rich History
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl text-primary-600 leading-relaxed"
            >
              A Legacy of Excellence Since 1854
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* The Beginning */}
          <HistorySection
            title="The Beginning"
            content={`The Roman Catholic Church had established itself in the Maritime areas from 1505. In 1820 the superior of all the Oratorians in Ceylon, Vincent de Rozairo, himself came as the first missionary to Kandy. He put up a church, which occupied the very same grounds whereon the present Scots Kirk stands.`}
          />

          {/* Foundation Years */}
          <HistorySection
            title="Foundation Years"
            content={`In January of 1854, Fr. Felice Zoppi opened a school for boys and one for girls at the house where he resided, with Mr. Van Twest as Head Teacher of the Boys School. This was the birth of St. Anthony's School. The number of students on roll at the inception was 62 boys and 28 girls.`}
          />

          {/* Timeline */}
          <div className="my-20">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-12 text-center">
              Key Milestones
            </h2>
            <HistoryTimeline events={timelineEvents} />
          </div>

          {/* The Centenary */}
          <HistorySection
            title="The Centenary (1954)"
            content={`1954, the Centenary year, is described as the 'Golden Year' of the College. The most memorable event was the Big Match, in which the Antonians triumphed over their traditional rivals Trinity College by an innings, with A.C.M. Lafir and Ronnie Stevens putting on a partnership of 276 runs for the first wicket, establishing a new schools record.`}
          />

          {/* Modern Era */}
          <HistorySection
            title="The Modern Era"
            content={`Today, St. Anthony's College continues to uphold its tradition of excellence in both academics and sports. The college has produced numerous national athletes, cricketers, and leaders in various fields, while maintaining its commitment to holistic education and character development.`}
          />
        </div>
      </div>
    </div>
  );
};

export default CollegeHistory;
