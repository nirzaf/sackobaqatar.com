import { ReactNode } from 'react';

export interface NavItem {
  name: string;
  href: string;
}

export interface NavLogoProps {
  logoUrl: string;
  logoAlt: string;
  dimensions: {
    width: number;
    height: number;
  }
}

export interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
}

export interface NavMenuProps {
  items: NavItem[];
  currentPath: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  currentPath: string;
  logoProps: NavLogoProps;
}

export interface NavbarContainerProps {
  children: ReactNode;
  isScrolled: boolean;
} 