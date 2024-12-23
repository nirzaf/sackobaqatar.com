import { FC } from 'react';
import { FeatureCard } from './FeatureCard';
import { ProjectsIcon, CommitteeIcon, MembershipIcon } from './FeatureIcons';

const features = [
  {
    title: "Projects & Assistance",
    description: "SACKOBA is committed to assist the management in the highly complex operation of running the School.",
    icon: <ProjectsIcon />,
    gradient: "bg-gradient-to-br from-[#541D67] to-[#9A78AB]",
  },
  {
    title: "The Committee",
    description: "We perpetuate the tradition of the Alma Mater beyond the precincts of the classroom.",
    icon: <CommitteeIcon />,
    gradient: "bg-gradient-to-br from-[#B62D71] to-[#9A78AB]",
    delay: 0.2,
  },
  {
    title: "Membership",
    description: "Please fill the membership form and send the same to The Secretary via email / post.",
    icon: <MembershipIcon />,
    gradient: "bg-gradient-to-br from-[#9A78AB] to-[#5B4886]",
    delay: 0.4,
  },
];

export const FeaturesSection: FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    {features.map(feature => (
      <FeatureCard key={feature.title} {...feature} />
    ))}
  </div>
);
