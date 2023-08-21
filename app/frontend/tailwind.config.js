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
        modalBackground: 'rgba(41, 43, 44, 0.95)',
        lightBackground: '#293438',
        projectDarkenBlue: '#1486A8',
        projectLightBlue: '#32B7E3',
      },
      screens: {
        'mobile': '320px',
        'tablet': '640px',
        'desktop': '1366px',
        'full': '1920px'
      }
    },
  },
  plugins: [],
};
