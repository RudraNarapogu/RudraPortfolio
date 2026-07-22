import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '28px 0',
      background: 'var(--bg)',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>
          © 2025 Narapogu Uday Charan Rudra — Built with React & Vite
        </span>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href="https://github.com/RudraNarapogu" target="_blank" rel="noopener noreferrer"
            className="social-btn" title="GitHub">
            <FaGithub size={15} />
          </a>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-ghost"
            style={{ padding: '7px 16px', fontSize: '0.75rem' }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={12} /> Top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
