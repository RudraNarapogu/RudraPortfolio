import { motion } from 'framer-motion'

const coursework = [
  'Python Programming', 'Artificial Intelligence', 'Machine Learning', 'Data Structures',
  'Web Development', 'Software Engineering', 'Database Management', 'Cloud Computing',
]

export default function Education() {
  return (
    <section id="education" style={{
      padding: '100px 0',
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-number">// 06</span>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="card"
          style={{ padding: '40px', marginTop: 8, marginBottom: 24 }}
        >
          <div className="education-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'start', marginBottom: 24 }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem', fontWeight: 700, color: '#fff',
                letterSpacing: '-0.02em', marginBottom: 6,
              }}>
                B.Tech — CSE (Data Science)
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>
                Swarna Bharathi Institute of Science & Technology
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem', fontWeight: 700, color: '#fff',
                letterSpacing: '-0.03em',
              }}>2028</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Expected</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card"
          style={{ padding: '40px', marginTop: 8 }}
        >
          <div className="education-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'start', marginBottom: 24 }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem', fontWeight: 700, color: '#fff',
                letterSpacing: '-0.02em', marginBottom: 6,
              }}>
                Diploma — Cloud Computing & Big Data
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>
                Government Institute of Electronics
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem', fontWeight: 700, color: '#fff',
                letterSpacing: '-0.03em',
              }}>8.6</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>CGPA</div>
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .education-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .education-grid > div:last-child { text-align: left !important; }
          .card { padding: 32px 24px !important; }
        }
      `}</style>
    </section>
  )
}
