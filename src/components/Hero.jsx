import { motion } from 'framer-motion';
import { profile } from '../data';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '8rem 3rem 5rem',
      position: 'relative',
      zIndex: 1,
      maxWidth: 1100,
      margin: '0 auto',
    }}>
      {/* background orbs */}
      <div style={{
        position:'absolute', width:700, height:700,
        background:'radial-gradient(circle, rgba(94,235,200,0.07) 0%, transparent 68%)',
        borderRadius:'50%', top:-150, right:-200, pointerEvents:'none', filter:'blur(40px)',
      }} />
      <div style={{
        position:'absolute', width:450, height:450,
        background:'radial-gradient(circle, rgba(139,124,248,0.07) 0%, transparent 68%)',
        borderRadius:'50%', bottom:100, left:-100, pointerEvents:'none', filter:'blur(60px)',
      }} />

      <div style={{ position:'relative', zIndex:2, maxWidth:780 }}>
        {/* status pill */}
        <motion.div {...fadeUp(0.1)} style={{
          display:'inline-flex', alignItems:'center', gap:'0.5rem',
          fontSize:'0.68rem', letterSpacing:'0.15em', textTransform:'uppercase',
          color:'var(--accent)', border:'1px solid rgba(94,235,200,0.2)',
          padding:'0.35rem 1rem', borderRadius:'100px', marginBottom:'2rem',
          background:'rgba(94,235,200,0.04)', fontFamily:'DM Mono, monospace',
        }}>
          <span style={{
            width:6, height:6, background:'var(--accent)', borderRadius:'50%',
            animation:'pulse 2s infinite',
          }} />
          BCA Graduate 2026
        </motion.div>

        {/* name */}
        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily:'Syne, sans-serif', fontWeight:800,
          fontSize:'clamp(3.2rem, 9vw, 7.5rem)',
          lineHeight:0.93, letterSpacing:'-0.03em',
          color:'var(--text)', marginBottom:'0.4rem',
        }}>
          Azlan
          <br />
          <span style={{
            WebkitTextStroke:'1px rgba(221,225,238,0.22)',
            color:'transparent',
          }}>Sindhi</span>
          <span style={{ color:'var(--accent)' }}>.</span>
        </motion.h1>

        {/* subtitle */}
        <motion.p {...fadeUp(0.35)} style={{
          fontFamily:'Fraunces, serif', fontStyle:'italic',
          fontSize:'clamp(1rem, 2.5vw, 1.35rem)',
          color:'var(--muted)', marginBottom:'1.5rem',
          letterSpacing:'0.01em', fontWeight:300,
        }}>
          {profile.title}
        </motion.p>

        {/* desc */}
        <motion.p {...fadeUp(0.45)} style={{
          maxWidth:460, color:'var(--muted)', fontSize:'0.85rem',
          lineHeight:1.85, marginBottom:'3rem',
        }}>
          {profile.tagline} Based in{' '}
          <span style={{ color:'var(--text)' }}>{profile.location}</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.55)} style={{ display:'flex', gap:'0.9rem', flexWrap:'wrap' }}>
          <a href="#projects" style={{
            padding:'0.85rem 2rem', background:'var(--accent)', color:'#000',
            borderRadius:'8px', fontSize:'0.78rem', letterSpacing:'0.06em',
            fontWeight:600, fontFamily:'Syne, sans-serif',
            transition:'all 0.25s', display:'inline-flex', alignItems:'center', gap:'0.5rem',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 0 40px rgba(94,235,200,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}
          >
            View Projects →
          </a>
          <a href={`mailto:${profile.email}`} style={{
            padding:'0.85rem 2rem', background:'transparent', color:'var(--muted)',
            borderRadius:'8px', fontSize:'0.78rem', letterSpacing:'0.06em',
            border:'1px solid var(--border2)', transition:'all 0.25s',
            display:'inline-flex', alignItems:'center', gap:'0.5rem',
            fontFamily:'DM Mono, monospace',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border2)'; e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.transform='translateY(0)'; }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          style={{
            position:'absolute', bottom:'-5rem', left:0,
            display:'flex', alignItems:'center', gap:'0.8rem',
            color:'var(--dim)', fontSize:'0.62rem', letterSpacing:'0.15em', textTransform:'uppercase',
          }}
        >
          <div style={{
            width:1, height:48,
            background:'linear-gradient(to bottom, var(--accent), transparent)',
          }} />
          Scroll to explore
        </motion.div>
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
