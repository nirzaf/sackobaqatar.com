import { FC, memo } from 'react';
import { motion } from 'framer-motion';

interface NotablePersonProps {
  name: string;
  role: string;
  period: string;
  image?: string;
  description: string;
  achievements?: string[];
}

export const NotablePerson: FC<NotablePersonProps> = memo(({
  name,
  role,
  period,
  image,
  description,
  achievements
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <div className="md:flex">
        {image && (
          <div className="md:w-1/3 relative overflow-hidden">
            <div className="aspect-w-4 aspect-h-5">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent md:hidden" />
          </div>
        )}
        
        <div className="md:w-2/3 p-6 relative">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-[#541D67] mb-2">{name}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 bg-[#F8F6F9] text-[#B62D71] text-sm font-medium rounded-full">
                {role}
              </span>
              <span className="px-3 py-1 bg-[#F8F6F9] text-[#9A78AB] text-sm font-medium rounded-full">
                {period}
              </span>
            </div>
          </div>

          <p className="text-[#5B4886] mb-4 leading-relaxed">
            {description}
          </p>

          {achievements && achievements.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-[#541D67] mb-3">Key Achievements</h4>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 text-[#5B4886]"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B62D71] flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
});
