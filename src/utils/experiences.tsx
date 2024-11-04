
import { AiFillCode } from 'react-icons/ai';
import { BiData } from 'react-icons/bi';

export const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Kaay Labs - Software Development',
    duration: 'August 2023 - December 2024',
    responsibilities: [
      {
        category: 'Front-End Development',
        tasks: [
          'Developed a modular and dynamic front-end using React, TypeScript, and Vite, ensuring a responsive, high-performance user experience with optimized development cycles.',
          'Engineered complex workflows with Reactflow, enabling users to create actions that dynamically respond to workflow logic.',
          'Managed application state with Redux Toolkit and Redux Persist, ensuring data consistency across sessions.',
          'Utilized Ant Design (AntD) and SCSS to craft responsive, visually appealing user interfaces, enhancing both usability and accessibility.',
          'Handled API integrations and advanced date manipulations with Axios and Moment.js / Day.js for improved data handling and user interaction.',
        ],
      },
      {
        category: 'Back-End Contributions',
        tasks: [
          'Built essential back-end functionality using Node.js and Express, supporting front-end requirements and application performance.',
          'Managed scalable data storage with Knex and MySQL/MSSQL, ensuring efficient database management.',
          'Integrated PDF-lib and XLSX libraries for document generation and data exports, streamlining document and data processing.',
          'Leveraged MSSQL for robust data management, enabling efficient data persistence and retrieval in line with front-end needs.',
        ],
      },
      {
        category: 'Collaboration and Project Contributions',
        tasks: [
          'Collaborated with cross-functional teams, participating in code reviews and aligning front-end deliverables with project objectives.',
          'Conducted thorough testing and debugging, proactively resolving issues to maintain high standards for deliverables.',
        ],
      },
    ],
    icon: <AiFillCode className="w-8 h-8" />,
    highlights: ['TypeScript', 'Express.js', 'Node.js', 'MsSQL', 'Redux Toolkit', 'Ant Design', 'SCSS', 'Reactflow'],
  },
  {
    title: 'Software Developer',
    company: 'Schwing Stetter India Pvt. LTD',
    duration: 'February 2023 - August 2023',
    responsibilities: [
      {
        category: '',
        tasks: [
          'Developed a secure production management system with token-based authentication and session management, enhancing application security and user experience.',
          'Implemented credential validation and authorization protocols, ensuring controlled access to authorized pages.',
          'Designed and developed a comprehensive ReactJS web application featuring a dashboard, production module, and configurator, streamlining production monitoring and management processes.',
          'Integrated advanced data visualizations, including gauge charts and bar charts, to effectively analyze production metrics across various plants.',
          'Incorporated datepickers for flexible data exploration, enabling users to easily toggle between dates and access specific production data.',
          'Provided dynamic plant-specific insights and metrics, improving the relevance and usability of data throughout the application.',
        ],
      },
    ],
    icon: <BiData className="w-8 h-8" />,
    highlights: ['ReactJS', 'Material UI', 'Bootstrap', 'Axios'],
  },
];
