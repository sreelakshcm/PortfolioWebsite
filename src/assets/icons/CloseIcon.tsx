import { RootState } from '@app/store';
import React from 'react';
import { useSelector } from 'react-redux';

const CloseIcon: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const isDarkMode = theme === 'dark';
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <g id="Menu / Close_SM">
        <path
          id="Vector"
          d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
          stroke={isDarkMode ? '#FFFFFF' : '#000000'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default CloseIcon;
