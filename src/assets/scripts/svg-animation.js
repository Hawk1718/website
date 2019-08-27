import { TweenMax, Linear } from 'gsap'

// Function: Draw waves
const drawWaves = function() {
  const groups = document.querySelectorAll('#wave-g__top g')

  groups.forEach((g, index) => {
    const tl = new TimelineMax({ repeat: -1})
    tl.from(g, 1, { delay: 0.25, opacity: 0.2, ease: Linear.easeNone })
    // tl.to(g, 4, { delay: 0.25, opacity: 1, ease: Linear.easeNone })
  })
}

// Function: Init
function init() {
  drawWaves()
}

// Call init
// init()
