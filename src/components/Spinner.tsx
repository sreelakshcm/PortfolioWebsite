import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-t-4 border-primary
       dark:border-secondary border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
