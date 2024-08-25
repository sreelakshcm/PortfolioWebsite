import React from 'react';
import Navbar from '@components/Navbar';
import Layout from '@components/Layout';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-background dark:bg-darkBackground text-dark dark:text-light cursor-default">
      <Navbar />
      <Layout />
    </div>
  );
};

export default App;
