import { FC } from 'react';
import {
  HeroSection,
  ContentSection,
  Timeline,
  timelineEvents
} from '../components/about';

export const About: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection
        title="Legacy of Brotherhood"
        subtitle="St. Anthony's College Kandy Old Boys' Association Qatar - A Legacy of Brotherhood"
      />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ContentSection title="Our Foundation">
            <p className="text-primary-500 leading-relaxed">
              St. Anthony&apos;s College Kandy, Old Boys&apos; Association of Qatar was formed in 2009 by Aloy Cooray accompanied with Manoharan Arasu. Their vision of creating a social gathering in Qatar materialized on September 28th, 2009, with the first meeting including eight Old Antonians in Doha.
            </p>
            <p className="text-primary-500 leading-relaxed">
              The inaugural meeting saw Aloy Cooray elected as president, Manoharan Arasu as secretary, and Saffan Mohammed as treasurer. Committee members included Saliya Tennakoon, Rizkhan Dhalan, Mohammed Shafraz, T.K Hanan, and Anurudha Ellepola.
            </p>
          </ContentSection>

          <Timeline events={timelineEvents} />

          <ContentSection title="Present Day">
            <p className="text-primary-500 leading-relaxed">
              Today, SACKOBA Qatar continues its mission of building supportive social connections among Sri Lankans & Old Antonians residing in Qatar. We facilitate united action to support the College and the parent body in various projects.
            </p>
            <p className="text-primary-500 leading-relaxed">
              Our &apos;Building Future&apos; scholarship scheme enables access to primary education for students at St. Anthony&apos;s College Kandy. The Association actively participates in events organized by and for the benefit of the Sri Lankan community in Qatar.
            </p>
            <div className="text-center mt-8">
              <p className="text-xl font-display font-medium text-primary-700">Lux De Coelo</p>
            </div>
          </ContentSection>
        </div>
      </div>
    </div>
  );
};