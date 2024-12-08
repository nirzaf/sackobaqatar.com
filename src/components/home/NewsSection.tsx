import { FC, memo } from 'react';
import { Section } from './Section';
import { Card } from './Card';

export const NewsSection: FC = memo(() => (
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
));
