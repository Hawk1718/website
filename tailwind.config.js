/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const {
  fontFamily: { sans },
  colors: { black, white }
} = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      sans: `Titillium Web, ${sans}`
    },
    colors: {
      black,
      white,
      blue: {
        100: '#ebf2ff',
        200: '#9cc1ff',
        300: '#619cff',
        400: '#3a83ff',
        500: '#0056eb',
        600: '#0048c4',
        700: '#003289',
        800: '#001d4e',
        900: '#000713'
      },
      gray: {
        100: '#F7FAFC',
        200: '#EDF2F7',
        300: '#E2E8F0',
        400: '#CBD5E0',
        500: '#A0AEC0',
        600: '#718096',
        700: '#4A5568',
        800: '#2D3748',
        900: '#1A202C'
      }
    },
    extend: {
      fontSize: {
        nav: '0.8rem'
      }
    }
  },
  variants: {},
  plugins: []
}
