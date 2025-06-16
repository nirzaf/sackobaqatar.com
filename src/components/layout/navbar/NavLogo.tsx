import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { NavLogoProps } from './types';

export const NavLogo: FC<NavLogoProps> = memo(({ logoUrl, logoAlt, dimensions }) => (
  <div className="flex lg:flex-1">
    <Link 
      to="/" 
      className="flex items-center space-x-2 transition-opacity hover:opacity-90"
    >
      <div className="relative w-[32px] h-[32px]">
        <div className="absolute inset-0 bg-white/50 rounded-full blur-xl"></div>
        <div className="absolute inset-0 bg-white/40 rounded-full blur-lg"></div>
        <div className="absolute inset-0 bg-white/30 rounded-full blur-md"></div>
        <img 
          src={logoUrl}
          alt={logoAlt}
          width={dimensions.width}
          height={dimensions.height}
          className="object-contain w-full h-full relative z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] transition-all duration-200"
        />
      </div>
    </Link>
  </div>
));

NavLogo.displayName = 'NavLogo'; 