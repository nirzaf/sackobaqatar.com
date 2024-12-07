import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGO_URL, LOGO_ALT, LOGO_DIMENSIONS } from '../../assets/images/logo';

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm' 
          : 'bg-white/0'
      }`}
    >
      <nav 
        className="container mx-auto px-6 lg:px-8" 
        aria-label="Global"
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link 
              to="/" 
              className="flex items-center space-x-2 transition-opacity hover:opacity-90"
            >
              <div className="relative w-[40px] h-[40px]">
                <img 
                  src={LOGO_URL}
                  alt={LOGO_ALT}
                  width={LOGO_DIMENSIONS.navbar.width}
                  height={LOGO_DIMENSIONS.navbar.height}
                  className="object-contain"
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-sm font-medium text-primary-700">
                  St. Anthony's College
                </h1>
                <p className="text-2xs text-primary-500">
                  Kandy OBA Qatar
                </p>
              </div>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-full px-4 py-1 flex gap-x-6">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative text-2xs font-medium py-1.5 transition-colors ${
                      isActive 
                        ? 'text-primary-700' 
                        : 'text-primary-500 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                        transition={{ 
                          type: "spring", 
                          bounce: 0.2, 
                          duration: 0.6 
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog 
            as={motion.div} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="lg:hidden" 
            open={mobileMenuOpen} 
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm" />
            <Dialog.Panel 
              as={motion.div}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"
            >
              <div className="flex items-center justify-between">
                <Link 
                  to="/" 
                  className="flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="relative w-[40px] h-[40px]">
                    <img 
                      src={LOGO_URL}
                      alt={LOGO_ALT}
                      width={LOGO_DIMENSIONS.navbar.width}
                      height={LOGO_DIMENSIONS.navbar.height}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-sm font-medium text-primary-700">
                      St. Anthony's College
                    </h1>
                    <p className="text-2xs text-primary-500">
                      Kandy OBA Qatar
                    </p>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-full p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-1 py-6">
                    {navigation.map((item) => {
                      const isActive = location.pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                            isActive
                              ? 'bg-primary-50 text-primary-600'
                              : 'text-primary-500 hover:bg-primary-50 hover:text-primary-600'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
};
