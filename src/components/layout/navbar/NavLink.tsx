import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavLinkProps } from './types';

export const NavLink: FC<NavLinkProps> = memo(({ item, isActive }) => (
  <Link
    key={item.name}
    to={item.href}
    className={`relative text-sm font-medium py-1.5 transition-all duration-300 ${
      isActive 
        ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]' 
        : 'text-white/90 hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]'
    }`}
  >
    {item.name}
    {isActive && (
      <motion.div
        layoutId="navbar-indicator"
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.7)]"
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    )}
  </Link>
));

NavLink.displayName = 'NavLink'; 