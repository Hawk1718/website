const addGlobe = function () {
  if (!Detector.webgl) {

    let globeDiv = document.getElementById("globe-container")
    globeDiv.innerHTML = "<img id=\"globe-image\" width=\"380px\" src=\"assets/globe.png\" />"

    let recommendedDiv = document.getElementById("recommendedBrowsers")
    recommendedDiv.innerHTML = "Recommended browsers: <a href=\"http://www.google.com/chrome\">Google&nbsp;Chrome&nbsp;9.0+</a>, <a href=\"http://www.mozilla.org/ru/firefox/new/\">Mozilla&nbsp;Firefox&nbsp;4.0+</a>, <a href=\"http://www.opera.com/ru\">Opera&nbsp;13.0+</a>, <a href=\"http://windows.microsoft.com/ru-ru/internet-explorer/ie-11-worldwide-languages\">Internet&nbsp;Explorer&nbsp;11.0+</a>"
  } else {

    const container = document.getElementById('globe');

    $.getJSON('assets/data/rank.json', function (data) {
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

