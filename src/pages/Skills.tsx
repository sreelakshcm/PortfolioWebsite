import React from 'react';
import { skills } from '@shared/constants';

const Skills: React.FC = () => {

  return (
    <section id="skills">
      <section className="bg-none text-fontDarkLight dark:text-fontDarkDark py-10 sm:py-16">
        <div className="py-12 px-5 font-sans text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center text-primaryLight dark:text-primaryDark">
            Explore My Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white dark:bg-mariner-800 rounded-full p-11 w-80 shadow-lg transform hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-semibold text-fontDarkLight dark:text-fontDarkDark mb-4">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skill.frameworks.map((framework, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-mariner-100 dark:bg-gray-700 rounded-full px-3 py-1 shadow-md transform transition-transform hover:scale-105"
                    >
                      {framework.icon && <img
                        src={framework.icon}
                        alt={`${framework.name} icon`}
                        className="h-5 w-5 mr-2"
                      />}
                      <span className="text-sm font-medium text-fontDarkLight dark:text-fontDarkDark">
                        {framework.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
