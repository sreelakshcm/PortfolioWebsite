
import { AiFillCode } from 'react-icons/ai';
import { BiData } from 'react-icons/bi';

export const skills = [
  {
    title: 'Frontend',
    frameworks: [
      { name: 'HTML', icon: '/assets/Frontend/HTML.svg' },
      { name: 'CSS', icon: '/assets/Frontend/CSS.svg' },
      { name: 'JavaScript', icon: '/assets/Frontend/JS.svg' },
      { name: 'React JS', icon: '/assets/Frontend/React.svg' },
      { name: 'TypeScript', icon: '/assets/Frontend/TypeScript.svg' },
    ],
  },
  {
    title: 'Backend',
    frameworks: [
      { name: 'Node.js', icon: '/assets/Backend/Node.svg' },
      { name: 'Express.js', icon: '/assets/Backend/Express.svg' },
    ],
  },
  {
    title: 'Database',
    frameworks: [
      { name: 'MsSQL', icon: '/assets/Database/MsSql.svg' },
      { name: 'MySQL', icon: '/assets/Database/MySql.svg' },
      { name: 'MongoDB', icon: '/assets/Database/MongoDb.svg' },
      { name: 'Knex.js', icon: '/assets/Database/Knex.svg' },
    ],
  },
  {
    title: 'UI Libraries / Frameworks',
    frameworks: [
      { name: 'Material UI', icon: '/assets/UI/MUI.svg' },
      { name: 'Ant Design', icon: '/assets/UI/Antd.svg' },
      { name: 'Tailwind CSS', icon: '/assets/UI/Tailwind.svg' },
      { name: 'Bootstrap', icon: '/assets/UI/Bootstrap.svg' },
    ],
  },
];

export const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Kaay Labs - Software Development',
    duration: 'August 2023 - Present',
    responsibilities: [
      'Designed and implemented complex workflows and task-related projects using Reactflow, optimizing task automation and integration of email notifications and API calls.',
      'Created detailed, visually engaging flowcharts with Reactflow, improving clarity and efficiency in workflow mapping and action responses.',
      'Built high-performance web applications utilizing React with TypeScript and Vite, enhancing type safety, streamlining development processes, and improving code readability.',
      'Leveraged TypeScript and Vite to accelerate development and ensure robust application performance.',
      'Developed RESTful APIs using Express.js, effectively managing server-side logic and improving backend performance and scalability.',
      'Integrated MSSQL for reliable data persistence and efficient querying, enhancing overall data management and accessibility.',
      'Applied React Router DOM, Redux Toolkit, Axios, and Ant Design (AntD) to manage application state, handle routing, and build responsive UI components, leading to a more cohesive and user-friendly application.',
      'Collaborated closely with cross-functional teams to align project requirements with business objectives, ensuring seamless project execution.',
      'Conducted comprehensive testing and debugging to identify and resolve issues, resulting in high-quality software deliverables.',
      'Participated in code reviews, offering constructive feedback and fostering a culture of continuous improvement within the development team.',
    ],
    icon: <AiFillCode className="w-8 h-8" />,
    highlights: ['TypeScript', 'Express.js', 'Node.js', 'MsSQL', 'Redux Toolkit', 'Ant Design', 'SCSS', 'Reactflow'],
  },
  {
    title: 'Software Developer',
    company: 'Schwing Stetter India Pvt. LTD',
    duration: 'February 2023 - August 2023',
    responsibilities: [
      'Developed a secure production management system with token-based authentication and session management, enhancing application security and user experience.',
      'Implemented credential validation and authorization protocols, ensuring controlled access to authorized pages.',
      'Designed and developed a comprehensive ReactJS web application featuring a dashboard, production module, and configurator, streamlining production monitoring and management processes.',
      'Integrated advanced data visualizations, including gauge charts and bar charts, to effectively analyze production metrics across various plants.',
      'Incorporated datepickers for flexible data exploration, enabling users to easily toggle between dates and access specific production data.',
      'Provided dynamic plant-specific insights and metrics, improving the relevance and usability of data throughout the application.',
    ],
    icon: <BiData className="w-8 h-8" />,
    highlights: ['ReactJS', 'Material UI', 'Bootstrap', 'Axios'],
  },
];
