import { TweenMax, Power0 } from 'gsap'

// Function: Draw waves
const drawWaves = function() {
  const groups = document.querySelectorAll('.platform__graphic-wave g')

  groups.forEach(g => {
    const tl = new TimelineMax({ repeat: -1, yoyo: true })
    tl.from(g, 6, { opacity: 0 })
  })
}

// Function: Draw wires
const drawWires = function() {

  const paths = document.querySelectorAll('.computer__wires path')

  paths.forEach(path => {
    const mainPath = {
      length: 0,
      pathLength: path.getTotalLength()
    };

    console.log(mainPath)

    function drawLineMain() {
      path.style.strokeDasharray = [mainPath.length, mainPath.pathLength].join(' ')
    }

    TweenMax.to(
      mainPath,
      10,
      {
        delay: Math.floor(Math.random() * Math.floor(10)),
        length: mainPath.pathLength,
        onUpdate: drawLineMain,
        ease: Power0.EaseOut,
        repeat: -1,
        repeatDelay: 1
      }
    )
  })
}

function init() {
  // drawWires()
  // drawWaves()
}

init()
