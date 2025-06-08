import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { ExcoYear } from '../../components/exco/types';

/**
 * ExcoPreview component - Displays the current Exco members on the home page
 * Shows a simplified version with image and key positions
 */
export const ExcoPreview: FC = () => {
  // Using the most recent Exco data (2024-2025)
  const currentExco: ExcoYear = {
    year: '2024-2025',
    image: 'https://ik.imagekit.io/sackoba/exco/Exco-2024-2025.jpg?updatedAt=1734631542077',
    seatedMembers: [
      { name: 'Vigneshwaran Selvarathnam', position: 'Asst. Secretary' },
      { name: 'K.Sivaraja', position: 'Vice President' },
      { name: 'Clifford Ferguson', position: 'Gen. Secretary' },
      { name: 'Anurudha Ellepola', position: 'President' },
      { name: 'M.D.M. Rizkhan', position: 'Treasurer' },
      { name: 'Damith Hearath', position: 'Member of the Committee' },
      { name: 'Riyas Thajudeen', position: 'Member of the Committee' }
    ],
    standingMembers: [
      { name: 'Malinda Dissanayake', position: 'Coordinating Secretary' },
      { name: 'Riyaz Nilabdeen', position: 'Secretary Sports' },
      { name: 'Christy Shihan', position: 'Media Coordinator' },
      { name: 'Arshad Niyaz', position: 'Member of the Committee' },
      { name: 'Shifan Muhajireen', position: 'Member of the Committee' },
      { name: 'Jiffry M. Murshid', position: 'Coordinator Special Events' },
      { name: 'Thanuja Manoj', position: 'Asst. Treasurer' },
      { name: 'Milroy Perera', position: 'Secretary Social & Religious Affairs' }
    ]
  };

  // Display only key positions
  const keyPositions = [
    { name: 'Anurudha Ellepola', position: 'President' },
    { name: 'K.Sivaraja', position: 'Vice President' },
    { name: 'Clifford Ferguson', position: 'Gen. Secretary' },
    { name: 'M.D.M. Rizkhan', position: 'Treasurer' }
  ];

  return (
    <div className="bg-gray-50 py-12 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Current Executive Committee</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team leading SACKOBA Qatar for the year 2024-2025
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Exco Image */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src={currentExco.image} 
                alt="SACKOBA Qatar Executive Committee 2024-2025" 
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = '/fallback-image.jpg';
                  e.currentTarget.alt = 'Image not available';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-bold">Exco {currentExco.year}</h3>
              </div>
            </div>
          </motion.div>

          {/* Key Members */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Office Bearers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyPositions.map((member, index) => (
                  <motion.div
                    key={`${member.name}-${index}`}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <p className="font-medium text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.position}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link 
                  to="/exco" 
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  View Full Committee
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
