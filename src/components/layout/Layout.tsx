import { FC, PropsWithChildren } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
