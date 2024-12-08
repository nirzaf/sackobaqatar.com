import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NewsCardProps } from './types';

export const NewsCard: FC<NewsCardProps> = ({
  tag,
  tagType = 'default',
  title,
  date,
  description,
  price,
  link
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-accent-500/20"
    >
      {tag && (
        <div className="bg-accent-500/10 p-2 text-accent-600 text-sm font-medium text-center">
          {tag}
        </div>
      )}
      <div className="p-6">
        {tagType === 'limited' && (
          <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full mb-3">
            Limited Edition
          </span>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-2 text-sm">{date}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        {(price || link) && (
          <div className="flex items-center justify-between">
            {price && <span className="text-accent-600 font-semibold">{price}</span>}
            {link && (
              <Link
                to={link.to}
                className="inline-flex items-center text-sm font-medium text-accent-600 hover:text-accent-700"
              >
                {link.text}
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
