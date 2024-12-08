import { FC, memo } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MobileMenuProps } from './types';

export const MobileMenu: FC<MobileMenuProps> = memo(({ 
  isOpen, 
  onClose, 
  items, 
  currentPath,
  logoProps 
}) => (
  <AnimatePresence>
    {isOpen && (
      <Dialog
        as="div"
        className="lg:hidden"
        open={isOpen}
        onClose={onClose}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-r from-[#541D67] via-[#B62D71] to-[#5B4886] px-6 py-6 sm:max-w-sm">
          <MobileMenuHeader onClose={onClose} logoProps={logoProps} />
          <MobileMenuItems items={items} currentPath={currentPath} onClose={onClose} />
        </Dialog.Panel>
      </Dialog>
    )}
  </AnimatePresence>
));

MobileMenu.displayName = 'MobileMenu'; 