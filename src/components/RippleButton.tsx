import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const RippleButton: React.FC<RippleButtonProps> = ({ children, onClick, className }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleRipple = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const button = buttonRef.current;
    if (button) {
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.className = 'absolute rounded-full bg-primaryLightActive opacity-75 pointer-events-none transform transition duration-300 scale-0';

      button.appendChild(ripple);

      requestAnimationFrame(() => {
        ripple.classList.remove('scale-0');
        ripple.classList.add('scale-100');
      });

      setTimeout(() => {
        ripple.remove();
      }, 300); // Match this duration with your CSS transition duration
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={handleRipple}
      className={`${className} relative cursor-pointer overflow-hidden text-white bg-primaryLight px-6 py-2 rounded-full shadow-lg hover:bg-primaryLightHover dark:hover:bg-primaryDarkHover focus:outline-none h-12`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.9, ease: 'easeOut' }}
    >
      {children}
    </motion.button>
  );
};

export default RippleButton;
