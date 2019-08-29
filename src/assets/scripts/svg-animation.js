// Libraries/plugins
import { TweenMax } from 'gsap'

// Function: Draw waves
const drawWaves = function() {
  const topBars = [].slice.call(document.querySelectorAll('#wave-g__top g')).reverse()
  const bottomBars = [].slice.call(document.querySelectorAll('#wave-g__bottom g')).reverse()

  topBars.forEach((b, index) => {
    const delay = index * 0.065 + 0.25
    TweenMax.fromTo(b, 5, { opacity: 1 }, { opacity: 0.2, immediateRender: false, delay: delay, repeat: -1 })
  })

  bottomBars.forEach((b, index) => {
    const delay = index * 0.065 + 0.25
    TweenMax.fromTo(b, 5, { opacity: 1 }, { opacity: 0.2, immediateRender: false, delay: delay, repeat: -1 })
  })
}

// Function: Init
function init() {
  drawWaves()
}

// Call init
init()
