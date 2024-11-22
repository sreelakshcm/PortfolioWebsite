import React from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store';
import { toggleNavbar, closeNavbar } from '@app/features/navbarSlice';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const isOpen = useSelector((state: RootState) => state.navbar.isOpen);

  const navLinks = [
    { to: 'skills', label: 'Skills' },
    { to: 'about', label: 'About' },
    { to: 'experience', label: 'Experience' },
    { to: 'certifications', label: 'Certifications' },
    { to: 'contact', label: 'Contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, delay: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <nav className="fixed w-full bg-backgroundLight dark:bg-backgroundDark shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left: Home Button */}
        <div className="text-xl font-bold cursor-pointer text-fontDarkLight dark:text-fontDarkDark w-9 h-9">
          <Link
            to="home"
            offset={-68}
            smooth
            duration={300}
            onClick={() => {
              if (isOpen) dispatch(closeNavbar());
            }}
          >
            <img
              src={
                theme === 'dark'
                  ? '/assets/HomeIcon.svg'
                  : '/assets/HomeIconLight.svg'
              }
              alt="home icon"
            />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 items-center text-fontLightLight dark:text-fontLightDark">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth
              offset={-68}
              duration={500}
              className="relative group hover:text-primaryLight cursor-pointer dark:hover:text-primaryDark"
            >
              <span>{label}</span>
              <span className="absolute left-0 -bottom-4 w-0 h-[2px] bg-primaryLight group-hover:w-full dark:bg-primaryDark transition-all"></span>
            </Link>
          ))}
        </div>

        {/* Right: Theme Toggle */}
        <div className="hidden md:flex items-center">
          <ThemeToggle />
        </div>

        {/* Mobile: Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => dispatch(toggleNavbar())}
            className="text-fontLightLight cursor-pointer dark:text-fontLightDark focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-[52px] left-0 w-full h-screen bg-backgroundLight dark:bg-backgroundDark shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            <motion.ul className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map(({ to, label }) => (
                <motion.li
                  key={to}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={to}
                    smooth
                    duration={300}
                    onClick={() => dispatch(closeNavbar())}
                    className="text-fontLightLight dark:text-fontLightDark cursor-pointer hover:text-primaryLight dark:hover:text-primaryDark"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
              <ThemeToggle />
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
