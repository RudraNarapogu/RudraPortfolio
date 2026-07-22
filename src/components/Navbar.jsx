import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import Magnetic from './Magnetic'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700, fontSize: '1.05rem',
            color: '#fff', letterSpacing: '-0.02em',
          }}>
            Rudra<span style={{ color: 'rgba(255,255,255,0.25)' }}>.dev</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <Magnetic key={link.label} strength={0.25}>
              <a href={link.href} className="nav-link" style={{ padding: '8px 12px' }}>{link.label}</a>
            </Magnetic>
          ))}
          <Magnetic strength={0.3}>
            <a href="/resume.pdf" download className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.78rem' }}>
              Resume ↓
            </a>
          </Magnetic>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none' }}
          className="mobile-menu-btn"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              overflow: 'hidden',
              background: 'rgba(8,8,8,0.98)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="container" style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: 20 }}>
              {navLinks.map(link => (
                <a key={link.label} href={link.href}
                  className="nav-link" style={{ fontSize: '1rem' }}
                  onClick={() => setMobileOpen(false)}
                >{link.label}</a>
              ))}
              <a href="/resume.pdf" download className="btn-primary" style={{ textAlign: 'center', marginTop: 8 }}>
                Resume ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .navbar > .container { padding: 0 16px !important; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
