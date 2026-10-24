import { motion } from 'framer-motion';
import { socials } from '../data';
import SectionHeader from './SectionHeader';

export default function Socials() {
  return (
    <section id="socials" className="section-wrapper" style={{
      background:'var(--bg2)', borderTop:'1px solid var(--border)',
    }}>
      <div className="section-inner">
        <SectionHeader num="00" title="Connect With Me" />

        <p style={{
          color: "var(--muted)",
          fontSize: "clamp(0.82rem, 2vw, 0.9rem)",
          marginBottom: "clamp(1.8rem, 4vw, 2.5rem)",
          maxWidth: 540,
          lineHeight: 1.7,
        }}>
          Whether you're looking for a developer, have a project in mind, or want to
          discuss technology, web development, or data science, I'd be happy to
          connect. Feel free to reach out through any of the platforms below.
        </p>

        <div className="socials-grid">
          {socials.map((s, i) => (
            <motion.a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay: i * 0.08, duration:0.5, ease:[0.16,1,0.3,1] }}
              whileHover={{ backgroundColor:'rgba(94,235,200,0.04)', y:-2 }}
              style={{
                background:'var(--bg2)',
                padding:'clamp(1.2rem, 3vw, 1.8rem) clamp(1.2rem, 3vw, 2rem)',
                display:'flex',
                alignItems:'center',
                gap:'1rem',
                textDecoration:'none',
                transition:'background 0.25s',
                position:'relative',
              }}
            >
              <div style={{
                width:44, height:44, borderRadius:'10px',
                background:'var(--surface)',
                border:`1px solid var(--border)`,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'1.3rem', flexShrink:0,
              }}>
                {s.icon}
              </div>
              <div style={{ flex:1, minWidth: 0 }}>
                <span style={{
                  fontFamily:'Syne, sans-serif', fontWeight:600, fontSize:'0.92rem',
                  color:'var(--text)', display:'block',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {s.platform}
                </span>
                <span style={{
                  fontSize:'0.7rem', color:'var(--muted)', display: 'block',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {s.handle}
                </span>
              </div>
              <span style={{ color:'var(--dim)', fontSize:'0.9rem', flexShrink: 0 }}>↗</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
