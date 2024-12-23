import { FC } from 'react';

export const BackgroundEffects: FC = () => (
  <>
    {/* Primary Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-primary-300/5" />
    
    {/* Blur Effects */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary-300/5 rounded-full blur-3xl" />
      <div className="absolute top-40 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-primary-400/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 sm:bottom-20 left-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary-500/3 rounded-full blur-3xl" />
    </div>
    
    {/* Light Effects */}
    <div className="absolute inset-0 bg-white/40 mix-blend-soft-light pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-60" />
    
    {/* Bottom Gradient */}
    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-24 bg-gradient-to-b from-transparent to-white" />
  </>
);
