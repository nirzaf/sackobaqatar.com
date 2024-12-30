import { FC, useState } from 'react';
import { Tab } from '@headlessui/react';
import { clsx } from 'clsx';
import { ExcoYear } from './types';
import { MemberSection } from './MemberSection';

interface YearTabsProps {
  years: ExcoYear[];
}

export const YearTabs: FC<YearTabsProps> = ({ years }) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  return (
        <div>
            <div className="flex space-x-1 rounded-xl bg-primary-50 p-1 mb-8">
            {years.map((year, index) => (
                <Tab
                    key={year.year}
                    as="button"
                    className={({ selected }) =>
                    clsx(
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-100 focus-visible:outline-none focus-visible:ring-2',
                        selected
                        ? 'bg-primary-600 text-white shadow hover:bg-primary-700'
                        : 'text-primary-600 bg-white hover:bg-primary-50/80 hover:text-primary-700'
                    )
                    }
                    onClick={() => setSelectedTabIndex(index)}
                >
                    {year.year}
                </Tab>
                ))}
            </div>
            <div>
                {years.map((year, index) => (
                    <div key={year.year} hidden={selectedTabIndex !== index}>
                        <div className="space-y-12">
                            <MemberSection title="Seating Members" members={year.members.seating} />
                            <MemberSection title="Standing Members" members={year.members.standing} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};