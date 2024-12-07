import { FC } from 'react';
import { motion } from 'framer-motion';

export const About: FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              St. Anthony's College Kandy Old Boys' Association - Qatar (SACKOBA Qatar) was formed on 
              September 28th, 2009, by Aloy Cooray and Manoharan Arasu. They initially gathered a 
              group of 8 Old Antonians in Doha, leading to the formation of the association.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              SACKOBA Qatar aims to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Foster fellowship among Old Antonians in Qatar</li>
              <li>Support our alma mater, St. Anthony's College</li>
              <li>Promote educational and social activities</li>
              <li>Preserve and promote Antonian values and traditions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Our Founders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Aloy Cooray</h3>
                <p className="text-gray-600">Co-founder</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Manoharan Arasu</h3>
                <p className="text-gray-600">Co-founder</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Our Journey</h2>
            <p className="text-gray-600 mb-6">
              Starting with just 8 members in 2009, SACKOBA Qatar has grown into a vibrant community
              of Old Antonians in Qatar. Through various events, social gatherings, and initiatives,
              we continue to strengthen the bonds between our members while supporting our alma mater.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
