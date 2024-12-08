import { FC, memo } from 'react';
import { ContactInfoProps } from './types';
import { ContactSection } from './ContactSection';
import { SocialLinks } from './SocialLinks';

export const ContactInfo: FC<ContactInfoProps> = memo(({ title, description }) => {
  return (
    <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-4 text-base text-gray-500">{description}</p>

      <div className="mt-8 space-y-6">
        <ContactSection
          icon={
            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          title="Address"
          content="123 Main Street, Doha, Qatar"
        />

        <ContactSection
          icon={
            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
          title="Phone"
          content="+974 1234 5678"
        />

        <ContactSection
          icon={
            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          title="Email"
          content="info@sackobaqatar.com"
        />
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
        <SocialLinks />
      </div>
    </div>
  );
});
