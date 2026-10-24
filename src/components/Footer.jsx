import { profile, socials } from '../data';

export default function Footer() {
  return (
    <footer style={{
      borderTop:'1px solid var(--border)',
      padding:'2.5rem var(--section-px)',
      background:'var(--bg)',
      zIndex:1,
      position:'relative',
    }}>
      <div className="footer-container">
        <span style={{
          fontFamily:'Syne, sans-serif', fontWeight:800,
          fontSize:'1rem', letterSpacing:'-0.02em',
          color:'var(--text)',
        }}>
          AS<span style={{ color:'var(--accent)' }}>.</span>
        </span>

        <p style={{ fontSize:'0.72rem', color:'var(--dim)', textAlign: 'center' }}>
          Designed & built by{' '}
          <span style={{ color:'var(--accent)' }}>{profile.name}</span>
          {' '}· {new Date().getFullYear()}
        </p>

        <div style={{ display:'flex', gap:'1.2rem', flexWrap:'wrap', justifyContent:'center' }}>
          {socials.map(s => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize:'0.65rem', letterSpacing:'0.1em',
                textTransform:'uppercase', color:'var(--dim)',
                transition:'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--dim)'}
            >
              {s.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
