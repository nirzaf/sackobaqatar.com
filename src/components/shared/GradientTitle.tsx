import { FC, ReactNode } from 'react';

interface GradientTitleProps {
  children: ReactNode;
  className?: string;
}

export const GradientTitle: FC<GradientTitleProps> = ({ children, className = '' }) => (
  <h2 className={`text-4xl font-bold mb-12 bg-gradient-to-r from-[#541D67] to-[#B62D71] bg-clip-text text-transparent
    drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] relative inline-block ${className}`}>
    {children}
    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#541D67] to-[#B62D71]"></div>
  </h2>
);
