import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  HeroSection,
  NewsCard,
  VideoCard,
  Section
} from '../components/home';

export const Home: FC = () => {
  return (
    <div className="bg-white">
      <HeroSection
        title="Welcome to SACKOBA Qatar"
        description="St. Anthony's College Kandy Old Boys' Association - Qatar, established in 2009, bringing together Antonian alumni in Qatar to foster fellowship and support our alma mater."
      />

      <Section title="Latest Updates">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NewsCard
            tag="New Announcement"
            tagType="limited"
            title="OBA T-Shirt Campaign 2024"
            date="January 15 - February 15, 2024"
            description="Show your Antonian pride with our exclusive commemorative t-shirts. Premium quality with elegant design featuring the college crest."
            price="QAR 100"
            link={{
              text: "Order Now",
              to: "/merchandise"
            }}
          />

          <NewsCard
            title="SACKOBA Qatar Web Launch"
            date="March 15th, 2018"
            description="The new website was launched with a fresh look, improved design, and mobile optimization."
          />
        </div>
        <div className="mt-8 text-center">
          <Link to="/news" className="btn btn-primary">
            View All Updates
          </Link>
        </div>
      </Section>

      <Section title="Featured Videos">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <VideoCard
            title="SACKOBA Q 10th Year Anniversary"
            duration="01:44"
          />
        </div>
        <div className="mt-8 text-center">
          <Link to="/videos" className="btn btn-primary">
            View All Videos
          </Link>
        </div>
      </Section>
    </div>
  );
};
