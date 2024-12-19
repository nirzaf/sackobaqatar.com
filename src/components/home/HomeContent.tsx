import { FC, memo } from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_01.jpg?updatedAt=1734611436610',
  'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_03.jpg?updatedAt=1734611454619',
  'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_10.jpg?updatedAt=1734611533327',
  'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_11.jpg?updatedAt=1734611533820',
  'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_08.jpg?updatedAt=1734611533720',
  'https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_09.jpg?updatedAt=1734611534185'
];

export const HomeContent: FC = memo(() => (
  <>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Projects & Assistance */}
          <motion.div 
            className="bg-gradient-to-br from-[#541D67] to-[#9A78AB] text-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300
              hover:translate-y-[-8px] group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 14H10V21H3V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 3H10V10H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 3H21V10H14V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Projects & Assistance</h3>
            <p className="text-white/90 leading-relaxed font-medium">SACKOBA is committed to assist the management in the highly complex operation of running the School.</p>
          </motion.div>

          {/* The Committee */}
          <motion.div 
            className="bg-gradient-to-br from-[#B62D71] to-[#9A78AB] text-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300
              hover:translate-y-[-8px] group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">The Committee</h3>
            <p className="text-white/90 leading-relaxed font-medium">We perpetuate the tradition of the Alma Mater beyond the precincts of the classroom.</p>
          </motion.div>

          {/* Membership */}
          <motion.div 
            className="bg-gradient-to-br from-[#9A78AB] to-[#5B4886] text-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300
              hover:translate-y-[-8px] group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Membership</h3>
            <p className="text-white/90 leading-relaxed font-medium">Please fill the membership form and send the same to The Secretary via email / post.</p>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 text-[#541D67]">The Beginning & The History</h2>
          <div className="text-lg text-gray-700 max-w-4xl mx-auto space-y-6">
            <p>
              St. Anthony's College Kandy Old Boys' Association - Qatar (SACKOBA Qatar) was formed on September 28th, 2009, 
              by Aloy Cooray and Manoharan Arasu. They initially gathered a group of 8 Old Antonians in Doha, leading to 
              the formation of the association.
            </p>
            <p>
              Since then, SACKOBA Qatar has grown into a vibrant community, marking several milestones including:
            </p>
            <ul className="list-disc text-left pl-8 space-y-2">
              <li>
                <span className="font-semibold">2018:</span> Launch of the new website sackobaqatar.org with improved design and mobile optimization
              </li>
              <li>
                <span className="font-semibold">2019:</span> Celebration of SACKOBA Qatar's 10th anniversary with "Decades Rewind: A Trip Down Memory Lane"
              </li>
            </ul>
            <p>
              Today, SACKOBA Qatar continues to strengthen the bonds between Antonian alumni in Qatar, organizing various events 
              and activities that bring together our community while supporting our alma mater.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#541D67]">St. Anthony's College & Its Beauty</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={image}
                  alt={`St. Anthony's College ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-[#541D67] text-white font-semibold rounded-full hover:bg-[#B62D71] transition-colors">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
));
