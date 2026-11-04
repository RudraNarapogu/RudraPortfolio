import { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 20, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      try {
        const el = e.target && e.target.nodeType === 1 ? e.target : e.target?.parentElement
        if (!el) return
        const isHover =
          el.tagName?.toLowerCase() === 'a' ||
          el.tagName?.toLowerCase() === 'button' ||
          (typeof el.closest === 'function' && Boolean(el.closest('a') || el.closest('button'))) ||
          el.dataset?.cursor === 'hover'

        setIsHovering(Boolean(isHover))
      } catch (err) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        id="custom-cursor"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorXSpring,
          y: cursorYSpring,
          pointerEvents: 'none',
          zIndex: 99999,
          width: isHovering ? 60 : 8,
          height: isHovering ? 60 : 8,
          borderRadius: '50%',
          border: isHovering ? '1px solid rgba(255,255,255,0.4)' : 'none',
          background: isHovering ? 'transparent' : '#FFFFFF',
          mixBlendMode: isHovering ? 'difference' : 'normal',
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform, width, height',
        }}
        transition={{
          width: { duration: 0.25 },
          height: { duration: 0.25 },
          background: { duration: 0.25 },
          border: { duration: 0.25 },
        }}
      />
      <style>{`
        * { cursor: none !important; }
        @media (max-width: 768px) {
          #custom-cursor { display: none; }
          * { cursor: auto !important; }
        }
      `}</style>
    </>
  )
}
