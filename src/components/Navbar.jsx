import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.1rem var(--section-px)',
          background: (scrolled || mobileMenuOpen) ? 'rgba(7,9,16,0.95)' : 'transparent',
          backdropFilter: (scrolled || mobileMenuOpen) ? 'blur(20px)' : 'none',
          borderBottom: (scrolled || mobileMenuOpen) ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <a href="#hero" style={{
          fontFamily:'Syne, sans-serif', fontWeight:800, fontSize:'1.1rem',
          letterSpacing:'-0.02em', color:'var(--text)', textDecoration:'none',
        }}
          onClick={() => setMobileMenuOpen(false)}
        >
          AS<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-desktop-links">
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

        {/* Desktop CTA */}
        <div className="nav-desktop-cta">
          <a href={`mailto:${profile.email}`} style={{
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
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="nav-mobile-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              background: 'rgba(11, 13, 20, 0.98)',
              backdropFilter: 'blur(25px)',
              borderBottom: '1px solid var(--border)',
              zIndex: 499,
              padding: '1.5rem var(--section-px) 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {links.map(l => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: 'var(--text)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontFamily: 'DM Mono, monospace',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>{l}</span>
                  <span style={{ color: 'var(--dim)', fontSize: '0.75rem' }}>→</span>
                </a>
              ))}
            </div>

            <a
              href={`mailto:${profile.email}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                marginTop: '0.5rem',
                padding: '0.8rem',
                textAlign: 'center',
                background: 'var(--accent)',
                color: '#000',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}
            >
              Hire Me →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
