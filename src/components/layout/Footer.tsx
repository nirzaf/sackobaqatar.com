import { FC } from 'react';
import { Link } from 'react-router-dom';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'News', href: '/news' },
    { name: 'Gallery', href: '/videos' },
    { name: 'History', href: '/history' },
    { name: 'Exco', href: '/exco' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export const Footer: FC = () => {
  return (
    <footer className="bg-primary-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-4">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-primary-200 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-3">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-primary-200 hover:text-white transition-colors duration-200">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Copyright - Center Aligned */}
        <p className="text-center text-sm text-primary-100 w-full">
          &copy; {new Date().getFullYear()} SACKOBA Qatar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
