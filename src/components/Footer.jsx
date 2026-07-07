import { profile, socials } from '../data';

export default function Footer() {
  return (
    <footer style={{
      borderTop:'1px solid var(--border)',
      padding:'2rem 3rem',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      background:'var(--bg)',
      zIndex:1, position:'relative',
      flexWrap:'wrap', gap:'1rem',
    }}>
      <span style={{
        fontFamily:'Syne, sans-serif', fontWeight:800,
        fontSize:'1rem', letterSpacing:'-0.02em',
        color:'var(--text)',
      }}>
        AS<span style={{ color:'var(--accent)' }}>.</span>
      </span>

      <p style={{ fontSize:'0.68rem', color:'var(--dim)' }}>
        Designed & built by{' '}
        <span style={{ color:'var(--accent)' }}>{profile.name}</span>
        {' '}· {new Date().getFullYear()}
      </p>

      <div style={{ display:'flex', gap:'1.5rem' }}>
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
    </footer>
  );
}
