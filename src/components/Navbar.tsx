import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import ThemeToggle from './ThemeToggle';
import { RootState } from '@app/store';
import { toggleNavbar, closeNavbar } from '@app/features/navbarSlice';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.navbar.isOpen);

  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    {
      to: 'about',
      label: 'About',
    },
    {
      to: 'skills',
      label: 'Skills',
    },
    {
      to: 'work',
      label: 'Work',
    },
    {
      to: 'experience',
      label: 'Experience',
    },
    {
      to: 'certifications',
      label: 'Certifications',
    },
  ];

  /*
   * Close the mobile menu when clicking outside.
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        dispatch(closeNavbar());
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, dispatch]);

  /*
   * Close menu when pressing Escape.
   */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        dispatch(closeNavbar());
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, dispatch]);

  const handleNavClick = (): void => {
    dispatch(closeNavbar());
  };

  /*
   * Animation for the mobile/tablet dropdown.
   */
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -8,
      scale: 0.97,
      transformOrigin: 'top right',
      transition: {
        duration: 0.15,
        ease: 'easeOut',
      },
    },

    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transformOrigin: 'top right',
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -4,
    },

    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <nav className="relative z-50 mx-auto w-full max-w-[1160px] px-4">
      <div className="flex h-[88px] items-center justify-between">
        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          to="home"
          smooth
          duration={500}
          offset={-88}
          onClick={handleNavClick}
          className="cursor-pointer text-[21px] font-extrabold tracking-[-1px] text-ink"
        >
          sree<span className="text-violet">.</span>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
            Visible only on large screens
        ====================================================== */}
        <div className="hidden items-center gap-[25px] lg:flex">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={500}
              offset={-88}
              className="cursor-pointer text-[13px] font-semibold text-muted transition-colors duration-200 hover:text-violet"
            >
              {label}
            </Link>
          ))}

          {/* Theme */}
          <ThemeToggle />

          {/* Contact */}
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-88}
            className="cursor-pointer rounded-button bg-ink px-4 py-3 text-[13px] font-semibold text-white transition-opacity duration-200 hover:opacity-90"
          >
            Let&apos;s talk
          </Link>
        </div>

        {/* =====================================================
            TABLET / MOBILE CONTROLS
        ====================================================== */}
        <div
          ref={menuRef}
          className="relative flex items-center gap-2 lg:hidden"
        >
          {/* Menu / Settings Button */}
          <button
            type="button"
            onClick={() => dispatch(toggleNavbar())}
            aria-label={
              isOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={isOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-button
              border
              border-line
              bg-white
              text-ink
              transition-all
              duration-200
              hover:border-violet
              hover:text-violet
              focus:outline-none
              focus:ring-2
              focus:ring-lavender
            "
          >
            {isOpen ? (
              <FaTimes className="h-[17px] w-[17px]" />
            ) : (
              <FaBars className="h-[17px] w-[17px]" />
            )}
          </button>

          {/* =================================================
              MOBILE / TABLET FLOATING MENU
          ================================================== */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="
                  absolute
                  right-0
                  top-[52px]
                  w-[240px]
                  overflow-hidden
                  rounded-card
                  border
                  border-line
                  bg-white
                  shadow-card
                "
              >
                <div className="p-2">
                  {/* Navigation links */}
                  <div className="flex flex-col">
                    {navLinks.map(({ to, label }) => (
                      <motion.div key={to} variants={itemVariants}>
                        <Link
                          to={to}
                          smooth
                          duration={500}
                          offset={-88}
                          onClick={handleNavClick}
                          className="
                            block
                            cursor-pointer
                            rounded-[9px]
                            px-3
                            py-2.5
                            text-[13px]
                            font-semibold
                            text-muted
                            transition-colors
                            duration-150
                            hover:bg-lavender-soft
                            hover:text-violet
                          "
                        >
                          {label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-2 border-t border-line" />

                  {/* Theme */}
                  <div className="flex items-center justify-between rounded-[9px] px-3 py-2.5">
                    <span className="text-[13px] font-semibold text-muted">
                      Theme
                    </span>

                    <ThemeToggle />
                  </div>

                  {/* Contact */}
                  <Link
                    to="contact"
                    smooth
                    duration={500}
                    offset={-88}
                    onClick={handleNavClick}
                    className="
                      mt-1
                      block
                      cursor-pointer
                      rounded-button
                      bg-ink
                      px-4
                      py-3
                      text-center
                      text-[13px]
                      font-semibold
                      text-white
                      transition-opacity
                      duration-200
                      hover:opacity-90
                    "
                  >
                    Let&apos;s talk
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
