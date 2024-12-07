import { FC } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { clsx } from 'clsx';
import type { ExcoYear } from '../types';

const excoYears: ExcoYear[] = [
  {
    year: '2024-2025',
    members: {
      seating: [
        { name: 'Vigneshwaran Selvarathnam', role: 'Asst. Secretary' },
        { name: 'K. Sivaraja', role: 'Vice President' },
        { name: 'Clifford Ferguson', role: 'Gen. Secretary' },
        { name: 'Anurudha Ellepola', role: 'President' },
        { name: 'M.D.M. Rizkhan', role: 'Treasurer' },
        { name: 'Damith Hearath', role: 'Member of the Committee' },
        { name: 'Riyas Thajudeen', role: 'Member of the Committee' },
      ],
      standing: [
        { name: 'Malinda Dissanayake', role: 'Coordinating Secretary' },
        { name: 'Riyaz Nilabdeen', role: 'Secretary Sports' },
        { name: 'Christy Shihan', role: 'Media Coordinator' },
        { name: 'Arshad Niyaz', role: 'Member of the Committee' },
        { name: 'Shifan Muhajireen', role: 'Member of the Committee' },
        { name: 'Jiffry M. Murshid', role: 'Coordinator Special Events' },
        { name: 'Thanuja Manoj', role: 'Asst. Treasurer' },
        { name: 'Milroy Perera', role: 'Secretary Social & Religious Affairs' },
      ],
    },
  },
  {
    year: '2023-2024',
    members: {
      seating: [
        { name: 'Gihan Rodrigo', role: 'Secretary Religious/Social Affairs' },
        { name: 'K. Sivaraja', role: 'Vice President' },
        { name: 'Vigneshwaran Selvarathnam', role: 'Treasurer' },
        { name: 'Anurudha Ellepola', role: 'President' },
        { name: 'Riyas Thajudeen', role: 'Gen. Secretary' },
        { name: 'Malinda Dissanayake', role: 'Secretary Sports' },
        { name: 'Sellamuthu Yogeswaran', role: 'Coordinator Events' },
      ],
      standing: [
        { name: 'Clifford Ferguson', role: 'Asst. Secretary' },
        { name: 'Riyaz Nilabdeen', role: 'Secretary Sports' },
        { name: 'Namal Attanayake', role: 'Ex-co Coordinator' },
        { name: 'Arshad Niyaz', role: 'Media Coordinator' },
        { name: 'Jiffry M. Murshid', role: 'Member of the Committee' },
        { name: 'Mohamed Sajith', role: 'Member of the Committee' },
        { name: 'Damith Hearath', role: 'Coordinator Events' },
        { name: 'M.D.M. Rizkhan', role: 'Asst. Treasurer' },
      ],
    },
  },
];

export const Exco: FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Executive Committee</h1>

          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-primary/10 p-1 mb-8">
              {excoYears.map((year) => (
                <Tab
                  key={year.year}
                  className={({ selected }) =>
                    clsx(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-primary text-white shadow'
                        : 'text-primary hover:bg-white/[0.12] hover:text-primary'
                    )
                  }
                >
                  {year.year}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {excoYears.map((year, idx) => (
                <Tab.Panel key={idx}>
                  <div className="space-y-12">
                    {/* Seating Members */}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Seating Members</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {year.members.seating.map((member, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-md p-6"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Standing Members */}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Standing Members</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {year.members.standing.map((member, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-md p-6"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </motion.div>
      </div>
    </div>
  );
};
