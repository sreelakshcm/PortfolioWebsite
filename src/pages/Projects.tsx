import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-primaryLight dark:text-primaryDark">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-700 dark:text-gray-300">Description of the project.</p>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
