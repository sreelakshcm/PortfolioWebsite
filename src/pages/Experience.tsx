import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { experiences } from '@utils/experiences';

const Experience: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (expIndex: number, sectionIndex: number): void => {
    const key = `${expIndex}-${sectionIndex}`;
    setExpandedSections((prevSections) => ({
      ...prevSections,
      [key]: !prevSections[key],
    }));
  };

  return (
    <section id="experience" className="text-fontDarkLight dark:text-fontDarkDark py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-primaryLight dark:text-primaryDark">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, expIndex) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + expIndex * 0.2, duration: 0.5, ease: 'easeOut' }}
              key={expIndex}
              className="bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primaryLight dark:bg-primaryDark flex items-center justify-center text-white text-2xl font-bold mr-4">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-primaryLight dark:text-primaryDark">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg sm:text-xl md:text-2xl mb-2 text-fontDarkLight dark:text-fontDarkDark">
                    {exp.company} <span className="text-gray-500 dark:text-gray-400">| {exp.duration}</span>
                  </h4>
                </div>
              </div>
              <div>
                {exp.responsibilities.map((section, sectionIndex) => {
                  const isExpanded = expandedSections[`${expIndex}-${sectionIndex}`];
                  return (
                    <div key={sectionIndex} className="mb-4">
                      <h4 className="font-semibold text-lg text-primaryLight dark:text-primaryDark">{section.category}</h4>
                      <ul className="list-disc list-inside mt-2 space-y-2 text-sm sm:text-base md:text-lg">
                        {isExpanded
                          ? section.tasks.map((task, taskIdx) => 
                            <li key={taskIdx} className="text-fontDarkLight dark:text-fontDarkDark">{task}</li>,
                          )
                          : section.tasks.slice(0, 3).map((task, taskIdx) => 
                            <li key={taskIdx} className="text-fontDarkLight dark:text-fontDarkDark">{task}</li>,
                          )
                        }
                      </ul>
                      {section.tasks.length > 3 && (
                        <button
                          onClick={() => toggleExpand(expIndex, sectionIndex)}
                          className="mt-4 flex items-center cursor-pointer text-fontLightLight dark:text-primaryDark focus:outline-none"
                        >
                          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                          <span className="ml-2 text-sm font-semibold">
                            {isExpanded ? 'Read Less' : 'Read More'}
                          </span>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
              {exp.highlights && (
                <div className="mt-6">
                  <h5 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-400">Key Technologies</h5>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-primaryLightActive dark:bg-primaryDarkHover text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
