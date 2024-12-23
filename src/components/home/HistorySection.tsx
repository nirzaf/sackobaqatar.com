import { FC } from 'react';
import { motion } from 'framer-motion';

export const HistorySection: FC = () => (
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
              <div className="flex-grow max-w-[350px]">
                <h4 className="font-bold text-xl mb-2 text-white group-hover:text-white/90 transition-colors">Website Launch</h4>
                <p className="text-white/95 leading-relaxed font-medium">
                  Launch of <span className="text-white font-semibold">sackobaqatar.org</span> with improved design and mobile optimization
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
);
