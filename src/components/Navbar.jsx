import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.1rem 3rem',
        background: scrolled ? 'rgba(7,9,16,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      <a href="#hero" style={{
        fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:'1.05rem',
        letterSpacing:'-0.02em', color:'var(--text)', textDecoration:'none',
      }}>
        AS<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      <ul style={{ display:'flex', gap:'2rem', listStyle:'none' }}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              color:'var(--muted)', fontSize:'0.68rem', letterSpacing:'0.1em',
              textTransform:'uppercase', transition:'color 0.2s',
              fontFamily:'DM Mono, monospace', textDecoration:'none',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l}</a>
          </li>
        ))}
      </ul>

      <a href="mailto:azlaank1284@gmail.com" style={{
        padding:'0.5rem 1.2rem',
        border:'1px solid var(--border2)',
        borderRadius:'6px',
        color:'var(--muted)',
        fontSize:'0.72rem',
        letterSpacing:'0.08em',
        transition:'all 0.2s',
        fontFamily:'DM Mono, monospace',
        textDecoration:'none',
      }}
        onMouseEnter={e => { e.target.style.borderColor='var(--accent)'; e.target.style.color='var(--accent)'; }}
        onMouseLeave={e => { e.target.style.borderColor='var(--border2)'; e.target.style.color='var(--muted)'; }}
      >
        Hire Me
      </a>
    </motion.nav>
  );
}
