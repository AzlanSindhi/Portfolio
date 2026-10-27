import { profile, socials } from '../data';

export default function Footer() {
  return (
    <footer style={{
      borderTop:'1px solid var(--border)',
      padding:'2.5rem var(--section-px)',
      background:'var(--bg2)',
      zIndex:1,
      position:'relative',
    }}>
      <div className="footer-container">
        <span style={{
          fontFamily:'Syne, sans-serif', fontWeight:800,
          fontSize:'1.1rem', letterSpacing:'-0.02em',
          color:'var(--text)',
        }}>
          AS<span style={{ color:'var(--accent)' }}>.</span>
        </span>

        <p style={{ fontSize:'0.76rem', color:'var(--muted)', textAlign: 'center' }}>
          Designed & built by{' '}
          <span style={{ color:'var(--accent2)', fontWeight: 600 }}>{profile.name}</span>
          {' '}· {new Date().getFullYear()}
        </p>

        <div style={{ display:'flex', gap:'1.4rem', flexWrap:'wrap', justifyContent:'center' }}>
          {socials.map(s => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize:'0.7rem', letterSpacing:'0.1em',
                textTransform:'uppercase', color:'var(--muted)',
                transition:'color 0.2s',
                fontWeight: 500,
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {s.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
