require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: {
    enabled: enablePurge,
      content: [
        './src/**/*.html',
        './src/**/*.scss'
      ]
  },
  theme: {
    container: {
      center: true,
    },
    extend: {}
  },
  variants: {},
  plugins: []
}
