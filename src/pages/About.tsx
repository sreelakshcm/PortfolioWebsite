import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20">
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
              Hello! I'm <span className="font-bold text-primaryLight dark:text-primaryDark">Sree Lakshmi C M</span>, a passionate and driven Software Developer with a keen interest in solving complex problems and creating impactful solutions. My expertise lies in crafting dynamic and user-friendly web interfaces using <span className="font-semibold text-primaryLight dark:text-primaryDark">React</span>, both in JavaScript and TypeScript. I specialize in building scalable and robust applications that not only meet but exceed user expectations.
            </motion.p>
            <motion.p
              className="text-lg text-fontDarkLight dark:text-fontDarkDark mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
            >
              My experience extends to backend technologies as well, including <span className="font-semibold text-primaryLight dark:text-primaryDark">Node.js</span>, <span className="font-semibold text-primaryLight dark:text-primaryDark">Express.js</span>, and <span className="font-semibold text-primaryLight dark:text-primaryDark">MySQL</span>. This diverse skill set enables me to develop full-stack solutions that are both efficient and maintainable. I am committed to continuous learning and growth, always staying updated with the latest technologies and industry trends to deliver solutions that drive user satisfaction and business success.
            </motion.p>
            <motion.p
              className="text-lg text-fontDarkLight dark:text-fontDarkDark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
            >
              I thrive in collaborative environments and enjoy working closely with teams to tackle new challenges and deliver high-quality software. Let's connect and explore how we can build something extraordinary together!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
