import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@utils/skills';

const Skills: React.FC = () => {
  const allFrameworks = skills.flatMap(skill =>
    skill.frameworks.map(framework => ({
      name: framework.name,
      icon: framework.icon,
    })),
  );

  return (
    <section id="skills" className="bg-none text-fontDarkLight dark:text-fontDarkDark py-10 sm:py-16">
      <div className="py-10 font-sans text-center max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center text-primaryLight dark:text-primaryDark">
          Explore My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6 pt-10 bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-6 rounded-lg shadow-lg">
          {allFrameworks.map((framework, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-white dark:bg-primaryDarkHover dark:text-white rounded-full px-4 py-2 shadow-md transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            >
              {framework.icon && (
                <img
                  src={framework.icon}
                  alt={`${framework.name} icon`}
                  className="h-6 w-6 mr-2"
                />
              )}
              <span
                className="text-sm font-medium text-fontDarkLight dark:text-fontDarkDark">
                {framework.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
