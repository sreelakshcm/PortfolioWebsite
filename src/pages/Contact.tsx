import { apiPost } from '@api/api';
import { addAlert } from '@app/features/alertSlice';
import { setLoading } from '@features/loaderSlice';
import React, { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ContactFormData } from 'types/contactForm';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: null,
    email: null,
    message: null,
  });
  const [errors, setErrors] = useState<{ name: boolean; email: boolean; message: boolean }>({
    name: false,
    email: false,
    message: false,
  });
  const dispatch = useDispatch();

  const inputClassnames = (field: keyof ContactFormData): string =>
    `bg-gray-100 cursor-text focus-visible:outline-none dark:text-white dark:bg-gray-800 p-4 rounded-lg w-full ${errors[field] ? 'border border-solid border-red-300 shadow-red-500/50 shadow-md' : ''
    }`;

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

const handleEmailValidation =(email: string): void=>{
if (!validateEmail(email)) {
      setErrors((prev) => ({ ...prev, email: true }));
dispatch(addAlert({ message: 'Please Enter a valid email', type: 'error' }));
    } 
}

  const handleFormDataChange = (fieldName: keyof ContactFormData, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
    // Remove error when user starts typing
    if (value.trim() !== '') {
      setErrors((prev) => ({ ...prev, [fieldName]: false }));
    }
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    dispatch(setLoading(true));

    // Validate fields
    const newErrors = {
      name: formData.name === null || formData.name.trim() === '',
      email: formData.email === null || formData.email.trim() === '',
      message: formData.message === null || formData.message.trim() === '',
    };
    setErrors(newErrors);

    // Check if any field is empty
    if (Object.values(newErrors).some((error) => error)) {
      dispatch(addAlert({ message: 'Please fill all the form fields', type: 'error' }));
      dispatch(setLoading(false));
      return;
    }

    try {
      const { data } = await apiPost<{ success: boolean; message: string }>('send-email', formData);
      if (data.success) setFormData({ name: null, email: null, message: null });
      dispatch(addAlert({ message: data.message, type: data.success ? 'success' : 'error' }));
    } catch (err) {
      dispatch(addAlert({ message: (err as Error).message as string, type: 'error' }));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-primaryLight dark:text-primaryDark">
          Contact
        </h2>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Your Name"
                className={inputClassnames('name')}
                value={formData.name || ''}
                onChange={(e) => handleFormDataChange('name', e.target.value)}
              />
              {!formData.name && <span className="absolute left-[6.7rem] top-4 text-red-500">*</span>}
            </div>
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Your Email"
                className={inputClassnames('email')}
                value={formData.email || ''}
                onChange={(e) => handleFormDataChange('email', e.target.value)}
onBlur={(e)=>handleEmailValidation(e.target.value)}
              />
              {!formData.email && <span className="absolute left-[6.5rem] top-4 text-red-500">*</span>}
            </div>
          </div>
          <div className="relative w-full">
            {!formData.message && <span className="absolute left-[8.2rem] top-4 text-red-500">*</span>}
            <textarea
              placeholder="Your Message"
              className={inputClassnames('message')}
              rows={6}
              value={formData.message || ''}
              onChange={(e) => handleFormDataChange('message', e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="inline-block cursor-pointer bg-primaryLight text-white dark:bg-primaryDark px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:bg-primaryLightHover dark:hover:bg-primaryDarkHover transition duration-300 transform hover:scale-105"
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
