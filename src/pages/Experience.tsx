import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AiFillCode } from 'react-icons/ai';
import { BiData } from 'react-icons/bi';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Kaay Labs - Software Development',
    duration: 'August 2023 - Present',
    responsibilities: [
      'Designed and Implemented Workflows, Actions and Task related projects using Reactflow.',
      'Utilized Reactflow to create detailed flowcharts for visual representation of workflows, mapping actions and responses, and incorporating tasks such as email notifications and API calls.',
      'Developed highly interactive Web applications using React with TypeScript and Vite.',
      'Utilized React with TypeScript and Vite to ensure type safety, efficient development workflow, and enhanced code readability.',
      'Implemented Express.js for backend development.',
      'Utilized Express.js to build RESTful APIs and manage server-side logic effectively.',
      'Integrated MSSQL as the database solution.',
      'Employed MSSQL for data persistence and efficient querying capabilities.',
      'Utilized frameworks and libraries including React Router DOM, Redux Toolkit, Axios, and Ant Design (AntD).',
      'Implemented various frameworks and libraries to manage application state, handle routing, and build responsive UI components.',
      'Collaborated closely with cross-functional teams.',
      'Worked closely with cross-functional teams to gather requirements and ensure alignment with business objectives.',
      'Conducted thorough testing and debugging.',
      'Performed extensive testing and debugging to identify and resolve issues, ensuring high-quality software deliverables.',
      'Participated in code reviews and provided constructive feedback.',
      'Engaged in code reviews and provided valuable feedback to peers, fostering a culture of continuous improvement.',
    ],
    icon: <AiFillCode className="w-8 h-8" />,
    highlights: ['TypeScript', 'Express.js', 'Node.js', 'MsSQL', 'Redux Toolkit', 'Ant Design', 'SCSS', 'Reactflow'],
  },
  {
    title: 'Software Developer',
    company: 'Schwing Stetter India Pvt. LTD',
    duration: 'February 2023 - August 2023',
    responsibilities: [
      'Production Management and Approval System.',
      'Implemented secure login functionality.',
      'Incorporated token-based authentication, credential validation, and authorization for accessing authorized pages. Included session management to track user idle time and automatically log them out after a specified period.',
      'Production Monitoring System.',
      'Developed a comprehensive ReactJS web application.',
      'Built a ReactJS web application with a dashboard, reports, production module, and configurator.',
      'Implemented visually appealing data visualizations.',
      'Integrated gauge charts, bar charts, and tables to visualize and analyze production metrics for different plants.',
      'Integrated datepickers for easy data exploration.',
      'Included datepickers for easy toggling between months, years, and selecting specific dates, enabling precise data exploration.',
      'Provided plant-specific insights and metrics.',
      'Dynamically rendered data based on plant selection, providing plant-specific insights and metrics throughout the application.',
    ],
    icon: <BiData className="w-8 h-8" />,
    highlights: ['ReactJS', 'Material UI', 'Bootstrap', 'Axios'],
  },
];

const Experience: React.FC = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleExpand = (index: number): void => {
    setExpandedIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index) // Remove index if it's already expanded
        : [...prevIndices, index], // Add index if it's not expanded
    );
  };

  return (
    <section id="experience" className="text-fontDarkLight dark:text-fontDarkDark py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-primaryLight dark:text-primaryDark">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.5, ease: 'easeOut' }}
              key={index}
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
                <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base md:text-lg">
                  {exp.responsibilities.slice(0, 3).map((task, idx) => (
                    <li key={idx} className="text-fontDarkLight dark:text-fontDarkDark">
                      {task}
                    </li>
                  ))}
                </ul>
                {exp.responsibilities.length > 3 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-4 flex items-center cursor-pointer text-fontLightLight dark:text-primaryDark focus:outline-none"
                  >
                    {expandedIndices.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
                    <span className="ml-2 text-sm font-semibold">
                      {expandedIndices.includes(index) ? 'Read Less' : 'Read More'}
                    </span>
                  </button>
                )}
                {expandedIndices.includes(index) && (
                  <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base md:text-lg">
                    {exp.responsibilities.slice(3).map((task, idx) => (
                      <li key={idx} className="text-fontDarkLight dark:text-fontDarkDark">
                        {task}
                      </li>
                    ))}
                  </ul>
                )}
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
