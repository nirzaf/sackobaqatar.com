import { FC, memo } from 'react';
import { ContactSectionProps } from './types';

export const ContactSection: FC<ContactSectionProps> = memo(({ icon, title, content }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0">{icon}</div>
      <div className="ml-3 text-base text-gray-500">
        <p className="font-medium text-gray-900">{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
});
