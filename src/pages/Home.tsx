import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '@components/Carousel';

const Home: React.FC = () => {
  return (
    <section className="text-fontDarkLight dark:text-fontDarkDark py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
        {/* Headline with typewriter effect */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 relative overflow-hidden whitespace-nowrap"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="block">Hi, I'm</span>
          <span className="block text-primaryLight dark:text-primaryDark">
            Sree Lakshmi C M
          </span>
        </motion.h1>

        {/* Subheading with background animation */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-fontLightLight dark:text-fontLightDark relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        >
          Shaping Ideas into Code with Precision
        </motion.p>

        {/* Animated button */}
        <motion.a
          href="/experience"
          className="inline-block bg-primaryLight text-white dark:bg-primaryDark px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:bg-primaryLightHover dark:hover:bg-primaryDarkHover transition duration-300 transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >
          View My Work
        </motion.a>

        <Carousel />

      </div>
    </section>
  );
};

export default Home;
