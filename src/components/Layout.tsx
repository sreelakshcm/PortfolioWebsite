import React, { ReactNode } from 'react';
import Footer from './Footer'; // Adjust the path as needed

const Layout: React.FC<{ children: ReactNode; }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="h-full flex-grow  bg-backgroundLight dark:bg-backgroundDark">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
