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
          ? 'bg-gradient-to-r from-[#541D67] via-[#541D67] to-[#5B4886] shadow-lg' 
          : 'bg-gradient-to-r from-[#541D67]/95 via-[#541D67]/95 to-[#5B4886]/95 backdrop-blur-sm'
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
              <div className="relative w-[48px] h-[48px] -mt-1 -mb-1">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-xl"></div>
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
                <div className="absolute inset-0 bg-white/10 rounded-full blur-md"></div>
                <img 
                  src={LOGO_URL}
                  alt={LOGO_ALT}
                  width={LOGO_DIMENSIONS.navbar.width}
                  height={LOGO_DIMENSIONS.navbar.height}
                  className="object-contain w-full h-full relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-sm font-medium text-white">
                  St. Anthony's College
                </h1>
                <p className="text-2xs text-white">
                  Kandy OBA Qatar
                </p>
              </div>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-white hover:text-white/90"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-full px-4 py-1 flex gap-x-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative text-sm font-medium py-1.5 transition-all duration-300 ${
                      isActive 
                        ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]' 
                        : 'text-white/70 hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 30 
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-r from-[#541D67] via-[#541D67] to-[#5B4886] px-6 py-6 sm:max-w-sm">
                <div className="flex items-center justify-between">
                  <Link 
                    to="/" 
                    className="-m-1.5 p-1.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">SACKOBA Qatar</span>
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/30 rounded-full blur-xl"></div>
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-md"></div>
                      <img
                        className="h-10 w-auto relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
                        src={LOGO_URL}
                        alt={LOGO_ALT}
                      />
                    </div>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-white hover:text-white/90"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-white/20">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-all duration-300 ${
                            location.pathname === item.href
                              ? 'text-white bg-white/20 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                              : 'text-white/70 hover:text-white hover:bg-white/10 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
