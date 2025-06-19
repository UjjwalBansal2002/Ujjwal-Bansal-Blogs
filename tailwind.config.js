/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Required for dark mode toggle
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
