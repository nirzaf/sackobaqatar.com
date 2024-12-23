import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import ImageGallery from '../shared/ImageGallery';
import { Link } from 'react-router-dom';
import { NoticeBoard } from './NoticeBoard';

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
                <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 14H10V21H3V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 3H10V10H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 3H21V10H14V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Membership</h3>
            <p className="text-white/90 leading-relaxed font-medium">Please fill the membership form and send the same to The Secretary via email / post.</p>
          </motion.div>
        </div>

        <NoticeBoard />

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-4"
          >
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#541D67] to-[#B62D71] bg-clip-text text-transparent
              drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] relative inline-block">
              The Beginning & The History
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#541D67] to-[#B62D71]"></div>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-left space-y-6"
              >
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="font-semibold text-[#541D67]">St. Anthony's College Kandy Old Boys' Association - Qatar</span>
                  (SACKOBA Qatar) was formed on <span className="font-semibold">September 28th, 2009</span>, by
                  <span className="text-[#B62D71] font-semibold"> Aloy Cooray</span> and
                  <span className="text-[#B62D71] font-semibold"> Manoharan Arasu</span>. They initially gathered a group of
                  8 Old Antonians in Doha, leading to the formation of the association.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Since then, SACKOBA Qatar has grown into a vibrant community, marking several milestones in its journey.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#541D67] to-[#B62D71] p-8 rounded-xl text-white shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                <h3 className="text-3xl font-bold mb-8 text-white relative">
                  Key Milestones
                  <div className="absolute -bottom-3 left-0 w-16 h-1 bg-white/30 rounded-full"></div>
                </h3>

                <div className="space-y-8 relative">
                  <motion.div
                    className="flex items-center space-x-6 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-white/10 group-hover:bg-white/20 rounded-2xl flex flex-col items-center justify-center transform group-hover:scale-110 transition-all duration-300 border border-white/20">
                      <span className="text-2xl font-bold">18</span>
                      <span className="text-xs text-white/70">2018</span>
                    </div>
                    <div className="flex-grow max-w-[350px">
                      <h4 className="font-bold text-xl mb-2 text-white group-hover:text-white/90 transition-colors">Website Launch</h4>
                      <p className="text-white/95 leading-relaxed font-medium">
                        Launch of <span className="text-white font-semibold">sackobaqatar.org</span> with improved design and mobile optimization
                      </p>
                    </div>
                  </motion.div>

                  <div className="w-px h-6 bg-white/20 ml-8"></div>

                  <motion.div
                    className="flex items-center space-x-6 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-white/10 group-hover:bg-white/20 rounded-2xl flex flex-col items-center justify-center transform group-hover:scale-110 transition-all duration-300 border border-white/20">
                      <span className="text-2xl font-bold">19</span>
                      <span className="text-xs text-white/70">2019</span>
                    </div>
                    <div className="flex-grow max-w-[350px]">
                      <h4 className="font-bold text-xl mb-2 text-white group-hover:text-white/90 transition-colors">10th Anniversary</h4>
                      <p className="text-white/95 leading-relaxed font-medium">
                        "Decades Rewind: A Trip Down Memory Lane" celebration
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <p className="text-lg text-gray-800 leading-relaxed italic">
                Today, SACKOBA Qatar continues to strengthen the bonds between Antonian alumni in Qatar,
                organizing various events and activities that bring together our community while supporting our alma mater.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#541D67] to-[#B62D71] bg-clip-text text-transparent
              drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] relative inline-block"
          >
            St. Anthony's College & Its Beauty
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#541D67] to-[#B62D71]"></div>
          </motion.h2>
          <ImageGallery />
          <div className="text-center mt-8">
            <Link 
              to="/gallery" 
              className="inline-block px-8 py-3 bg-[#541D67] text-white font-semibold rounded-full hover:bg-[#B62D71] transition-colors"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
));
