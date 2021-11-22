module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grayDark: '#121212',
        grayLight: '#242424',
        grayBg: '#2e2e2e'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
