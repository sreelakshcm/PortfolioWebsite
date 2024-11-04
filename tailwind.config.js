/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  darkMode: 'class', // Enable dark mode with the class strategy
  theme: {
    extend: {
      cursor: {
        default: 'url(/assets/Cursors/Default.svg), auto',
        pointer: 'url(/assets/Cursors/Pointer.svg), auto',
        text: 'url(/assets/Cursors/Text.svg), auto',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Applying Poppins font
      },
      boxShadow: {
        'top': '0 -2px 4px rgba(0, 0, 0, 0.1)', // Custom top shadow
      },
      colors: {
        mariner: {
          '50': '#f0f8fe',
          '100': '#ddedfc',
          '200': '#c3e1fa',
          '300': '#9acff6',
          '400': '#6ab4f0',
          '500': '#4797ea',
          '600': '#2673dd',
          '700': '#2966cc',
          '800': '#2753a6',
          '900': '#254783',
          '950': '#1b2d50',
        },
        primary: {
          '50': '#e9f1fc',
          '100': '#d3e2f8',
          '200': '#bdd4f5',
          '300': '#a7c6f1',
          '400': '#91b7ee',
          '500': '#7ba9ea',
        },
        primaryLight: '#2673dd', // Blue for buttons (light mode)
        primaryLightHover: '#91b7ee', // Hover button (light mode)
        primaryLightActive: '#659be7', // Active button (light mode)
        fontDarkLight: '#1c1c1c', // Dark font (light mode)
        fontLightLight: '#585757', // Light font (light mode)
        backgroundLight: '#fafafa', // Background (light mode)

        primaryDark: '#2673dd', // Blue for buttons (dark mode)
        primaryDarkHover: 'rgba(38, 115, 221, 0.3)', // Hover button (dark mode)
        primaryDarkActive: 'rgba(38, 115, 221, 0.14)', // Active button (dark mode)
        fontDarkDark: 'rgba(255, 255, 255, 0.9)', // Dark font (dark mode)
        fontLightDark: 'rgba(255, 255, 255, 0.7)', // Light font (dark mode)
        backgroundDark: '#1a202c', // Background (dark mode)
      },
    },
  },
  variants: {},
  plugins: [],
};
