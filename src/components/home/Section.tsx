import { FC } from 'react';
import { SectionProps } from './types';

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
};
