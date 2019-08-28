// import { TweenMax, Linear } from 'gsap'
import anime from 'animejs/lib/anime.es.js'

// Function: Draw waves
const drawWaves = function() {
  anime({
    targets: '#wave-g__top g',
    duration: 200,
    opacity: 0.2,
    delay: anime.stagger(50, { start: 200, easing: 'linear' }),
    direction: 'reverse',
    loop: true
  });
}

// Function: Init
function init() {
  drawWaves()
}

// Call init
init()
