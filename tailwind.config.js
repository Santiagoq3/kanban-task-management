/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      mainPurple: '#635FC7',
      mainPurpleHover: '#A8A4FF',
      darkGrey: '#2B2C37',
      darkGreySecondary: '#3E3F4E',
      graySecondary: '#828FA3',
      Light: '#E4EBFA',
      veryDarkGrey: '#20212C',
      lightGrey: '#F4F7FD',
      mainRed: '#EA5555',
      mainRedHover: '#FF9898',
      white: '#FFFFFF',
    },
    fontFamily: {
      JakartaSans: 'Plus Jakarta Sans',
    },
  },
  plugins: [],
};
