import { FC } from 'react';
import { Tab } from '@headlessui/react';
import { clsx } from 'clsx';
import { ExcoYear } from './types';
import { MemberSection } from './MemberSection';

interface YearTabsProps {
  years: ExcoYear[];
}

export const YearTabs: FC<YearTabsProps> = ({ years }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-primary/10 p-1 mb-8">
        {years.map((year) => (
          <Tab
            key={year.year}
            className={({ selected }) =>
              clsx(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2',
                selected
                  ? 'bg-primary text-white shadow'
                  : 'text-primary hover:bg-white/[0.12] hover:text-primary'
              )
            }
          >
            {year.year}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {years.map((year, idx) => (
          <Tab.Panel key={idx}>
            <div className="space-y-12">
              <MemberSection title="Seating Members" members={year.members.seating} />
              <MemberSection title="Standing Members" members={year.members.standing} />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
