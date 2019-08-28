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

    let globeDiv = document.getElementById("globe-container")
    globeDiv.innerHTML = "<img id=\"globe-image\" width=\"380px\" src=\"assets/globe.png\" />"

    let recommendedDiv = document.getElementById("recommendedBrowsers")
    recommendedDiv.innerHTML = "Recommended browsers: <a href=\"http://www.google.com/chrome\">Google&nbsp;Chrome&nbsp;9.0+</a>, <a href=\"http://www.mozilla.org/ru/firefox/new/\">Mozilla&nbsp;Firefox&nbsp;4.0+</a>, <a href=\"http://www.opera.com/ru\">Opera&nbsp;13.0+</a>, <a href=\"http://windows.microsoft.com/ru-ru/internet-explorer/ie-11-worldwide-languages\">Internet&nbsp;Explorer&nbsp;11.0+</a>"
  } else {

    const container = document.getElementById('globe');

    $.getJSON('assets/data/rank2.json', function (data) {

      // Make the globe
      const globe = new DAT.Globe(container)

      // Tell the globe about your JSON data
      globe.addData(data, { format: 'magnitude' })

      // Begin animation
      globe.animate()

      // Create the geometry
      globe.createPoints()

      setTimeout(() => {
        $('.hero__globe-particles').css('opacity', 1)
      }, 500)
    })
  }
}

const animateParticles = function() {
  $('.globe__particle').each(function (index, p) {
    $(p).addClass('animated')
    $(p).css('animation-delay', `${random(1, 3)}s`)
  })

  setInterval(() => {
    $('.globe__particle').each(function (index, p) {
      $(p).addClass('animated')
      $(p).css('animation-delay', `${random(1, 3)}s`)
    })
  }, 1000)
}

const random = function(min, max) {
  return min + (max - min) * Math.random()
}

addGlobe();
animateParticles();

