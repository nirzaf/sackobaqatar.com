import { FC } from 'react';
import { motion } from 'framer-motion';
import type { NewsItem } from '../types';

const newsItems: NewsItem[] = [
  {
    title: 'SACKOBA Qatar Web Launch',
    date: 'March 15th, 2018',
    content: 'The new website was launched with a fresh look, improved design, and mobile optimization. It provides information about SACKOBA Qatar, St. Anthony\'s College, events, and images.',
    link: 'http://sackobaqatar.org'
  },
  // Add more news items here
];

export const News: FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Latest News</h1>

          <div className="grid gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    {item.date}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {item.content}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      Read More →
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
