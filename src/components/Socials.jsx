import { motion } from 'framer-motion';
import { socials } from '../data';
import SectionHeader from './SectionHeader';

export default function Socials() {
  return (
    <section id="socials" style={{
      padding:'5rem 3rem', zIndex:1, position:'relative',
      background:'var(--bg2)', borderTop:'1px solid var(--border)',
    }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <SectionHeader num="00" title="Connect With Me" />

        <p style={{ color: "var(--muted)",fontSize: "0.9rem", marginBottom: "2.5rem", maxWidth: 540, lineHeight: 1.7, }}>
          Whether you're looking for a developer, have a project in mind, or want to
          discuss technology, web development, or data science, I'd be happy to
          connect. Feel free to reach out through any of the platforms below.
        </p>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',
          gap:'1px',
          background:'var(--border)',
          border:'1px solid var(--border)',
          borderRadius:'14px',
          overflow:'hidden',
        }}>
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
                padding:'1.8rem 2rem',
                display:'flex',
                alignItems:'center',
                gap:'1.2rem',
                textDecoration:'none',
                transition:'background 0.25s',
                position:'relative',
              }}
            >
              <div style={{
                width:46, height:46, borderRadius:'10px',
                background:'var(--surface)',
                border:`1px solid var(--border)`,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'1.4rem', flexShrink:0,
              }}>
                {s.icon}
              </div>
              <div style={{ flex:1 }}>
                <span style={{
                  fontFamily:'Syne, sans-serif', fontWeight:600, fontSize:'0.95rem',
                  color:'var(--text)', display:'block',
                }}>
                  {s.platform}
                </span>
                <span style={{ fontSize:'0.7rem', color:'var(--muted)' }}>{s.handle}</span>
              </div>
              <span style={{ color:'var(--dim)', fontSize:'1rem' }}>↗</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
