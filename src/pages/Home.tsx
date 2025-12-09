import { FC } from 'react';
import { Hero } from '../components/home/Hero';
import { PageMeta } from '../components/shared/PageMeta';
import { HomeContent } from '../components/home/HomeContent';
import Anniversary from '../components/home/Anniversary';

export const Home: FC = () => (
  <div className="bg-white">
    <PageMeta
      title="SACKOBA Qatar | Join, Support, Attend"
      description="Alumni community of St. Anthony's College Kandy in Qatar. Join members, support scholarships, and attend upcoming events."
      canonical="https://sackobaqatar.com/"
      ogImage="https://sackobaqatar.com/images/og/home.jpg"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': "SACKOBA Qatar",
        'url': 'https://sackobaqatar.com/',
        'logo': 'https://sackobaqatar.com/logo.png',
        'sameAs': [
          'https://www.facebook.com/',
          'https://www.instagram.com/'
        ]
      }}
    />
    <Hero />
    <Anniversary />
    <HomeContent />
  </div>
);
