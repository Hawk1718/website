import { TweenMax, TimelineMax, Power4, Back } from 'gsap'
// import anime from 'animejs/lib/anime.es.js'

// Function: Draw waves
const drawWaves = function() {
  const tlTop = new TimelineMax({ repeat: -1 });

  tlTop
    .staggerFrom('#wave-g__top g', 0.7, { opacity: 0.2, ease: Power4.easeOut}, 0.06)
    .add(TweenMax.to('#wave-g__top g', 0.7, { opacity: 0.2, ease: Power4.easeOut }))
    // .staggerTo('#wave-g__top g', 1, { opacity: 0.2 }, .15)
    // .staggerFrom('#wave-g__top g', 1, { opacity: 0.2 }, .15)

  const tlBottom = new TimelineMax({ repeat: -1 });

  tlBottom
    .staggerFrom('#wave-g__bottom g', 0.7, { opacity: 0.2, ease: Power4.easeOut }, 0.06)
    .add(TweenMax.to('#wave-g__bottom g', 0.7, { opacity: 0.2, ease: Power4.easeOut }))

  // anime({
  //   targets: '#wave-g__top g',
  //   duration: 200,
  //   opacity: 0.2,
  //   delay: anime.stagger(50, { start: 200, easing: 'linear' }),
  //   direction: 'reverse',
  //   loop: true
  // });


}

// Function: Init
function init() {
  drawWaves()
}

// Call init
init()
