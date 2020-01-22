// Libraries/plugins
import { TweenMax } from 'gsap'

// Function: Draw waves
export default function(selector) {
  const bars = [...document.querySelectorAll(selector)].reverse()

  bars.forEach((b, index) => {
    const delay = index * 0.065 + 0.25
    TweenMax.fromTo(
      b,
      5,
      { opacity: 1 },
      { opacity: 0.2, immediateRender: false, delay, repeat: -1 }
    )
  })
}
