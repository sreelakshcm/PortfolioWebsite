import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, selectTheme } from '@features/themeSlice';
import { RootState } from '@app/store';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { closeNavbar } from '@app/features/navbarSlice';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => selectTheme(state));
  const isNavbarOpen = useSelector((state: RootState) => state.navbar.isOpen);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggle = (): void => {
    dispatch(toggleTheme());
    if (isNavbarOpen) setTimeout(() => dispatch(closeNavbar()), 300);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="bg-gray-200 cursor-pointer dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-2 rounded-full shadow-md focus:outline-none"
      initial={{ rotate: 0 }}
      animate={{ rotate: theme === 'light' ? 0 : 180 }}
      transition={{ duration: 0.5 }}
    >
      {theme === 'light' ? (
        <FaMoon size={24} />
      ) : (
        <FaSun size={24} />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
