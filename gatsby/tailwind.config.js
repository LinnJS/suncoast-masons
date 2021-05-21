module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      mobileS: '320px',
      mobileM: '375px',
      mobileL: '425px',
      mobileXL: '640px',
      tablet: '768px',
      laptop: '1024px',
      laptopL: '1440px',
      desktop: '2560px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['macros'],
};
