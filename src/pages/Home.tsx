import { FC } from 'react';
import { motion } from 'framer-motion';
import RippleButton from '@components/RippleButton';

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
    <section id='home' className="max-w-7xl mx-auto px-4 pt-12 text-center md:text-left">
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
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-fontLightLight dark:text-fontLightDark relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
      >
        MERN stack Developer
      </motion.p>

      <motion.a
        href="#experience"
        className="inline-block cursor-pointer bg-primaryLight text-white dark:bg-primaryDark px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:bg-primaryLightHover dark:hover:bg-primaryDarkHover transition duration-300 transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.1 }}
      >
        View My Work
      </motion.a>

      <RippleButton className='ml-5' onClick={handleDownload}>
        Download Resume
      </RippleButton>
    </section>
  );
};

export default Home;
