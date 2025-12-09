import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Navigation items configuration
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'News', href: '/news' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'History', href: '/history' },
  { name: 'Exco', href: '/exco' },
  { name: 'Contact', href: '/contact' },
];

/**
 * Enhanced Navbar with improved text visibility and mobile support
 */
export const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#0F0E40]/98 via-[#586992]/98 to-[#B80F8A]/98 shadow-xl backdrop-blur-md'
          : 'bg-gradient-to-r from-[#0F0E40]/95 via-[#586992]/95 to-[#B80F8A]/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-base md:text-lg font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                SACKOBA Qatar
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'text-white bg-white/25 shadow-lg backdrop-blur-sm border border-white/30'
                    : 'text-white hover:text-white hover:bg-white/15 hover:shadow-md border border-transparent hover:border-white/20'
                } drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none transition-colors duration-200 shadow-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6 drop-shadow-md" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 drop-shadow-md" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gradient-to-r from-[#0F0E40]/98 via-[#586992]/98 to-[#B80F8A]/98 border-t border-white/20 overflow-hidden backdrop-blur-md"
          >
            <div className="px-3 py-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-white/25 text-white shadow-lg backdrop-blur-sm border border-white/30'
                      : 'text-white hover:bg-white/15 hover:text-white hover:shadow-md border border-transparent'
                  } drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

Navbar.displayName = 'Navbar';
