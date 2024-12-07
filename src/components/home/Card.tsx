import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CardProps, fadeInUp } from './interfaces';

export const Card: FC<CardProps> = memo(({ 
  title, 
  description, 
  date, 
  tag, 
  link, 
  className = '' 
}) => (
  <motion.div 
    className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
    {...fadeInUp}
  >
    <div className="p-6">
      {tag && (
        <span className="inline-block px-3 py-1 text-sm font-semibold text-[#B62D71] bg-[#B62D71]/10 rounded-full mb-3">
          {tag}
        </span>
      )}
      <h3 className="text-xl font-semibold text-[#5B4886] mb-2">{title}</h3>
      {date && (
        <p className="text-sm text-[#9A78AB] mb-3">{date}</p>
      )}
      {description && (
        <p className="text-[#000000]/80 mb-4">{description}</p>
      )}
      {link && (
        <Link 
          to={link.to}
          className="inline-flex items-center text-[#B62D71] hover:text-[#541D67] transition-colors"
        >
          {link.text}
          <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      )}
    </div>
  </motion.div>
));
