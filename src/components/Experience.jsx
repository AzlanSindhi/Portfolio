import { motion } from 'framer-motion';
import { experience } from '../data';
import SectionHeader from './SectionHeader';

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: 'flex', gap: '2rem', position: 'relative' }}
    >
      {/* Timeline spine */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        {/* dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.2, type: 'spring', stiffness: 300 }}
          style={{
            width: 14, height: 14,
            borderRadius: '50%',
            background: exp.current ? 'var(--accent)' : 'var(--surface)',
            border: `2px solid ${exp.current ? 'var(--accent)' : 'var(--border2)'}`,
            boxShadow: exp.current ? '0 0 16px rgba(94,235,200,0.5)' : 'none',
            flexShrink: 0,
            marginTop: '0.35rem',
            position: 'relative',
            zIndex: 2,
          }}
        />
        {/* line */}
        <div style={{
          width: 1,
          flex: 1,
          minHeight: 40,
          background: 'linear-gradient(to bottom, var(--border2), transparent)',
          marginTop: '0.4rem',
        }} />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3, borderColor: 'rgba(94,235,200,0.25)' }}
        style={{
          flex: 1,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          padding: '2rem',
          marginBottom: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
      >
        {/* top accent */}
        {exp.current && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
          }} />
        )}

        {/* glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: exp.current
            ? 'radial-gradient(circle at 90% 10%, rgba(94,235,200,0.05), transparent 55%)'
            : 'none',
        }} />

        {/* header row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.8rem',
          marginBottom: '1rem',
        }}>
          <div>
            {/* type badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span style={{
                fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                color: exp.current ? 'var(--accent)' : 'var(--accent2)',
                fontFamily: 'DM Mono, monospace',
              }}>
                {exp.type}
              </span>
              {exp.current && (
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  background: 'rgba(94,235,200,0.08)', border: '1px solid rgba(94,235,200,0.2)',
                  color: 'var(--accent)', padding: '0.2rem 0.6rem', borderRadius: '100px',
                }}>
                  <span style={{
                    width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)',
                    animation: 'pulse 2s infinite',
                  }} />
                  Current
                </span>
              )}
            </div>

            {/* role */}
            <h3 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 700,
              fontSize: '1.1rem', color: 'var(--text)',
              letterSpacing: '-0.01em', lineHeight: 1.2,
            }}>
              {exp.role}
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
              {exp.company}
            </p>
          </div>

          {/* duration */}
          <span style={{
            fontSize: '0.7rem', color: 'var(--dim)', letterSpacing: '0.06em',
            fontFamily: 'DM Mono, monospace', whiteSpace: 'nowrap',
            padding: '0.3rem 0.8rem',
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
          }}>
            {exp.duration}
          </span>
        </div>

        {/* description */}
        <p style={{
          fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.2rem',
        }}>
          {exp.description}
        </p>

        {/* highlights */}
        {exp.highlights && exp.highlights.length > 0 && (
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.4rem' }}>
            {exp.highlights.map((h, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.7rem',
                fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6,
              }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.25rem' }}>▸</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
          {exp.tags.map(t => (
            <span key={t} style={{
              fontSize: '0.62rem', padding: '0.25rem 0.75rem', borderRadius: '4px',
              background: 'rgba(139,124,248,0.08)', border: '1px solid rgba(139,124,248,0.2)',
              color: '#a49cf8', letterSpacing: '0.04em', fontFamily: 'DM Mono, monospace',
            }}>
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: '6rem 3rem', zIndex: 1, position: 'relative',
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader num="02.5" title="Experience" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '4rem', alignItems: 'start' }}>
          {/* Timeline */}
          <div>
            {experience.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}

            {/* Add more hint */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                color: 'var(--dim)', fontSize: '0.72rem',
                fontStyle: 'italic', marginTop: '0.5rem',
                paddingLeft: '2rem',
              }}
            >
              <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
              Add more in <code style={{ color: 'var(--accent)', fontStyle: 'normal', fontSize: '0.68rem' }}>src/data.js</code>
              <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </motion.div>
          </div>

          {/* Sidebar sticky card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ position: 'sticky', top: '6rem' }}
          >
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '14px', padding: '2rem', overflow: 'hidden', position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, var(--accent2), var(--accent3))',
              }} />

              <p style={{
                fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--accent2)', marginBottom: '1rem', fontFamily: 'DM Mono, monospace',
              }}>
                🎓 Status
              </p>

              <p style={{
                fontFamily: 'Fraunces, serif', fontStyle: 'italic',
                fontSize: '1.1rem', color: 'var(--text)', lineHeight: 1.5,
                marginBottom: '1.5rem', fontWeight: 300,
              }}>
                "Fresh graduate, hungry to contribute and grow."
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  { icon: '🎓', label: 'BCA Student', sub: 'Dolat-Usha Institute' },
                  { icon: '📍', label: 'Based in', sub: 'Valsad, Gujarat' },
                  { icon: '🔍', label: 'Looking for', sub: 'Internships & Entry-level roles' },
                  { icon: '💻', label: 'Available for', sub: 'Remote & Hybrid work' },
                ].map(item => (
                  <div key={item.label} style={{
                    display: 'flex', alignItems: 'center', gap: '0.8rem',
                    padding: '0.8rem', background: 'var(--bg2)',
                    border: '1px solid var(--border)', borderRadius: '8px',
                  }}>
                    <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                    <div>
                      <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.08em', display: 'block' }}>
                        {item.label}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text)' }}>{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="mailto:azlaank1284@gmail.com"
                style={{
                  display: 'block', marginTop: '1.5rem',
                  padding: '0.8rem', textAlign: 'center',
                  background: 'var(--accent)', color: '#000',
                  borderRadius: '8px', fontSize: '0.78rem',
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  letterSpacing: '0.04em', transition: 'box-shadow 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(94,235,200,0.35)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                Hire Me →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.35; transform:scale(0.75); }
        }
      `}</style>
    </section>
  );
}
