/* src/app.js */

// Styles
import "styles/_app.scss";

$(document).ready(() => {
  if ($(".home__page").length > 0) {
    require("scripts/utils");

    require("scripts/home");
    require("scripts/render-globe");
    require("scripts/svg-animation");
  }
});
