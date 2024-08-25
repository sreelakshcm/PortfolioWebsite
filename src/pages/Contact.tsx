import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-primaryLight 
        dark:text-primaryDark">Contact</h2>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full"
            rows={6}
          />
          <button
            type="submit"
            className="inline-block cursor-pointer bg-primaryLight text-white dark:bg-primaryDark px-6 py-3 sm:px-8
             sm:py-4 rounded-full shadow-lg hover:bg-primaryLightHover dark:hover:bg-primaryDarkHover transition duration-300 
             transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
