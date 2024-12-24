import { FC } from 'react';
import { motion } from 'framer-motion';

export const CollegeDetailsSection: FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const paragraphs = [
    "St. Anthony's College, Kandy, is a leading Sri Lankan school with a history of academic and overall growth.",
    "Established in 1854, it's known for its Catholic ethos, welcoming diverse students.",
    "In scenic Kandy, the college fosters intellectual and character development, plus service.",
    "Its curriculum balances academics and extracurriculars, producing successful alumni globally.",
    "Known for strong sports, especially cricket, St. Anthony's College upholds its legacy as a learning center with values."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-white to-purple-50 rounded-lg shadow-lg p-6 lg:p-8 mb-16"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src="https://ik.imagekit.io/sackoba/sack_by_vidura_vishwa_03.jpg?updatedAt=1734611454619"
              alt="St. Anthony's College"
              className="w-full h-auto rounded-lg transform"
            />
          </motion.div>
        </div>
        <div className="lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h3
              variants={textVariants}
              custom={0}
              className="text-3xl font-bold bg-gradient-to-r from-[#541D67] to-purple-600 bg-clip-text text-transparent mb-6"
            >
              About St. Anthony's College
            </motion.h3>
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={textVariants}
                  custom={index + 1}
                  className="text-gray-700 leading-relaxed border-l-4 border-purple-200 pl-4 hover:border-purple-400 transition-colors duration-300"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
