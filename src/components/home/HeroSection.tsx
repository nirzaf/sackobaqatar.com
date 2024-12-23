import { FC, memo } from 'react';
import { HeroSectionProps } from './types';
import { BackgroundEffects } from './hero/BackgroundEffects';
import { HeroContent } from './hero/HeroContent';

export const HeroSection: FC<HeroSectionProps> = memo(({ title, description }) => (
  <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
    <BackgroundEffects />
    <HeroContent title={title} description={description} />
  </section>
));
