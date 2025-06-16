import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';
import { navigationItems } from './navigationItems';

export const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 py-1">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-2 lg:px-4">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <NavLink to="/" className="p-0">
            <span className="text-xs font-bold text-primary-900 leading-none">SACKOBA</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-xs font-semibold leading-none transition-colors ${
                  isActive ? 'text-primary-900' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-0.5 text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};