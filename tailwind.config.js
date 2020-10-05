module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  corePlugins: {
    container: false,
  },

  theme: {
    colors: {
      white: '#fff',
      black: '#04070a',

      primary: {
        100: '#dcf5f3',
        200: '#b8ebe7',
        300: '#95e1dc',
        400: '#71d7d0',
        500: '#4ecdc4',
        600: '#3ea49d',
        700: '#2f7b76',
        800: '#1f524e',
        900: '#102927',
      },

      gray: {
        100: '#f3f8f7',
        200: '#ebf0f0',
        300: '#e2e7e6',
        400: '#d0d5d4',
        500: '#abb0af',
        600: '#7f8483',
        700: '#565b5a',
        800: '#3a3e3d',
        900: '#242727',
      },
    },
  },
}
