import { FC } from 'react';
import { Hero } from '../components/home/Hero';
import { HomeContent } from '../components/home/HomeContent';

export const Home: FC = () => (
  <div className="bg-white">
    <Hero />
    <HomeContent />
  </div>
);