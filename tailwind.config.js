/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        ink: '#182334',
        muted: '#637188',
        paper: '#fbfcff',
        line: '#e4e9f1',

        violet: '#5b5ce2',
        lavender: '#e9eafe',
        mint: '#dff7f1',
        peach: '#ffe5da',

        'violet-dark': '#3b3cb4',
        'mint-dark': '#18796e',
        'mint-text': '#47716c',
        'mint-accent': '#26756b',

        'violet-light': '#7476e8',
        'lavender-soft': '#f0f2ff',
        'blue-soft': '#e3ebff',
        'cyan-soft': '#c9eff5',
        'blue-gray': '#dfe5ef',
        'card-gray': '#eef1f8',
        'peach-light': '#ffeed1',

        'contact-muted': '#bac6d8',
        'contact-accent': '#a9f0df',
        'mint-border': '#ccece5',
      },

      fontFamily: {
        sans: ['Manrope', 'Arial', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },

      borderRadius: {
        card: '14px',
        project: '16px',
        contact: '18px',
        button: '10px',
        pill: '99px',
      },

      boxShadow: {
        photo: '0 24px 44px rgba(53, 61, 107, 0.18)',
        card: '0 12px 24px rgba(69, 84, 123, 0.13)',
        float: '0 10px 25px rgba(53, 61, 107, 0.1)',
      },
    },
  },

  plugins: [],
};
