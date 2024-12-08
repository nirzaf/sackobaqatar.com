import { FC } from 'react';
import { Hero } from '../components/home/Hero';
import { NewsSection } from '../components/home/NewsSection';
import { VideoSection } from '../components/home/VideoSection';
import { AboutSection } from '../components/home/AboutSection';

export const Home: FC = () => (
  <div className="bg-gradient-to-b from-[#F8F6F9] to-[#F8F6F9]">
    <Hero />
    <NewsSection />
    <VideoSection />
    <AboutSection />
  </div>
);