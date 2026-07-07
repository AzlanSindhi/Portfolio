import { motion } from 'framer-motion';
import { profile, education } from '../data';
import SectionHeader from './SectionHeader';

const stats = [
  { num:'3+', label:'Projects Built' },
  { num:'200K+', label:'Data Points Processed' },
  { num:'BCA', label:'Degree (2026)' },
  { num:'5+', label:'Tech Stacks' },
];

export default function About() {
  return (
    <section id="about" style={{ padding:'6rem 3rem', zIndex:1, position:'relative' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <SectionHeader num="01" title="About Me" />

        <div style={{
          display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:'5rem', alignItems:'start',
        }}>
          {/* left */}
          <div>
            <motion.p
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              style={{
                fontFamily:'Fraunces, serif', fontStyle:'italic',
                fontSize:'1.2rem', color:'var(--text)', lineHeight:1.7,
                marginBottom:'1.5rem', fontWeight:300,
              }}
            >
              "{profile.summary}"
            </motion.p>

            <motion.div
              initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
              transition={{ delay:0.2 }}
            >
              <p style={{ color:'var(--muted)', fontSize:'0.82rem', marginBottom:'0.8rem' }}>
                📍 {profile.location} &nbsp;·&nbsp; 📧{' '}
                <a href={`mailto:${profile.email}`} style={{ color:'var(--accent)' }}>
                  {profile.email}
                </a>
              </p>
              <p style={{ color:'var(--muted)', fontSize:'0.82rem' }}>
                📞 {profile.phone}
              </p>
            </motion.div>

            {/* education */}
            <div style={{ marginTop:'2.5rem' }}>
              <p style={{
                fontSize:'0.65rem', letterSpacing:'0.15em', textTransform:'uppercase',
                color:'var(--accent)', marginBottom:'1.2rem', fontFamily:'DM Mono, monospace',
              }}>Education</p>
              {education.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity:0, x:-15 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    padding:'1.2rem 1.5rem',
                    background:'var(--surface)',
                    border:'1px solid var(--border)',
                    borderRadius:'10px',
                    marginBottom:'0.8rem',
                    borderLeft:'2px solid var(--accent2)',
                  }}
                >
                  <span style={{
                    fontFamily:'Syne, sans-serif', fontWeight:600,
                    fontSize:'0.88rem', color:'var(--text)', display:'block', marginBottom:'0.25rem',
                  }}>
                    {e.degree}
                  </span>
                  <span style={{ fontSize:'0.72rem', color:'var(--muted)', display:'block' }}>
                    {e.institution}
                  </span>
                  <span style={{ fontSize:'0.65rem', color:'var(--accent)', marginTop:'0.3rem', display:'block' }}>
                    {e.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* right: stats */}
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.2rem',
          }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity:0, scale:0.9 }}
                whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }}
                transition={{ delay: i * 0.08, duration:0.5, ease:[0.16,1,0.3,1] }}
                style={{
                  background:'var(--surface)',
                  border:'1px solid var(--border)',
                  borderRadius:'12px',
                  padding:'1.8rem 1.5rem',
                  position:'relative',
                  overflow:'hidden',
                }}
              >
                <div style={{
                  position:'absolute', top:0, left:0, right:0, height:'2px',
                  background:`linear-gradient(90deg, var(--accent), var(--accent2))`,
                }} />
                <span style={{
                  fontFamily:'Syne, sans-serif', fontWeight:800,
                  fontSize:'2.2rem', color:'var(--accent)',
                  display:'block', lineHeight:1, marginBottom:'0.5rem',
                }}>
                  {s.num}
                </span>
                <span style={{ fontSize:'0.68rem', color:'var(--muted)', letterSpacing:'0.05em' }}>
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
