import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { ProjectsIcon, CommitteeIcon, MembershipIcon } from '../shared/icons';
import { Feature } from '@/types/components/home';

const features: Feature[] = [
  {
    title: "Projects & Assistance",
    description: "SACKOBA is committed to assist the management in the highly complex operation of running the School. Through our 'Building Future' scholarship scheme, we enable access to primary education for students at St. Anthony's College Kandy. We actively participate in various developmental projects and community initiatives, working alongside other organizations for the benefit of the Sri Lankan community in Qatar.",
    IconComponent: ProjectsIcon,
    gradient: "bg-gradient-to-br from-[#541D67] to-[#9A78AB]",
    delay: 0
  },
  {
    title: "The Committee",
    description: "We perpetuate the tradition of the Alma Mater beyond the precincts of the classroom. Founded in 2009, our association has grown tremendously through the dedication of successive committees and loyal Antonians. From humble beginnings with just 10 members, we've expanded to over 80 members, organizing numerous successful events including charity initiatives, sports tournaments, and social gatherings that strengthen our community bonds.",
    IconComponent: CommitteeIcon,
    gradient: "bg-gradient-to-br from-[#B62D71] to-[#9A78AB]",
    delay: 0.2
  },
  {
    title: "Membership",
    description: "Join our thriving community of Antonians in Qatar! Our membership format provides recognition in the OBA parent body back in Sri Lanka. Past teachers of the alma mater can also join as honorary members. We organize regular social events, including Annual General Meetings and family gatherings, fostering strong connections among Antonians.",
    IconComponent: MembershipIcon,
    gradient: "bg-gradient-to-br from-[#9A78AB] to-[#5B4886]",
    delay: 0.4,
    link: {
      text: "View Membership Terms",
      url: "/membership-terms"
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * FeaturesSection component - Displays feature cards in a responsive grid
 */
export const FeaturesSection: FC = () => (
  <motion.div
    className="w-full relative"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 px-4 sm:px-6 lg:px-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="h-full transform hover:z-20"
        >
          <FeatureCard
            title={feature.title}
            description={feature.description}
            Icon={feature.IconComponent}
            gradient={feature.gradient}
            delay={feature.delay}
            link={feature.link}
          />
        </motion.div>
      ))}
    </div>

    <motion.div
      className="flex justify-center w-full px-4"
      variants={itemVariants}
    >
      <Link
        to="/membership-terms#membership-title"
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white 
          transition-all duration-300 ease-in-out rounded-xl overflow-hidden
          bg-gradient-to-r from-[#B62D71] via-[#541D67] to-[#5B4886] 
          hover:shadow-lg hover:shadow-[#B62D71]/20"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 
          transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        <span className="relative inline-flex items-center">
          Become a Member
          <svg 
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </svg>
        </span>
      </Link>
    </motion.div>
  </motion.div>
);
