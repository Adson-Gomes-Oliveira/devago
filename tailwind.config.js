/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}' ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': [ 'bebasNeue', 'sans-serif' ],
        'oswald': [ 'oswaldVariable', 'sans-serif' ],
      },
      colors: {
        default: '#F4F5F6',
        darkenBackground: '#292B2C',
        lightDarkenBackground: '#293438',
      },
    },
  },
  plugins: [],
};
