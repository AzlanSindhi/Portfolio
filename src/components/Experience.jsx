import { motion } from 'framer-motion';
import { experience, profile } from '../data';
import SectionHeader from './SectionHeader';

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="exp-card-container"
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
            boxShadow: exp.current ? '0 0 14px var(--glow)' : 'none',
            flexShrink: 0,
            marginTop: '0.35rem',
            position: 'relative',
            zIndex: 2,
          }}
        />
        {/* line */}
        <div style={{
          width: 2,
          flex: 1,
          minHeight: 40,
          background: 'linear-gradient(to bottom, var(--border), transparent)',
          marginTop: '0.4rem',
        }} />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3, borderColor: 'var(--accent)', boxShadow: 'var(--card-shadow-hover)' }}
        style={{
          flex: 1,
          minWidth: 0,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          padding: 'clamp(1.25rem, 3vw, 2rem)',
          marginBottom: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--card-shadow)',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
      >
        {/* top accent */}
        {exp.current && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
            background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
          }} />
        )}

        {/* glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: exp.current
            ? 'radial-gradient(circle at 90% 10%, var(--glow), transparent 55%)'
            : 'none',
        }} />

        {/* header row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.8rem',
          marginBottom: '0.8rem',
        }}>
          <div style={{ minWidth: 0, flex: '1 1 200px' }}>
            {/* type badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
              <span style={{
                fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                color: exp.current ? 'var(--accent)' : 'var(--accent2)',
                fontFamily: 'DM Mono, monospace', fontWeight: 600,
              }}>
                {exp.type}
              </span>
              {exp.current && (
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  background: 'var(--pill-bg)', border: '1px solid var(--pill-border)',
                  color: 'var(--accent)', padding: '0.18rem 0.55rem', borderRadius: '100px',
                  fontWeight: 600,
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
              fontSize: 'clamp(1rem, 2.5vw, 1.18rem)', color: 'var(--text)',
              letterSpacing: '-0.01em', lineHeight: 1.25,
            }}>
              {exp.role}
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '0.25rem', fontWeight: 500 }}>
              {exp.company}
            </p>
          </div>

          {/* duration */}
          <span style={{
            fontSize: '0.7rem', color: 'var(--dim)', letterSpacing: '0.06em',
            fontFamily: 'DM Mono, monospace', whiteSpace: 'nowrap',
            padding: '0.28rem 0.7rem',
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            alignSelf: 'flex-start',
            fontWeight: 500,
          }}>
            {exp.duration}
          </span>
        </div>

        {/* Live link if available */}
        {exp.liveUrl && (
          <div style={{ marginBottom: '0.9rem' }}>
            <a
              href={exp.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                color: 'var(--accent)',
                fontFamily: 'DM Mono, monospace',
                textDecoration: 'none',
                wordBreak: 'break-all',
                fontWeight: 500,
              }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >
              Live: {exp.liveUrl.replace(/^https?:\/\//, '')} ↗
            </a>
          </div>
        )}

        {/* description */}
        <p style={{
          fontSize: '0.84rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.1rem',
        }}>
          {exp.description}
        </p>

        {/* highlights */}
        {exp.highlights && exp.highlights.length > 0 && (
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {exp.highlights.map((h, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6,
              }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.2rem' }}>▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
          {exp.tags.map(t => (
            <span key={t} style={{
              fontSize: '0.64rem', padding: '0.28rem 0.7rem', borderRadius: '4px',
              background: 'var(--tag-tech-bg)', border: '1px solid var(--tag-tech-border)',
              color: 'var(--tag-tech-color)', letterSpacing: '0.04em', fontFamily: 'DM Mono, monospace',
              fontWeight: 500,
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
    <section id="experience" className="section-wrapper" style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
    }}>
      <div className="section-inner">
        <SectionHeader num="02.5" title="Experience" />

        <div className="experience-layout">
          {/* Timeline */}
          <div>
            {experience.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>

          {/* Sidebar card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '14px', padding: 'clamp(1.25rem, 3vw, 2rem)',
              overflow: 'hidden', position: 'relative',
              boxShadow: 'var(--card-shadow)',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, var(--accent2), var(--accent))',
              }} />

              <p style={{
                fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--accent2)', marginBottom: '0.8rem', fontFamily: 'DM Mono, monospace',
                fontWeight: 600,
              }}>
                🎓 Status
              </p>

              <p style={{
                fontFamily: 'Fraunces, serif', fontStyle: 'italic',
                fontSize: '1.02rem', color: 'var(--text)', lineHeight: 1.55,
                marginBottom: '1.4rem', fontWeight: 400,
              }}>
                "Pragmatic MSc student & full-stack developer focused on scalable, data-driven solutions."
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { icon: '🎓', label: 'Education', sub: 'MSc Data Science, Kingston University' },
                  { icon: '📍', label: 'Based in', sub: profile.location },
                  { icon: '💼', label: 'Current Roles', sub: 'Full-Stack Developer @ Satya & Asmira' },
                  { icon: '🔍', label: 'Available for', sub: 'Data Science & Developer Roles' },
                ].map(item => (
                  <div key={item.label} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.75rem', background: 'var(--bg2)',
                    border: '1px solid var(--border)', borderRadius: '8px',
                  }}>
                    <span style={{ fontSize: '1rem', flexShrink: 0 }}>{item.icon}</span>
                    <div style={{ minWidth: 0 }}>
                      <span style={{ fontSize: '0.64rem', color: 'var(--muted)', letterSpacing: '0.08em', display: 'block', fontWeight: 500 }}>
                        {item.label}
                      </span>
                      <span style={{ fontSize: '0.76rem', color: 'var(--text)', wordBreak: 'break-word', fontWeight: 600 }}>{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${profile.email}`}
                style={{
                  display: 'block', marginTop: '1.4rem',
                  padding: '0.85rem', textAlign: 'center',
                  background: 'var(--accent)', color: 'var(--btn-primary-text)',
                  borderRadius: '8px', fontSize: '0.8rem',
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  letterSpacing: '0.04em', transition: 'all 0.25s',
                  boxShadow: 'var(--btn-primary-shadow)',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--btn-primary-shadow-hover)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--btn-primary-shadow)'}
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
