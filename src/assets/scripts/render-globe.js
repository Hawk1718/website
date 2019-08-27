// function browser() {

//   var ua = navigator.userAgent;

//   if (ua.search(/rv:11.0/) > 0) return 'Internet Explorer 11';
//   if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
//   if (ua.search(/Firefox/) > 0) return 'Firefox';
//   if (ua.search(/Opera/) > 0) return 'Opera';
//   if (ua.search(/Chrome/) > 0) return 'Google Chrome';
//   if (ua.search(/Safari/) > 0) return 'Safari';
//   if (ua.search(/Konqueror/) > 0) return 'Konqueror';
//   if (ua.search(/Iceweasel/) > 0) return 'Debian Iceweasel';
//   if (ua.search(/SeaMonkey/) > 0) return 'SeaMonkey';

//   if (ua.search(/Gecko/) > 0) return 'Gecko';

//   return 'Search Bot';
// }

const addGlobe = function () {
  if (!Detector.webgl) {

    var globeDiv = document.getElementById("globe-container");
    globeDiv.innerHTML = "<img id=\"globe-image\" width=\"380px\" src=\"assets/globe.png\" />";

    var recommendedDiv = document.getElementById("recommendedBrowsers");
    recommendedDiv.innerHTML = "Recommended browsers: <a href=\"http://www.google.com/chrome\">Google&nbsp;Chrome&nbsp;9.0+</a>, <a href=\"http://www.mozilla.org/ru/firefox/new/\">Mozilla&nbsp;Firefox&nbsp;4.0+</a>, <a href=\"http://www.opera.com/ru\">Opera&nbsp;13.0+</a>, <a href=\"http://windows.microsoft.com/ru-ru/internet-explorer/ie-11-worldwide-languages\">Internet&nbsp;Explorer&nbsp;11.0+</a>";
  } else {

    var container = document.getElementById('globe');

    $.getJSON('assets/data/rank.json', function (data) {
      // Parse the JSON
      // data = JSON.parse(data);

      // Remove globe image
      /*var glimage = document.getElementById("globe-image");

      container.removeChild(glimage);*/

      // Make the globe
      var globe = new DAT.Globe(container);

      // Tell the globe about your JSON data
      globe.addData(data, { format: 'magnitude' });

      // Create the geometry
      globe.createPoints();

      // Begin animation
      globe.animate();
    })


  };
};

addGlobe();

