import { FC } from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { TimelineEvent } from '../components/about/TimelineEvent';
import { ContentSection } from '../components/about/ContentSection';
import { InitiativeCard } from '../components/about/InitiativeCard';
import { PageMeta } from '../components/shared/PageMeta';
import { ParallaxContentSection } from '../components/about/ParallaxContentSection';

export const About: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageMeta
        title="About SACKOBA Qatar | Journey & Initiatives"
        description="Learn about SACKOBA Qatar’s history, mission, and initiatives supporting community and scholarships."
        canonical="https://sackobaqatar.com/about"
        ogImage="https://sackobaqatar.com/images/og/about.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          'url': 'https://sackobaqatar.com/about',
          'name': 'About SACKOBA Qatar'
        }}
      />
      <AboutHero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <ParallaxContentSection>
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
          </ParallaxContentSection>

          <ParallaxContentSection>
            <ContentSection title="Our Initiatives">
            <div className="grid md:grid-cols-2 gap-8">
              <InitiativeCard
                title="Education Support"
                content="Through our 'Building Future' scholarship scheme, we support primary education for students at St. Anthony's College Kandy, helping them complete their secondary education."
              />

              <InitiativeCard
                title="Community Engagement"
                content="We actively participate in and contribute to events benefiting the Sri Lankan community in Qatar, fostering strong bonds and supporting our community abroad."
              />
            </div>
            </ContentSection>
          </ParallaxContentSection>

          <ParallaxContentSection>
            <ContentSection title="Our Mission">
            <div className="grid md:grid-cols-2 gap-8">
              <InitiativeCard
                title="Community Building"
                content="We strive to create and maintain strong bonds among Old Antonians in Qatar, fostering a supportive community away from home through various social and cultural events."
              />

              <InitiativeCard
                title="Growth & Support"
                content="Our association continues to grow, introducing new membership formats and organizing events that bring together Antonians from all walks of life in Qatar."
              />
            </div>
            </ContentSection>
          </ParallaxContentSection>
        </div>
      </div>
    </div>
  );
};
