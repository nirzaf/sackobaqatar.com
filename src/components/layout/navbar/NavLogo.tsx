import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { NavLogoProps } from './types';

export const NavLogo: FC<NavLogoProps> = memo(({ logoUrl, logoAlt, dimensions }) => (
  <div className="flex lg:flex-1">
    <Link 
      to="/" 
      className="flex items-center space-x-2 transition-opacity hover:opacity-90"
    >
      <div className="relative w-[48px] h-[48px] -mt-1 -mb-1">
        <div className="absolute inset-0 bg-white/50 rounded-full blur-xl"></div>
        <div className="absolute inset-0 bg-white/40 rounded-full blur-lg"></div>
        <div className="absolute inset-0 bg-white/30 rounded-full blur-md"></div>
        <img 
          src={logoUrl}
          alt={logoAlt}
          width={dimensions.width}
          height={dimensions.height}
          className="object-contain w-full h-full relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
        />
      </div>
      <div className="hidden md:block ml-3">
        <p className="relative text-lg font-bold text-[#000000]">
          <span className="absolute -inset-1 bg-white/50 blur-md rounded-lg"></span>
          <span className="absolute -inset-2 bg-white/30 blur-lg rounded-lg"></span>
          <span className="absolute -inset-3 bg-white/20 blur-xl rounded-lg"></span>
          <span className="relative z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
            OBA Qatar
          </span>
        </p>
      </div>
    </Link>
  </div>
));

NavLogo.displayName = 'NavLogo'; 