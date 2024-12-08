import { FC, memo } from 'react';
import { NavbarContainerProps } from './types';

export const NavbarContainer: FC<NavbarContainerProps> = memo(({ children, isScrolled }) => (
  <header 
    className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-[#9A78AB] via-[#541D67] to-[#5B4886] shadow-lg' 
        : 'bg-gradient-to-r from-[#9A78AB]/95 via-[#541D67]/95 to-[#5B4886]/95 backdrop-blur-sm'
    }`}
  >
    <nav className="container mx-auto px-6 lg:px-8" aria-label="Global">
      <div className="flex h-16 items-center justify-between">
        {children}
      </div>
    </nav>
  </header>
));

NavbarContainer.displayName = 'NavbarContainer'; 