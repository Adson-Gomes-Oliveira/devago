/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}' ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': [ 'bebasNeue', 'sans-serif' ],
        'oswald': [ 'oswaldVariable', 'sans-serif' ],
        'montserrat': [ 'montserrat', 'sans-serif' ],
      },
      colors: {
        default: '#F4F5F6',
        darkenBackground: 'rgba(41, 43, 44, 0.75)',
        lightBackground: '#293438',
        projectDarkenBlue: '#1486A8',
        projectLightBlue: '#32B7E3',
      },
    },
  },
  plugins: [],
};
