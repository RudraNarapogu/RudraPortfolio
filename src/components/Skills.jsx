import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = {
  Automation: ['n8n', 'AI Automation', 'Workflow Orchestration', 'Zapier', 'API Integration'],
  'AI & Data': ['Generative AI', 'Machine Learning', 'Data Analysis', 'Agentic Systems', 'OCR'],
  Backend: ['Python', 'Django', 'FastAPI', 'Java', 'REST APIs', 'Docker'],
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  'Databases': ['MySQL', 'SQL', 'PostgreSQL', 'SQLite'],
}

const proficiency = [
  { name: 'AI Automation / n8n', level: 95 },
  { name: 'Python / Django', level: 85 },
  { name: 'Generative AI', level: 88 },
  { name: 'REST APIs', level: 90 },
  { name: 'Full Stack Dev', level: 82 },
]

export default function Skills() {
  const [active, setActive] = useState('Frontend')

  return (
    <section id="skills" style={{
      padding: '100px 0',
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-number">// 02</span>
          <h2 className="section-title">Skills</h2>
          <p className="section-sub">What I bring to the table</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 56 }} className="skills-layout">
          {/* Left: Tab + skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="tabs-list" style={{ marginBottom: 24, display: 'inline-flex' }}>
              {Object.keys(categories).map(tab => (
                <button key={tab} className={`tab-btn ${active === tab ? 'active' : ''}`} onClick={() => setActive(tab)}>
                  {tab}
                </button>
              ))}
            </div>

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}
            >
              {categories[active].map((skill, i) => (
                <motion.span
                  key={skill}
                  className="skill-pill"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Proficiency bars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h3 style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
              color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: 24,
            }}>Core Proficiency</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {proficiency.map(({ name, level }, i) => (
                <div key={name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{name}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>{level}%</span>
                  </div>
                  <div className="bar-track">
                    <motion.div
                      className="bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 1.2, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
