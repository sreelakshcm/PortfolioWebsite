import React from 'react';
import {
  FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const openInNewTab = (url: string): void => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-fontDarkDark dark:bg-backgroundDark text-fontDarkLight dark:text-fontDarkDark py-6 shadow-top">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <button onClick={() => openInNewTab('tel:+919844078134')} className="text-fontLightLight dark:text-primaryDark hover:text-primaryDark dark:hover:text-primaryLightHover">
            <FaPhoneAlt className="w-6 h-6" />
          </button>
          <button onClick={() => openInNewTab('mailto:sreelakshcm@gmail.com')} className="text-fontLightLight dark:text-primaryDark hover:text-primaryDark dark:hover:text-primaryLightHover">
            <FaEnvelope className="w-6 h-6" />
          </button>
          <button onClick={() => openInNewTab('https://www.linkedin.com/in/sree-lakshmi-c-m')} className="text-fontLightLight dark:text-primaryDark hover:text-primaryDark dark:hover:text-primaryLightHover">
            <FaLinkedin className="w-6 h-6" />
          </button>
          <button onClick={() => openInNewTab('https://github.com/sreelakshcm')} className="text-fontLightLight dark:text-primaryDark hover:text-primaryDark dark:hover:text-primaryLightHover">
            <FaGithub className="w-6 h-6" />
          </button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
