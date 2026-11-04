import { motion } from 'framer-motion'
import { ArrowUp, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube, FaDev, FaAws, FaGoogle } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socials = [
  { icon: <FaGithub size={14} />, href: 'https://github.com/RudraNarapogu', label: 'GitHub' },
  { icon: <FaLinkedinIn size={14} />, href: 'https://www.linkedin.com/in/rudranarapogu/', label: 'LinkedIn' },
  { icon: <FaInstagram size={14} />, href: 'https://www.instagram.com/buildwith.rudra/', label: 'Instagram' },
  { icon: <FaYoutube size={14} />, href: 'https://www.youtube.com/@rudranarapogu', label: 'YouTube' },
  { icon: <FaXTwitter size={14} />, href: 'https://x.com/rudranarapogu', label: 'X (Twitter)' },
  { icon: <FaDev size={14} />, href: 'https://dev.to/rudranarapogu', label: 'DEV Community' },
  { icon: <FaAws size={14} />, href: 'https://community.aws/@rudranarapogu', label: 'AWS Builder' },
  { icon: <FaGoogle size={14} />, href: 'https://me.developers.google.com/u/108888455259437787878', label: 'Google Developer' },
  { icon: <Mail size={14} />, href: 'mailto:narapogurudra@gmail.com', label: 'Email' },
]

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
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer" className="social-btn" title={s.label}>
              {s.icon}
            </a>
          ))}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-ghost"
            style={{ padding: '7px 16px', fontSize: '0.75rem', marginLeft: 8 }}
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
