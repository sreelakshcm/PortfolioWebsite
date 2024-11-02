import { apiPost } from '@api/api';
import { addAlert } from '@features/alertSlice';
import React, { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ContactFormData } from 'types/contactForm';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: null, email: null, message: null,
  });
  const dispatch = useDispatch();

  const inputClassnames = 'bg-gray-100 cursor-text focus-visible:outline-none dark:text-white dark:bg-gray-800 p-4 rounded-lg w-full';

  const handleFormDataChange = (fieldName: string, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    try {
      if (Object.values(formData).every(val => val !== null)) {
        const { data } = await apiPost<{ success: boolean, message: string }>('send-email', formData);
        if (data.success) setFormData({ name: null, email: null, message: null });
        dispatch(addAlert({ message: data.message, type: data.success ? 'success' : 'error' }));
      } else {
        dispatch(addAlert({ message: 'Please fill all the form fields', type: 'error' }));
      }
    } catch (err) {
      dispatch(addAlert({ message: (err as Error).message as string, type: 'error' }));
    }
  };

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
              className={inputClassnames}
              value={formData.name || ''}
              onChange={(e) => handleFormDataChange('name', e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={inputClassnames}
              value={formData.email || ''}
              onChange={(e) => handleFormDataChange('email', e.target.value)}
            />
          </div>
          <textarea
            placeholder="Your Message"
            className={inputClassnames}
            rows={6}
            value={formData.message || ''}
            onChange={(e) => handleFormDataChange('message', e.target.value)}
          />
          <button
            type='submit'
            className="inline-block cursor-pointer bg-primaryLight text-white dark:bg-primaryDark px-6 py-3 sm:px-8
             sm:py-4 rounded-full shadow-lg hover:bg-primaryLightHover dark:hover:bg-primaryDarkHover transition duration-300 
             transform hover:scale-105"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
