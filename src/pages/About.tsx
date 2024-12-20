import { FC } from 'react';
import { motion } from 'framer-motion';

const AboutHero: FC = () => (
  <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-[#541D67] to-[#B62D71] opacity-90" />
    <div 
      className="absolute inset-0 opacity-20"
      style={{ 
        backgroundImage: 'url("https://ik.imagekit.io/sackoba/MainBuildingWithGround.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
    <div className="relative z-10 flex flex-col items-center">
      <motion.img 
        src="https://ik.imagekit.io/sackoba/sack_badge_color_512X512.png"
        alt="SACKOBA Logo"
        className="w-32 h-32 mb-4 filter brightness-110 contrast-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        style={{
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <motion.h2 
        className="text-4xl md:text-3xl font-bold text-white mb-2 font-old-english text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        About SACKOBA Qatar
      </motion.h2>
      <motion.p
        className="text-xl text-white/90 text-center max-w-2xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        A Legacy of Brotherhood and Excellence Since 2009
      </motion.p>
    </div>
  </section>
);

const TimelineEvent: FC<{ year: string; title: string; content: string }> = ({ year, title, content }) => (
  <motion.div 
    className="relative pl-8 pb-8 border-l-2 border-primary-200 last:border-l-0"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500" />
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <span className="text-primary-600 font-semibold">{year}</span>
      <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </motion.div>
);

const ContentSection: FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <motion.div 
    className="mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold text-primary-800 mb-6 text-center">{title}</h2>
    {children}
  </motion.div>
);

export const About: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <AboutHero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <ContentSection title="Our Journey">
            <div className="space-y-8">
              <TimelineEvent
                year="2009"
                title="Formation of SACKOBA Qatar"
                content="St. Anthony's College Kandy, Old Boys' Association of Qatar was formed on September 28th, 2009. The inaugural meeting brought together 8 Old Antonians, establishing the foundation with Aloy Cooray as president, Manoharan Arasu as secretary, and Saffan Mohammed as treasurer."
              />
              
              <TimelineEvent
                year="2010"
                title="First Gathering & Re-union"
                content="On June 4th, 2010, SACKOBA Qatar organized their first major gathering with 25 members, featuring a memorable Re-union boat trip that set the foundation for future social and charity events."
              />
              
              <TimelineEvent
                year="2010"
                title="Constitution & Executive Committee"
                content="The SACKOBA Qatar constitution, drafted by Aloy J. Cooray & Riyas Tajudeen, received approval from Rev. Fr. Titus Rodrigo. The first executive committee was elected for the financial year 2010, led by Aloy Cooray."
              />
              
              <TimelineEvent
                year="2010"
                title="Al-Ishan Hotel Event"
                content="In October 2010, a grand event was held at Al-Ishan Hotel, Doha, attended by 40 members with Rev. Fr. Vincent Wijesuriya from Dubai as chief guest, followed by a gala dinner."
              />

              <TimelineEvent
                year="2010"
                title="Milestones"
                content="November 2010: Annual trip to Al-Shamal Beach during Eid holidays. December 21st: SACKOBA Qatar officially affiliated with the Sri Lankan embassy in Qatar."
              />

              <TimelineEvent
                year="2011"
                title="Annual General Meeting"
                content="The AGM was held at Mercure Grand Hotel, Doha, where Gihan Rodrigo and Riyas Thajudeen were honored for their dedication to the association."
              />

              <TimelineEvent
                year="2012"
                title="Sporting Achievement"
                content="SACKOBA Qatar achieved a significant milestone by winning the Doha Lions Cricket Champions Trophy."
              />

              <TimelineEvent
                year="2013"
                title="Sports Success"
                content="The association continued its sporting excellence by becoming runner-up in the Doha Lions Tag Rugby Tournament."
              />

              <TimelineEvent
                year="Present"
                title="Growth & Impact"
                content="Membership has grown to 81 members, including honorary memberships for past teachers. The association launched the 'Building Future' scholarship scheme and actively participates in Sri Lankan community events in Qatar."
              />
            </div>
          </ContentSection>

          <ContentSection title="Our Initiatives">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-primary-700 mb-3">Education Support</h3>
                <p className="text-gray-600">
                  Through our 'Building Future' scholarship scheme, we support primary education for students at St. Anthony's College Kandy, helping them complete their secondary education.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-primary-700 mb-3">Community Engagement</h3>
                <p className="text-gray-600">
                  We actively participate in and contribute to events benefiting the Sri Lankan community in Qatar, fostering strong bonds and supporting our community abroad.
                </p>
              </motion.div>
            </div>
          </ContentSection>

          <ContentSection title="Our Mission">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-primary-700 mb-3">Community Building</h3>
                <p className="text-gray-600">
                  We strive to create and maintain strong bonds among Old Antonians in Qatar, fostering a supportive community away from home through various social and cultural events.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-primary-700 mb-3">Growth & Support</h3>
                <p className="text-gray-600">
                  Our association continues to grow, introducing new membership formats and organizing events that bring together Antonians from all walks of life in Qatar.
                </p>
              </motion.div>
            </div>
          </ContentSection>

          <div className="text-center mt-16">
            <motion.div
              className="inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-old-english text-primary-700 mb-2">Lux De Coelo</p>
              <p className="text-sm text-gray-500">Light From Heaven</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};