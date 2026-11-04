import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let lenis
    let animationFrameId
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.1,
      })

      function raf(time) {
        if (lenis) {
          lenis.raf(time)
          animationFrameId = requestAnimationFrame(raf)
        }
      }

      animationFrameId = requestAnimationFrame(raf)
    } catch (err) {
      console.warn('Lenis smooth scroll error:', err)
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      if (lenis && typeof lenis.destroy === 'function') lenis.destroy()
    }
  }, [])

  return <div style={{ position: 'relative' }}>{children}</div>
}
