import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaHome, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-backgroundLight dark:bg-backgroundDark shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold text-fontDarkLight dark:text-fontDarkDark">
          <Link to="/">
            <FaHome className="text-2xl" /> {/* Home icon */}
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 items-center text-fontLightLight dark:text-fontLightDark">
          <Link to="/about" className="hover:text-primaryLight dark:hover:text-primaryDark">About</Link>
          <Link to="/projects" className="hover:text-primaryLight dark:hover:text-primaryDark">Projects</Link>
          <Link to="/skills" className="hover:text-primaryLight dark:hover:text-primaryDark">Skills</Link>
          <Link to="/experience" className="hover:text-primaryLight dark:hover:text-primaryDark">Experience</Link>
          <Link to="/contact" className="hover:text-primaryLight dark:hover:text-primaryDark">Contact</Link>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-fontLightLight dark:text-fontLightDark focus:outline-none"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-backgroundLight dark:bg-backgroundDark shadow-lg`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link to="/about" className="text-fontLightLight dark:text-fontLightDark hover:text-primaryLight dark:hover:text-primaryDark" onClick={toggleMenu}>About</Link>
          <Link to="/projects" className="text-fontLightLight dark:text-fontLightDark hover:text-primaryLight dark:hover:text-primaryDark" onClick={toggleMenu}>Projects</Link>
          <Link to="/skills" className="text-fontLightLight dark:text-fontLightDark hover:text-primaryLight dark:hover:text-primaryDark" onClick={toggleMenu}>Skills</Link>
          <Link to="/experience" className="text-fontLightLight dark:text-fontLightDark hover:text-primaryLight dark:hover:text-primaryDark" onClick={toggleMenu}>Experience</Link>
          <Link to="/contact" className="text-fontLightLight dark:text-fontLightDark hover:text-primaryLight dark:hover:text-primaryDark" onClick={toggleMenu}>Contact</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
