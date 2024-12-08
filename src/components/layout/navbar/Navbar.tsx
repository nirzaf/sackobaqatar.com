import { FC, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { NavbarContainer } from './NavbarContainer';
import { NavLogo } from './NavLogo';
import { NavMenu } from './NavMenu';
import { MobileMenu } from './MobileMenu';
import { LOGO_URL, LOGO_ALT, LOGO_DIMENSIONS } from '../../../assets/images/logo';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'News', href: '/news' },
  { name: 'Gallery', href: '/videos' },
  { name: 'History', href: '/history' },
  { name: 'Exco', href: '/exco' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoProps = {
    logoUrl: LOGO_URL,
    logoAlt: LOGO_ALT,
    dimensions: LOGO_DIMENSIONS.navbar
  };

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <NavLogo {...logoProps} />
      <NavMenu items={navigation} currentPath={location.pathname} />
      
      <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={navigation}
        currentPath={location.pathname}
        logoProps={logoProps}
      />
    </NavbarContainer>
  );
}; 