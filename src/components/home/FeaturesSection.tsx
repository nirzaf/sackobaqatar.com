import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { ProjectsIcon, CommitteeIcon, MembershipIcon } from '../shared/icons';
import { Feature } from '@/types/components/home';

const features: Feature[] = [
  {
    title: "Projects & Assistance",
    description: "SACKOBA is committed to assist the management in the highly complex operation of running the School.",
    IconComponent: ProjectsIcon,
    gradient: "bg-gradient-to-br from-[#541D67] to-[#9A78AB]",
    delay: 0
  },
  {
    title: "The Committee",
    description: "We perpetuate the tradition of the Alma Mater beyond the precincts of the classroom.",
    IconComponent: CommitteeIcon,
    gradient: "bg-gradient-to-br from-[#B62D71] to-[#9A78AB]",
    delay: 0.2
  },
  {
    title: "Membership",
    description: "Please fill the membership form and send the same to The Secretary via email / post. Click here to download the membership form.",
    IconComponent: MembershipIcon,
    gradient: "bg-gradient-to-br from-[#9A78AB] to-[#5B4886]",
    delay: 0.4,
    titleLink: "https://workdrive.zohoexternal.com/file/5s3n9011971058c1e465a90bbb872188356b6",
    link: {
      text: "membership form",
      url: "https://workdrive.zohoexternal.com/file/5s3n9011971058c1e465a90bbb872188356b6"
    }
  }
];

export const FeaturesSection: FC = () => (
  <div className="flex flex-col items-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          Icon={feature.IconComponent}
          gradient={feature.gradient}
          delay={feature.delay}
          link={feature.link}
          titleLink={feature.titleLink}
        />
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Link
        to="/membership-terms"
        className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-lg
          shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-8
          text-lg md:text-xl"
      >
        Become a Member
      </Link>
    </motion.div>
  </div>
);
