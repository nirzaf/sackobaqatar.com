import { FC, PropsWithChildren } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-16 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};
