import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaYoutube, FaDev, FaAws, FaGoogle } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socials = [
  { icon: <FaGithub size={16} />, href: 'https://github.com/RudraNarapogu', label: 'GitHub' },
  { icon: <FaLinkedinIn size={15} />, href: 'https://www.linkedin.com/in/rudranarapogu/', label: 'LinkedIn' },
  { icon: <FaInstagram size={16} />, href: 'https://www.instagram.com/buildwith.rudra/', label: 'Instagram' },
  { icon: <Mail size={16} />, href: 'mailto:narapogurudra@gmail.com', label: 'Email' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const sub = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(form.message)
    window.location.href = `mailto:narapogurudra@gmail.com?subject=${sub}&body=${body}`
  }

  return (
    <section id="contact" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-number">// 07</span>
          <h2 className="section-title">Let's Talk</h2>
          <p className="section-sub">
            Open to full-time roles, freelance projects, and interesting conversations.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 56 }}>
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                Name
              </label>
              <input type="text" className="form-input" placeholder="Your name"
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                Email
              </label>
              <input type="email" className="form-input" placeholder="your@email.com"
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                Message
              </label>
              <textarea className="form-input" rows={5} placeholder="Tell me about the opportunity..."
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
            </div>
            <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: 4 }}>
              <Send size={14} /> Send Message
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
          >
            {/* Status */}
            <div className="card" style={{ padding: '20px 24px', marginBottom: 2, borderRadius: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#fff', display: 'inline-block',
                  animation: 'pulse 2s ease-in-out infinite',
                }} />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>Available immediately</span>
              </div>
            </div>

            {[
              { icon: <Mail size={15} />, label: 'Email', val: 'narapogurudra@gmail.com', href: 'mailto:narapogurudra@gmail.com' },
              { icon: <MapPin size={15} />, label: 'Location', val: 'Khammam, Telangana, India', href: null },
            ].map(item => (
              <div key={item.label} className="card" style={{ padding: '18px 24px', borderRadius: 0, marginBottom: 2 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', textDecoration: 'none' }}>
                        {item.val}
                      </a>
                    ) : (
                      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>{item.val}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Socials */}
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="social-btn"
                  title={s.label}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </section>
  )
}
