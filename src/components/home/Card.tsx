import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CardProps, fadeInUp } from './interfaces';

export const Card: FC<CardProps> = ({ 
  title, 
  description, 
  date, 
  tag, 
  link
}) => (
  <motion.div 
    className="bg-background-primary rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    {...fadeInUp}
  >
    <div className="p-6">
      {tag && (
        <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-700 bg-primary-700/10 rounded-full mb-3">
          {tag}
        </span>
      )}
      <h3 className="text-xl font-semibold text-primary-500 mb-2">{title}</h3>
      {date && (
        <p className="text-sm text-primary-400 mb-3">{date}</p>
      )}
      {description && (
        <p className="text-text-body mb-4">{description}</p>
      )}
      {link && (
        <Link 
          to={link.to}
          className="inline-flex items-center text-primary-700 hover:text-primary-600 transition-colors"
        >
          {link.text}
          <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      )}
    </div>
  </motion.div>
);
