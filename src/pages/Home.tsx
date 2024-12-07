import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home: FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to SACKOBA Qatar
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              St. Anthony's College Kandy Old Boys' Association - Qatar, established in 2009,
              bringing together Antonian alumni in Qatar to foster fellowship and support our alma mater.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/about"
                className="btn btn-primary"
              >
                Learn More About Us
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary"
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* New T-Shirt Campaign Announcement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-accent-500/20"
            >
              <div className="bg-accent-500/10 p-2 text-accent-600 text-sm font-medium text-center">
                New Announcement
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full mb-3">
                  Limited Edition
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  OBA T-Shirt Campaign 2024
                </h3>
                <p className="text-gray-600 mb-2 text-sm">
                  January 15 - February 15, 2024
                </p>
                <p className="text-gray-700 mb-4">
                  Show your Antonian pride with our exclusive commemorative t-shirts. Premium quality with elegant design featuring the college crest.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-accent-600 font-semibold">QAR 100</span>
                  <Link 
                    to="/merchandise" 
                    className="inline-flex items-center text-sm font-medium text-accent-600 hover:text-accent-700"
                  >
                    Order Now 
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  SACKOBA Qatar Web Launch
                </h3>
                <p className="text-gray-600 mb-4">
                  March 15th, 2018
                </p>
                <p className="text-gray-700">
                  The new website was launched with a fresh look, improved design, and mobile optimization.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/news" className="btn btn-primary">
              View All Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Video Gallery Preview */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                {/* Video thumbnail placeholder */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  SACKOBA Q 10th Year Anniversary
                </h3>
                <p className="text-gray-600">
                  Duration: 01:44
                </p>
              </div>
            </motion.div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/videos" className="btn btn-primary">
              View All Videos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
