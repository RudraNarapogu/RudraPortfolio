import { motion } from 'framer-motion'

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: '#080808',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative' }}>
        {/* Glow effect */}
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
            zIndex: -1,
          }}
        />

        <motion.h1
          initial={{ 
            opacity: 0, 
            filter: 'blur(20px)', 
            scale: 0.85,
            letterSpacing: '0.5em'
          }}
          animate={{ 
            opacity: 1, 
            filter: 'blur(0px)', 
            scale: 1,
            letterSpacing: '0.05em'
          }}
          transition={{ 
            duration: 1.8, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#FFFFFF',
            textAlign: 'center',
            margin: 0,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Narapogu Uday Charan Rudra
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.2)',
            marginTop: '12px',
            marginInline: 'auto',
          }}
        />
      </div>
    </motion.div>
  )
}
