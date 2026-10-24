import { motion } from 'framer-motion';

export default function SectionHeader({ num, title }) {
  return (
    <motion.div
      initial={{ opacity:0, x:-20 }}
      whileInView={{ opacity:1, x:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.6, ease:[0.16,1,0.3,1] }}
      style={{
        display:'flex', alignItems:'center', gap:'clamp(0.7rem, 2vw, 1.4rem)',
        marginBottom:'clamp(2rem, 4vw, 3rem)',
      }}
    >
      <span style={{
        fontFamily:'DM Mono, monospace', fontSize:'0.65rem',
        color:'var(--accent)', letterSpacing:'0.1em', flexShrink:0,
      }}>
        {num}
      </span>
      <h2 style={{
        fontFamily:'Syne, sans-serif', fontWeight:700,
        fontSize:'clamp(1.45rem, 4vw, 2.8rem)',
        letterSpacing:'-0.025em', color:'var(--text)',
        lineHeight: 1.2,
      }}>
        {title}
      </h2>
      <div style={{ flex:1, height:'1px', background:'var(--border)', minWidth: 20 }} />
    </motion.div>
  );
}
