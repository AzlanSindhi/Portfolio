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
      padding: 'clamp(6.5rem, 12vw, 8.5rem) var(--section-px) clamp(3.5rem, 6vw, 5rem)',
      position: 'relative',
      zIndex: 1,
      maxWidth: 1100,
      margin: '0 auto',
      width: '100%',
    }}>
      {/* Background ambient orbs adapt to theme */}
      <div style={{
        position:'absolute', width: 'min(700px, 90vw)', height: 'min(700px, 90vw)',
        background:'var(--orb-1)',
        borderRadius:'50%', top:-150, right:-100, pointerEvents:'none', filter:'blur(50px)',
        transition:'background 0.3s ease',
      }} />
      <div style={{
        position:'absolute', width: 'min(450px, 80vw)', height: 'min(450px, 80vw)',
        background:'var(--orb-2)',
        borderRadius:'50%', bottom:100, left:-80, pointerEvents:'none', filter:'blur(60px)',
        transition:'background 0.3s ease',
      }} />

      <div style={{ position:'relative', zIndex:2, maxWidth:780, width: '100%' }}>
        {/* status pill */}
        <motion.div {...fadeUp(0.1)} style={{
          display:'inline-flex', alignItems:'center', gap:'0.5rem',
          fontSize:'clamp(0.62rem, 1.8vw, 0.7rem)', letterSpacing:'0.12em', textTransform:'uppercase',
          color:'var(--accent)', border:'1px solid var(--pill-border)',
          padding:'0.38rem 0.95rem', borderRadius:'100px', marginBottom:'clamp(1.2rem, 3vw, 2rem)',
          background:'var(--pill-bg)', fontFamily:'DM Mono, monospace',
          fontWeight: 500,
          maxWidth: '100%',
        }}>
          <span style={{
            width:6, height:6, background:'var(--accent)', borderRadius:'50%',
            animation:'pulse 2s infinite', flexShrink: 0,
          }} />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {profile.status || "MSc Data Science · Kingston University"}
          </span>
        </motion.div>

        {/* name */}
        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily:'Syne, sans-serif', fontWeight:800,
          fontSize:'clamp(2.6rem, 8.5vw, 7.5rem)',
          lineHeight:0.95, letterSpacing:'-0.03em',
          color:'var(--text)', marginBottom:'0.6rem',
        }}>
          Azlan
          <br />
          <span style={{
            WebkitTextStroke:'var(--hero-stroke)',
            color:'transparent',
          }}>Sindhi</span>
          <span style={{ color:'var(--accent)' }}>.</span>
        </motion.h1>

        {/* subtitle */}
        <motion.p {...fadeUp(0.35)} style={{
          fontFamily:'Fraunces, serif', fontStyle:'italic',
          fontSize:'clamp(1rem, 2.5vw, 1.35rem)',
          color:'var(--accent2)', marginBottom:'1.25rem',
          letterSpacing:'0.01em', fontWeight:400,
        }}>
          {profile.title}
        </motion.p>

        {/* desc */}
        <motion.p {...fadeUp(0.45)} style={{
          maxWidth:480, color:'var(--muted)', fontSize:'clamp(0.82rem, 2vw, 0.88rem)',
          lineHeight:1.8, marginBottom:'clamp(1.8rem, 4vw, 3rem)',
        }}>
          {profile.tagline} Based in{' '}
          <span style={{ color:'var(--text)', fontWeight: 600 }}>{profile.location}</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.55)} className="hero-cta-group">
          <a href="#projects" style={{
            padding:'0.85rem 1.8rem', background:'var(--accent)', color:'var(--btn-primary-text)',
            borderRadius:'8px', fontSize:'0.78rem', letterSpacing:'0.06em',
            fontWeight:600, fontFamily:'Syne, sans-serif',
            transition:'all 0.25s', display:'inline-flex', alignItems:'center', gap:'0.5rem',
            boxShadow:'var(--btn-primary-shadow)',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform='translateY(-2px)';
              e.currentTarget.style.boxShadow='var(--btn-primary-shadow-hover)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform='translateY(0)';
              e.currentTarget.style.boxShadow='var(--btn-primary-shadow)';
            }}
          >
            View Projects →
          </a>
          <a href="/cv.html" target="_blank" rel="noopener noreferrer" style={{
            padding:'0.85rem 1.8rem', background:'var(--btn-secondary-bg)', color:'var(--btn-secondary-color)',
            borderRadius:'8px', fontSize:'0.78rem', letterSpacing:'0.06em',
            border:'1px solid var(--btn-secondary-border)', transition:'all 0.25s',
            display:'inline-flex', alignItems:'center', gap:'0.5rem',
            fontFamily:'Syne, sans-serif', fontWeight:600,
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor='var(--accent2)';
              e.currentTarget.style.background='var(--btn-secondary-hover-bg)';
              e.currentTarget.style.transform='translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor='var(--btn-secondary-border)';
              e.currentTarget.style.background='var(--btn-secondary-bg)';
              e.currentTarget.style.transform='translateY(0)';
            }}
          >
            View CV ↗
          </a>
          <a href={`mailto:${profile.email}`} style={{
            padding:'0.85rem 1.8rem', background:'transparent', color:'var(--text)',
            borderRadius:'8px', fontSize:'0.78rem', letterSpacing:'0.06em',
            border:'1px solid var(--border)', transition:'all 0.25s',
            display:'inline-flex', alignItems:'center', gap:'0.5rem',
            fontFamily:'DM Mono, monospace', fontWeight: 500,
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor='var(--accent)';
              e.currentTarget.style.color='var(--accent)';
              e.currentTarget.style.transform='translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor='var(--border)';
              e.currentTarget.style.color='var(--text)';
              e.currentTarget.style.transform='translateY(0)';
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          style={{
            position:'absolute', bottom:'-5rem', left:0,
            display:'flex', alignItems:'center', gap:'0.8rem',
            color:'var(--dim)', fontSize:'0.65rem', letterSpacing:'0.15em', textTransform:'uppercase',
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
