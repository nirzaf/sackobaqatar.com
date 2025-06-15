import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import ReactCountryFlag from "react-country-flag";

/**
 * Navigation items configuration
 */
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
 * Enhanced Navbar component with improved animations, visual effects, and better UX
 * Features smooth scrolling effects, enhanced mobile menu, and modern glassmorphism design
 */
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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#B62D71] via-[#541D67] to-[#5B4886] shadow-xl backdrop-blur-md'
          : 'bg-gradient-to-r from-[#B62D71]/90 via-[#541D67]/90 to-[#5B4886]/90 backdrop-blur-lg'
      }`}
    >
      <nav
        className="container mx-auto px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between py-4">
          {/* Enhanced Logo Section */}
          <motion.div 
            className="flex"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="-m-1.5 p-1.5 group">
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <ReactCountryFlag 
                    countryCode="QA" 
                    svg 
                    style={{ width: '2.2em', height: '2.2em' }} 
                    title="Qatar" 
                    className="drop-shadow-lg"
                  />
                </motion.div>
                <span className="text-2xl font-extrabold tracking-wider text-white drop-shadow-lg
                  group-hover:text-white/90 transition-colors duration-300">
                  SACKOBA
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#541D67]/70 backdrop-blur-xl rounded-full px-8 py-3 flex gap-x-8 
                shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#9A78AB]/30
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-shadow duration-300"
            >
              {navigation.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <Link
                      to={item.href}
                      className={`relative text-sm font-semibold py-2 px-3 rounded-lg transition-all duration-300 group ${
                        isActive
                          ? 'text-white bg-white/10 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]'
                          : 'text-white/90 hover:text-white hover:bg-white/5 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 bg-white/15 rounded-lg
                            shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30
                          }}
                        />
                      )}
                      <motion.div
                        className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100
                          transition-opacity duration-300"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="flex lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="relative inline-flex items-center justify-center rounded-full p-3 text-white
                bg-[#541D67]/70 backdrop-blur-xl border border-[#9A78AB]/30
                shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.4)]
                transition-all duration-300 group"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Bars3Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              </motion.div>
              <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100
                transition-opacity duration-300" />
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" 
              />
              <Dialog.Panel 
                as={motion.div}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto 
                  bg-gradient-to-br from-[#541D67] via-[#B62D71] to-[#5B4886] 
                  px-6 py-6 sm:max-w-sm shadow-2xl backdrop-blur-xl"
                style={{
                  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      to="/"
                      className="-m-1.5 p-1.5 group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <ReactCountryFlag 
                          countryCode="QA" 
                          svg 
                          style={{ width: '2.2em', height: '2.2em' }} 
                          title="Qatar" 
                          className="drop-shadow-lg"
                        />
                        <span className="text-2xl font-extrabold tracking-wider text-white drop-shadow-lg
                          group-hover:text-white/90 transition-colors duration-300">
                          SACKOBA
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                  
                  <motion.button
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className="relative rounded-full p-3 text-white bg-white/10 backdrop-blur-sm
                      hover:bg-white/20 transition-all duration-300 group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100
                      transition-opacity duration-300" />
                  </motion.button>
                </div>

                {/* Mobile Navigation Links */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flow-root"
                >
                  <div className="space-y-3">
                    {navigation.map((item, index) => {
                      const isActive = location.pathname === item.href;
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index + 0.4 }}
                        >
                          <Link
                            to={item.href}
                            className={`group relative block rounded-xl px-4 py-4 text-lg font-semibold 
                              transition-all duration-300 overflow-hidden ${
                              isActive
                                ? 'text-white bg-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.1)]'
                                : 'text-white/80 hover:text-white hover:bg-white/10'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="relative z-10 flex items-center justify-between">
                              <span>{item.name}</span>
                              {isActive && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2 h-2 bg-white rounded-full shadow-lg"
                                />
                              )}
                            </div>
                            
                            {/* Hover effect background */}
                            <motion.div
                              className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300"
                            />
                            
                            {/* Active indicator */}
                            {isActive && (
                              <motion.div
                                layoutId="mobile-indicator"
                                className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full
                                  shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30
                                }}
                              />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Mobile Menu Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 pt-6 border-t border-white/20"
                >
                  <p className="text-center text-white/60 text-sm">
                    Building connections since 2009
                  </p>
                </motion.div>
              </Dialog.Panel>
            </Dialog>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

Navbar.displayName = 'Navbar';
