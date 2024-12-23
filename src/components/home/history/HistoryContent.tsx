import { FC } from 'react';
import { motion } from 'framer-motion';

export const HistoryContent: FC = () => (
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
);
