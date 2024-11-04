import { contactLinks } from '@utils/contactList';
import React from 'react';

const Footer: React.FC = () => {
  const openInNewTab = (url: string): void => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-fontDarkDark dark:bg-backgroundDark text-fontDarkLight dark:text-fontDarkDark z-0 py-6 shadow-top">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {contactLinks.map(({ href, icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => openInNewTab(href)}
              className="text-fontLightLight cursor-pointer dark:text-primaryDark hover:text-primaryDark dark:hover:text-primaryLightHover"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
