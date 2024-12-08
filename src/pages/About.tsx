import { FC } from 'react';
import { motion } from 'framer-motion';
import { LOGO_URL, LOGO_ALT, LOGO_DIMENSIONS } from '../assets/images/logo';

const timelineEvents = [
  {
    year: '2009',
    title: 'Foundation',
    description: "St. Anthony's College Kandy, Old Boys' Association of Qatar was formed by Aloy Cooray and Manoharan Arasu, holding their first meeting with 8 Old Antonians in Doha.",
  },
  {
    year: '2010',
    title: 'First Reunion',
    description: 'Organized first gathering with 25 Antonians featuring a memorable Re-union Boat trip. The constitution was approved and the first executive committee was elected.',
  },
  {
    year: '2011',
    title: 'Growth & Recognition',
    description: 'During the AGM & annual get-together at Mercure Grand Hotel - Doha, Gihan Rodrigo and Riyas thajudeen were honored for their dedication.',
  },
  {
    year: '2012-2013',
    title: 'Sporting Excellence',
    description: 'SACKOBA Qatar won the Doha Lions Cricket Champions Trophy and secured Runner-up position in Doha Lions Tag Rugby Tournament.',
  },
  {
    year: 'Present',
    title: 'Continuing Legacy',
    description: 'Today, with 81+ members, SACKOBA Qatar continues to build supportive social connections and facilitate united action to support the College.',
  },
];

export const About: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img
                src={LOGO_URL}
                alt={LOGO_ALT}
                width={LOGO_DIMENSIONS.hero.width}
                height={LOGO_DIMENSIONS.hero.height}
                className="mx-auto"
              />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-display-lg text-primary-700 mb-6"
            >
              Legacy of Brotherhood
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl text-primary-500 leading-relaxed"
            >
              St. Anthony&apos;s College Kandy Old Boys&apos; Association Qatar - A Legacy of Brotherhood
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Foundation Story */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="prose prose-lg max-w-none mb-16"
          >
            <h2 className="text-display-md text-primary-700 mb-6">Our Foundation</h2>
            <p className="text-primary-500 leading-relaxed">
              St. Anthony&apos;s College Kandy, Old Boys&apos; Association of Qatar was formed in 2009 by Aloy Cooray accompanied with Manoharan Arasu. Their vision of creating a social gathering in Qatar materialized on September 28th, 2009, with the first meeting including eight Old Antonians in Doha.
            </p>
            <p className="text-primary-500 leading-relaxed">
              The inaugural meeting saw Aloy Cooray elected as president, Manoharan Arasu as secretary, and Saffan Mohammed as treasurer. Committee members included Saliya Tennakoon, Rizkhan Dhalan, Mohammed Shafraz, T.K Hanan, and Anurudha Ellepola.
            </p>
          </motion.section>

          {/* Timeline */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-display-md text-primary-700 mb-8">Our Journey</h2>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="relative pl-8 border-l-2 border-primary-200"
                >
                  <div className="absolute -left-3 top-0">
                    <div className="w-6 h-6 rounded-full bg-primary-100 border-2 border-primary-300 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-500" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-primary-700 mb-1">{event.year}</h3>
                    <h4 className="text-primary-600 mb-2">{event.title}</h4>
                    <p className="text-primary-500">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Present Day */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-display-md text-primary-700 mb-6">Present Day</h2>
            <p className="text-primary-500 leading-relaxed">
              Today, SACKOBA Qatar continues its mission of building supportive social connections among Sri Lankans & Old Antonians residing in Qatar. We facilitate united action to support the College and the parent body in various projects.
            </p>
            <p className="text-primary-500 leading-relaxed">
              Our &apos;Building Future&apos; scholarship scheme enables access to primary education for students at St. Anthony&apos;s College Kandy. The Association actively participates in events organized by and for the benefit of the Sri Lankan community in Qatar.
            </p>
            <div className="text-center mt-8">
              <p className="text-xl font-display font-medium text-primary-700">Lux De Coelo</p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};
