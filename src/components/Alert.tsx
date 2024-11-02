import CloseIcon from '@icons/CloseIcon';
import React, { useEffect } from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 150000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const alertStyles = type === 'success'
    ? 'text-[#47d147]'
    : 'text-[#ff1a1a]';

  return (
    <div className={'flex justify-between items-center w-96 h-9 rounded-lg px-4 shadow-lg transition-opacity duration-300 bg-gray-100 dark:text-white dark:bg-gray-800 '} role="alert">
      <div className={'flex justify-start items-center gap-2 w-full'}>
        <span className='w-5 h-5 mb-0.5'>
          <img src={type === 'success' ? '/assets/utilityIcons/GreenTick.svg' : '/assets/utilityIcons/Error.svg'} alt='status' />
        </span>
        <span>{message}</span>
      </div>
      <button onClick={onClose} className={`ml-2 ${alertStyles} w-6 h-6 cursor-pointer`}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default Alert;
