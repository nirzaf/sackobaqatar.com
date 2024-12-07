import { FC } from 'react';
import { motion } from 'framer-motion';

interface TimelineEvent {
  year: string;
  events: string[];
}

const timeline: TimelineEvent[] = [
  {
    year: '1908',
    events: [
      'Reclamation Grounds granted by the Kandy Municipal Council for college sports',
      'Release of the first college publication, "St. Anthony\'s Manual"',
      'New buildings replace the old red building near the Bishop\'s Palace'
    ],
  },
  {
    year: '1909',
    events: [
      'Death of Charlie Hamilton, a promising young student-athlete',
      'The Physical Laboratory is dedicated to his memory'
    ],
  },
  {
    year: '2003',
    events: [
      'Formation of an "Ex-Boarders" subcommittee by the OBA Colombo Branch',
      'Active support from Old Boys Associations (OBAs) worldwide',
      'Launch of the OBA Colombo Branch website'
    ],
  },
];

export const CollegeHistory: FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-12">College History</h1>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2" />

            {/* Timeline events */}
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-12"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  {/* Year */}
                  <div className="flex-1 md:text-right md:pr-8">
                    <div className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-xl font-bold">
                      {event.year}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-3 md:mt-0" />

                  {/* Events */}
                  <div className="flex-1 pl-8 md:pl-8 mt-4 md:mt-0">
                    <ul className="space-y-4">
                      {event.events.map((item, eventIndex) => (
                        <motion.li
                          key={eventIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (eventIndex * 0.1) }}
                          className="text-gray-600"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
