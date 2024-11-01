import React, { useState } from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';

const Navbar: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-backgroundLight dark:bg-backgroundDark shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer text-fontDarkLight dark:text-fontDarkDark">
          <Link to="home" offset={-68} smooth={true} duration={500}>
            <img src={theme === 'dark' ? '/assets/HomeIcon.svg' : '/assets/HomeIconLight.svg'} alt='home icon' />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 items-center text-fontLightLight dark:text-fontLightDark">
          <Link to="home" smooth={true} offset={-68} duration={500} className="hover:text-primaryLight cursor-pointer dark:hover:text-primaryDark">Home</Link>
          <Link to="skills" smooth={true} offset={-68} duration={500} className="hover:text-primaryLight cursor-pointer dark:hover:text-primaryDark">Skills</Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-primaryLight cursor-pointer dark:hover:text-primaryDark">About</Link>
          <Link to="experience" smooth={true} duration={500} className="hover:text-primaryLight cursor-pointer dark:hover:text-primaryDark">Experience</Link>
          {/* <Link to="projects" smooth={true} duration={500} className="hover:text-primaryLight cursor-pointer dark:hover:text-primaryDark">Projects</Link> */}
          <Link to="contact" smooth={true} duration={500} className="hover:text-primaryLight cursor-pointer dark:hover:text-primaryDark">Contact</Link>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-fontLightLight cursor-pointer dark:text-fontLightDark focus:outline-none"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-backgroundLight dark:bg-backgroundDark shadow-lg`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link to="home" smooth={true} duration={500} offset={-68} onClick={toggleMenu} className="text-fontLightLight dark:text-fontLightDark cursor-pointer hover:text-primaryLight dark:hover:text-primaryDark">Home</Link>
          <Link to="skills" smooth={true} duration={500} onClick={toggleMenu} className="text-fontLightLight dark:text-fontLightDark cursor-pointer hover:text-primaryLight dark:hover:text-primaryDark">Skills</Link>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="text-fontLightLight dark:text-fontLightDark cursor-pointer hover:text-primaryLight dark:hover:text-primaryDark">About</Link>
          <Link to="experience" smooth={true} duration={500} onClick={toggleMenu} className="text-fontLightLight dark:text-fontLightDark cursor-pointer hover:text-primaryLight dark:hover:text-primaryDark">Experience</Link>
          {/* <Link to="projects" smooth={true} duration={500} onClick={toggleMenu} className="text-fontLightLight dark:text-fontLightDark cursor-pointer hover:text-primaryLight dark:hover:text-primaryDark">Projects</Link> */}
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu} className="text-fontLightLight dark:text-fontLightDark cursor-pointer hover:text-primaryLight dark:hover:text-primaryDark">Contact</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
