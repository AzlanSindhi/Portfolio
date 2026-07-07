import { motion } from 'framer-motion';
import { skills } from '../data';
import SectionHeader from './SectionHeader';

const Tag = ({ label, variant = 'soft' }) => (
  <motion.span
    whileHover={{ scale:1.05 }}
    style={{
      padding:'0.45rem 1.1rem',
      borderRadius:'100px',
      fontSize:'0.75rem',
      fontFamily:'DM Mono, monospace',
      cursor:'default',
      ...(variant === 'soft' ? {
        background:'var(--surface)',
        border:'1px solid var(--border)',
        color:'var(--muted)',
      } : {
        background:'rgba(139,124,248,0.08)',
        border:'1px solid rgba(139,124,248,0.25)',
        color:'#a49cf8',
      })
    }}
  >
    {label}
  </motion.span>
);

export default function Skills() {
  return (
    <section id="skills" style={{
      padding:'6rem 3rem', zIndex:1, position:'relative',
      background:'var(--bg2)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)',
    }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <SectionHeader num="02" title="Skills & Tech" />

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem' }}>
          <div>
            <p style={{
              fontSize:'0.65rem', letterSpacing:'0.15em', textTransform:'uppercase',
              color:'var(--muted)', marginBottom:'1.2rem',
            }}>
              ✦ Soft Skills
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'0.65rem' }}>
              {skills.soft.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity:0, y:10 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Tag label={s} variant="soft" />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p style={{
              fontSize:'0.65rem', letterSpacing:'0.15em', textTransform:'uppercase',
              color:'var(--accent2)', marginBottom:'1.2rem',
            }}>
              ⚡ Technologies
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'0.65rem' }}>
              {skills.tech.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity:0, y:10 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Tag label={s} variant="tech" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* scrolling ticker */}
        <div style={{
          marginTop:'4rem', overflow:'hidden',
          borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)',
          padding:'1rem 0', position:'relative',
        }}>
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ duration:30, repeat:Infinity, ease:'linear' }}
            style={{ display:'flex', gap:'3rem', whiteSpace:'nowrap', width:'max-content' }}
          >
            {[...skills.tech, ...skills.tech, ...skills.tech].map((s, i) => (
              <span key={i} style={{
                color:'var(--dim)', fontSize:'0.72rem', letterSpacing:'0.1em',
                textTransform:'uppercase', fontFamily:'DM Mono, monospace',
              }}>
                {s} <span style={{ color:'var(--accent)', margin:'0 0.5rem' }}>✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
