/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Required for dark mode toggle
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        accent: '#f59e42',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
