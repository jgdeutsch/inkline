/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc6fb',
          400: '#36a7f6',
          500: '#0c8be8',
          600: '#006fc6',
          700: '#0059a1',
          800: '#04498a',
          900: '#083c71',
          950: '#06264a',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dae5',
          300: '#acbbd0',
          400: '#8096b7',
          500: '#5e79a0',
          600: '#476186',
          700: '#3a4e6d',
          800: '#33435d',
          900: '#2c3950',
          950: '#1c2536',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        heading: ['var(--font-heading)'],
      },
    },
  },
  plugins: [],
};