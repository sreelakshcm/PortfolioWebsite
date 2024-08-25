import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-dark dark:text-light mb-10">Contact</h2>
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
            className="bg-primary dark:bg-secondary text-light
             dark:text-dark px-6 py-3 rounded-full shadow-md 
             hover:bg-opacity-80 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
