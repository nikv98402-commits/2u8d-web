/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geologica', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#2b2e3b',
          light: '#f3f3f2',
          accent: '#bc9671',
        }
      }
    },
  },
  plugins: [],
};