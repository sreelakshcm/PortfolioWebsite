import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primaryLight dark:text-primaryDark mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <motion.div
            className="flex md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-4 w-80 shadow-lg object-cover justify-center items-center bg-fontDarkDark dark:bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          >
            <motion.img
              src="/assets/Profile.jpeg"
              alt="Profile"
              className="w-full h-auto rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </motion.div>
          <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
            <motion.p
              className="text-xl text-fontDarkLight dark:text-fontDarkDark mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            >
              Hi, I'm <span className="font-bold text-primaryLight dark:text-primaryDark">Sree Lakshmi C M</span>, a MERN stack developer with a knack for creating efficient, scalable web applications. My expertise spans the entire development stack, from dynamic front-end interfaces with <span className="font-semibold text-primaryLight dark:text-primaryDark">React</span> and <span className="font-semibold text-primaryLight dark:text-primaryDark">Redux</span> to powerful back-end services with <span className="font-semibold text-primaryLight dark:text-primaryDark">Node.js</span> and <span className="font-semibold text-primaryLight dark:text-primaryDark">Express</span>.
            </motion.p>
            <motion.p
              className="text-lg text-fontDarkLight dark:text-fontDarkDark mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
            >
              I’m skilled with both NoSQL (<span className="font-semibold text-primaryLight dark:text-primaryDark">MongoDB</span>) and SQL databases, including <span className="font-semibold text-primaryLight dark:text-primaryDark">MySQL</span> and <span className="font-semibold text-primaryLight dark:text-primaryDark">MSSQL</span>, enabling me to deliver full-stack solutions tailored to client needs.
            </motion.p>
            <motion.p
              className="text-lg text-fontDarkLight dark:text-fontDarkDark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
            >
              I’m passionate about building seamless user experiences and am committed to delivering high-quality, impactful software. Let’s connect and create something remarkable together!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
