import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: '100px 0',
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-number">// 04</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">Where I've worked</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ position: 'relative', paddingLeft: 32, marginBottom: 40 }}
          className="experience-item"
        >
          <div className="timeline-line" />
          <div className="timeline-dot" />

          <div className="card" style={{ padding: '32px 36px', borderRadius: 4 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 4 }}>
                  Freelance AI Automation Developer
                </h3>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 8 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
                    Self-Employed
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>
                    <Calendar size={11} /> Jan 2025 – Present
                  </span>
                </div>
              </div>
              <span className="badge badge-white">Freelance</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Developed AI-powered automation workflows using n8n, APIs, and AI platforms.',
                'Built a Telegram-based AI data entry automation system using OCR and AI extraction.',
                'Created AI voice agent workflows and business automation solutions.',
              ].map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-mono)', flexShrink: 0, marginTop: 1 }}>→</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ position: 'relative', paddingLeft: 32, marginBottom: 40 }}
          className="experience-item"
        >
          <div className="timeline-line" />
          <div className="timeline-dot" />

          <div className="card" style={{ padding: '32px 36px', borderRadius: 4 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 4 }}>
                  Full Stack Developer Intern
                </h3>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 8 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
                    Crimson Innovative Technologies Pvt. Ltd.
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>
                    <Calendar size={11} /> May 2024 – Oct 2024
                  </span>
                </div>
              </div>
              <span className="badge badge-white">Internship</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Developed modules for an Employee Task Management System using Django, JavaScript, and MySQL.',
                'Optimized backend workflows and database performance by 15%.',
              ].map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-mono)', flexShrink: 0, marginTop: 1 }}>→</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ position: 'relative', paddingLeft: 32, marginBottom: 40 }}
          className="experience-item"
        >
          <div className="timeline-line" />
          <div className="timeline-dot" />

          <div className="card" style={{ padding: '32px 36px', borderRadius: 4 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 4 }}>
                  Data Science and Machine Learning Intern
                </h3>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 8 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
                    upSkill Campus
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>
                    <Calendar size={11} /> May 2026 – Jul 2026
                  </span>
                </div>
              </div>
              <span className="badge badge-white">Internship</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Selected for a research-oriented internship in collaboration with UniConverge Technologies Pvt. Ltd.',
                'Developing ML models and performing exploratory data analysis (EDA) on large datasets.',
              ].map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-mono)', flexShrink: 0, marginTop: 1 }}>→</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        </div>
      <style>{`
        @media (max-width: 768px) {
          .experience-item { padding-left: 32px !important; margin-left: 0; }
          .timeline-line { left: 4px !important; }
          .timeline-dot { left: 0px !important; }
          .card { padding: 24px 20px !important; }
        }
      `}</style>
    </section>
  )
}
