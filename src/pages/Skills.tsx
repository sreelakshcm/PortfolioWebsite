import React from 'react';

const Skills: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-dark dark:text-light mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <span className="text-lg font-semibold">JavaScript</span>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <span className="text-lg font-semibold">React</span>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <span className="text-lg font-semibold">Node.js</span>
          </div>
          {/* Add more skills as needed */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
