import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';

const Carousel: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      title: 'Frontend',
      description: 'React JS / TS, React Redux, React Router Dom, SCSS, HTML / CSS',
      icons: ['/assets/Skills/Frontend/HTML.svg', '/assets/Skills/Frontend/CSS.svg', '/assets/Skills/Frontend/JS.svg', '/assets/Skills/Frontend/TypeScript.svg', '/assets/Skills/Frontend/React.svg'],
    },
    {
      title: 'Backend',
      description: 'Node.js, Express.js',
      icons: [theme === 'light' ? '/assets/Skills/Backend/Backend.svg' : '/assets/Skills/Backend/BackendLight.svg'],
    },
    {
      title: 'Database',
      description: 'MySQL, MsSQL, Knex.js',
      icons: [theme === 'light' ? '/assets/Skills/Database/MsSql.svg' : '/assets/Skills/Database/MsSqlLight.svg', '/assets/Skills/Database/MySql.svg'],
    },
    {
      title: 'UI Libraries / Frameworks',
      description: 'Ant Design, Material UI, Bootstrap, Tailwind CSS',
      icons: ['/assets/Skills/UI/MUI.svg', '/assets/Skills/UI/Antd.svg', theme === 'light' ? '/assets/Skills/UI/Tailwind.svg' : '/assets/Skills/UI/TailwindLight.svg', '/assets/Skills/UI/Bootstrap.svg'],
    },
  ];

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section className="bg-none text-fontDarkLight dark:text-fontDarkDark py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center">
          Explore My Skills
        </h2>
        <div className="relative flex items-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 cursor-pointer top-1/2 transform -translate-y-1/2 p-2 sm:p-3 lg:p-4 text-primaryLight dark:text-primaryDark bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 z-10"
          >
            &#10094;
          </button>

          <motion.div
            className="w-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="w-full flex flex-col justify-center items-center flex-shrink-0 p-4 sm:p-6 md:p-8 lg:p-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="flex flex-wrap justify-center">
                    {item.icons.map((icon, iconIndex) => (
                      <img
                        key={iconIndex}
                        src={icon}
                        alt={`${item.title} icon ${iconIndex + 1}`}
                        className={`${item.icons.length > 2 ? 'sm:w-14 sm:h-14 w-12 lg:w-20 lg:h-20 md:w-16 md:h-16' : 'sm:w-32 w-56 lg:w-56 md:w-48 md:h-16 lg:h-20'} h-12 mb-4 mx-2`}
                      />
                    ))}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-primaryLight dark:text-primaryDark">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-fontDarkLight dark:text-fontDarkDark">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <button
            onClick={nextSlide}
            className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 lg:p-4 text-primaryLight dark:text-primaryDark bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 z-10"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
