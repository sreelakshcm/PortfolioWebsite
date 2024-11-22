import React from 'react';
import { certifications } from '@utils/certifications';

const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="text-fontDarkLight dark:text-fontDarkDark py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-primaryLight dark:text-primaryDark">
          Certifications
        </h2>
        {/* Container with grid layout for two cards in a row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-6 rounded-lg shadow-lg"
            >
              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-56 object-cover rounded-md"
                />
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 text-primaryLight dark:text-primaryDark">
                  {cert.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-2">
                  {cert.description}
                </p>
                <p className="text-sm sm:text-base text-fontDarkLight dark:text-fontDarkDark">
                  Provider:{' '}
                  <span className="font-semibold">{cert.provider}</span>
                </p>
                <p className="text-sm sm:text-base text-fontDarkLight dark:text-fontDarkDark mb-4">
                  Date: <span className="font-semibold">{cert.date}</span>
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primaryLight dark:text-primaryDark hover:underline text-sm sm:text-base font-medium"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
