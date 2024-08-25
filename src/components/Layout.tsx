import React from 'react';
import Footer from './Footer'; // Adjust the path as needed
import Portfolio from '../pages';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="h-full flex-grow  bg-[#bdc9e0] dark:bg-backgroundDark">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
