import { FC } from 'react';
import { motion } from 'framer-motion';
import RippleButton from '@components/RippleButton';
import { contactLinks } from '@utils/contactList';

const Home: FC = () => {
  const handleDownload = (): void => {
    const link = document.createElement('a');
    link.href = '/files/Resume - Sree Lakshmi C M.pdf';
    link.setAttribute('download', 'Resume-Sree_Lakshmi_C_M.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="max-w-7xl mx-auto px-4 pt-12 flex flex-col md:flex-row text-center md:text-left">
      <div className="flex-1">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 relative overflow-hidden whitespace-nowrap"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            className="block text-fontDarkLight dark:text-fontDarkDark"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            Hi, I'm
          </motion.span>
          <motion.span
            className="block text-primaryLight dark:text-primaryDark"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            Sree Lakshmi C M
          </motion.span>
          <motion.span
            className="block text-xl text-fontLightLight dark:text-fontLightDark relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          >
            MERN Stack Developer
          </motion.span>
        </motion.h1>

        <div className="flex justify-center md:justify-start space-x-5 mb-8 items-center">
          <motion.a
            href="#experience"
            className="inline-block cursor-pointer bg-primaryLight text-white dark:bg-primaryDark px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-primaryLightHover dark:hover:bg-primaryDarkHover transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
          >
            View My Work
          </motion.a>

          <RippleButton onClick={handleDownload} className="flex items-center gap-2">
            <img src="/assets/utilityIcons/Download.svg" alt="download icon" className="mb-0.5" />
            Resume
          </RippleButton>
        </div>
      </div>
      <div className='flex flex-col w-full gap-9 justify-center'>
        <div className="flex justify-center md:justify-end mt-4 md:mt-0 gap-6 text-center md:text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span
              className="block text-4xl font-bold text-primaryLight dark:text-primaryDark"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              2
            </motion.span>
            <span className="text-fontDarkLight dark:text-fontDarkDark">Years Experience</span>
          </motion.div>

          <div className="h-24 w-px bg-gradient-to-t from-transparent to-primaryLight dark:to-primaryDark"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span
              className="block text-4xl font-bold text-primaryLight dark:text-primaryDark"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              5+
            </motion.span>
            <span className="text-fontDarkLight dark:text-fontDarkDark">Projects Completed</span>
          </motion.div>
        </div>
        <div className='flex flex-col w-full gap-10 lg:items-end xl:items-end 2xl:items-end md:items-end items-center '>
          <div className="flex space-x-5">
            {contactLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-2xl text-primaryLight dark:text-primaryDark hover:text-primaryLightHover dark:hover:text-primaryDarkHover transition duration-300 transform hover:scale-110"
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
