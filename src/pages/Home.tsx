import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Section: FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <section className={`py-16 ${className}`}>
    <div className="container mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-[#541D67]"
        {...fadeInUp}
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

const Card: FC<{
  title: string;
  description?: string;
  date?: string;
  tag?: string;
  link?: { text: string; to: string };
  className?: string;
}> = ({ title, description, date, tag, link, className = '' }) => (
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
);

const VideoCard: FC<{ title: string; duration: string }> = ({ title, duration }) => (
  <motion.div 
    className="relative aspect-video bg-[#B1B3CE]/20 rounded-lg overflow-hidden group"
    {...fadeInUp}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-[#541D67] rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        </svg>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
      <h3 className="text-white font-medium">{title}</h3>
      <p className="text-white/80 text-sm">{duration}</p>
    </div>
  </motion.div>
);

export const Home: FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#F8F6F9] to-[#F8F6F9]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#F8F6F9]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F0F7] to-[#F0E6EC] opacity-95" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#E8E1F0]/30 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-[#F0E6EC]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#F5F0F7]/30 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Welcome to SACKOBA Qatar
          </motion.h1>
          <motion.p 
            className="text-xl text-black/90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            St. Anthony's College Kandy Old Boys' Association - Qatar, bringing together Antonian alumni since 2009
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link 
              to="/about"
              className="inline-block px-8 py-3 bg-white text-[#000000] font-semibold rounded-full hover:bg-[#B1B3CE] transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <Section title="Latest Updates">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            tag="New Announcement"
            title="SACKOBA Qatar Web Launch"
            date="March 15th, 2018"
            description="The new website was launched with a fresh look, improved design, and mobile optimization."
            link={{ text: "Read More", to: "/news" }}
          />
          <Card
            title="10 Years of Excellence"
            date="September 28th, 2019"
            description="Celebrating a decade of bringing together Antonian alumni in Qatar."
            link={{ text: "View Gallery", to: "/gallery" }}
          />
          <Card
            tag="Upcoming"
            title="Annual General Meeting 2024"
            date="Coming Soon"
            description="Join us for our annual gathering and election of new office bearers."
            link={{ text: "Register Now", to: "/events" }}
          />
        </div>
      </Section>

      {/* Video Gallery */}
      <Section title="Featured Videos" className="bg-[#B1B3CE]/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <VideoCard
            title="SACKOBA Q 10th Year Anniversary"
            duration="01:44"
          />
          <VideoCard
            title="TALONS SMASH 2018"
            duration="00:15"
          />
          <VideoCard
            title="Decades Rewind"
            duration="15:10"
          />
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/videos"
            className="inline-flex items-center px-6 py-3 bg-[#541D67] text-white rounded-full hover:bg-[#B62D71] transition-colors"
          >
            View All Videos
            <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* About Section */}
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
    </div>
  );
};
