import { motion } from 'framer-motion';

export default function SectionHeader({ num, title }) {
  return (
    <motion.div
      initial={{ opacity:0, x:-20 }}
      whileInView={{ opacity:1, x:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.6, ease:[0.16,1,0.3,1] }}
      style={{
        display:'flex', alignItems:'center', gap:'1.4rem', marginBottom:'3rem',
      }}
    >
      <span style={{
        fontFamily:'DM Mono, monospace', fontSize:'0.65rem',
        color:'var(--accent)', letterSpacing:'0.1em',
      }}>
        {num}
      </span>
      <h2 style={{
        fontFamily:'Syne, sans-serif', fontWeight:700,
        fontSize:'clamp(1.7rem, 4vw, 2.8rem)',
        letterSpacing:'-0.025em', color:'var(--text)',
      }}>
        {title}
      </h2>
      <div style={{ flex:1, height:'1px', background:'var(--border)' }} />
    </motion.div>
  );
}
