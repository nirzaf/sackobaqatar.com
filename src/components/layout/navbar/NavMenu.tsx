import { FC, memo } from 'react';
import { NavMenuProps } from './types';
import { NavLink } from './NavLink';

export const NavMenu: FC<NavMenuProps> = memo(({ items, currentPath }) => (
  <div className="hidden lg:flex lg:gap-x-8">
    <div className="bg-[#541D67]/60 backdrop-blur-lg rounded-full px-6 py-2 flex gap-x-8 
                  shadow-[0_0_15px_rgba(0,0,0,0.2)] border border-[#9A78AB]/20">
      {items.map((item) => (
        <NavLink 
          key={item.name}
          item={item}
          isActive={currentPath === item.href}
        />
      ))}
    </div>
  </div>
));

NavMenu.displayName = 'NavMenu'; 