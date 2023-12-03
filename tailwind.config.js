module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grayDark: '#121212',
        grayLight: '#242424',
        grayLighter: '#292929',
        grayBg: '#2e2e2e'
      },
    }
  },
  variants: {
    extend: {
      padding: ['hover']
    },
  },
  plugins: []
}
