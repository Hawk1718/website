/* src/app.js */

// Styles
import 'styles/_app.scss'

$(document).ready(() => {
  console.log('Ready!')

  if ($('.home__page').length > 0) {
    require('scripts/render-globe')
    require('scripts/svg-animation')

  }
})
