import React from 'react';
import Navbar from '@components/Navbar';
import Layout from '@components/Layout';
import ThemeFavicon from '@components/ThemeFavicon';

const App: React.FC = () => {
  return (
    <div className="min-h-screen cursor-default bg-paper font-sans text-ink">
      <ThemeFavicon />
      <Navbar />
      <Layout />
    </div>
  );
};

export default App;
