import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { fadeInUp } from './interfaces';

export const AboutSection: FC = memo(() => (
  <Section title="About Us">
    <div className="max-w-4xl mx-auto">
      <motion.p 
        className="text-lg text-[#000000]/80 text-center mb-8"
        {...fadeInUp}
      >
        St. Anthony's College Kandy Old Boys' Association - Qatar (SACKOBA Qatar) was formed on September 28th, 2009, by Aloy Cooray and Manoharan Arasu. They initially gathered a group of 8 Old Antonians in Doha, leading to the formation of the association.
      </motion.p>
      <div className="text-center">
        <Link 
          to="/about"
          className="inline-flex items-center px-6 py-3 border-2 border-[#541D67] text-[#541D67] rounded-full hover:bg-[#541D67] hover:text-white transition-colors"
        >
          Read Our Story
          <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </Section>
));
