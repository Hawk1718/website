import { TweenMax, Linear } from 'gsap'
import anime from 'animejs/lib/anime.es.js'

// Function: Draw waves
const drawWaves = function() {
  const groups = document.querySelectorAll('#wave-g__top g')


  // anime({
  //   targets: '#wave-g__top g',
  //   opacity: 0.2,
  //   delay: anime.stagger(100, { easing: 'linear' }), // increase delay by 100ms for each elements.
  //   loop: true
  // });

  groups.forEach((g, index) => {
    const tl = new TimelineMax({ repeat: -1})
    tl.to(g, 0.5, { opacity: 0.2}, 4)
    // tl.to(g, 4, { delay: 0.25, opacity: 1, ease: Linear.easeNone })
  })
}

// Function: Init
function init() {
  drawWaves()
}

// Call init
// init()
