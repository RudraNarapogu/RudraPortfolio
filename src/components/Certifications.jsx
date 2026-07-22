import { motion } from 'framer-motion'

const items = [
  { name: 'Google Student Ambassador', code: 'Ambassador', issuer: 'Google', year: '2026' },
  { name: 'GeeksForGeeks Campus Mantri', code: 'Campus Mantri', issuer: 'GeeksForGeeks', year: '2026' },
  { name: 'GDG Community Member', code: 'Community', issuer: 'Google Developers Group', year: 'Active' },
  { name: 'Active AI/Cloud Contributor', code: 'Developer', issuer: 'Open Source', year: 'Present' },
]

export default function Certifications() {
  return (
    <section id="community" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-number">// 05</span>
          <h2 className="section-title">Leadership</h2>
          <p className="section-sub">Community & Impact</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 1 }}>
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              className="card"
              style={{ padding: '28px 24px', borderRadius: 0 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ background: 'var(--bg-3)' }}
            >
              <div style={{ marginBottom: 16 }}>
                <span className="badge badge-white" style={{ marginBottom: 12, display: 'inline-block' }}>{item.code}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem', fontWeight: 700, color: '#fff',
                  letterSpacing: '-0.01em', lineHeight: 1.3,
                }}>
                  {item.name}
                </h3>
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
                  {item.issuer}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)' }}>
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .card { padding: 24px 20px !important; }
        }
      `}</style>
    </section>
  )
}
