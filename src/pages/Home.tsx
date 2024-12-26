import { FC } from 'react';
import { Hero } from '../components/home/Hero';
import { HomeContent } from '../components/home/HomeContent';
import Anniversary from '../components/home/Anniversary';

export const Home: FC = () => (
  <div className="bg-white">
    <Hero />
    <Anniversary />
    <HomeContent />
  </div>
);