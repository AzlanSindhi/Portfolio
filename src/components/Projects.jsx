import { motion } from 'framer-motion';
import { projects } from '../data';
import SectionHeader from './SectionHeader';

function ProjectCard({ project, index }) {
  const featured = project.featured;

  return (
    <motion.div
      initial={{ opacity:0, y:30 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ delay: index * 0.1, duration:0.6, ease:[0.16,1,0.3,1] }}
      whileHover={{ y:-5, boxShadow: 'var(--card-shadow-hover)' }}
      style={{
        background:'var(--surface)',
        border:'1px solid var(--border)',
        borderRadius:'16px',
        padding: featured ? 'clamp(1.4rem, 3.5vw, 2.5rem)' : 'clamp(1.25rem, 3vw, 2rem)',
        position:'relative',
        overflow:'hidden',
        display:'flex',
        flexDirection:'column',
        gridColumn: featured ? '1 / -1' : 'auto',
        boxShadow: 'var(--card-shadow)',
        transition:'border-color 0.3s, box-shadow 0.3s',
      }}
      onHoverStart={e => {
        e.target.style && (e.target.style.borderColor = 'var(--accent)');
      }}
    >
      {/* glow */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:'radial-gradient(circle at 80% 10%, var(--glow), transparent 55%)',
      }} />

      {/* top accent line */}
      {featured && (
        <div style={{
          position:'absolute', top:0, left:0, right:0, height:'3px',
          background:'linear-gradient(90deg, var(--accent), var(--accent2))',
        }} />
      )}

      <div className={featured ? 'featured-project-inner' : ''} style={{
        display: featured ? undefined : 'flex',
        flexDirection: featured ? undefined : 'column',
        gap: featured ? undefined : '1.5rem',
        flex: 1,
      }}>
        {/* left col */}
        <div style={{ display:'flex', flexDirection:'column' }}>
          <span style={{
            fontSize:'0.66rem', letterSpacing:'0.15em', textTransform:'uppercase',
            color: featured ? 'var(--accent)' : 'var(--accent2)',
            marginBottom:'0.6rem', fontFamily:'DM Mono, monospace', fontWeight: 600,
          }}>
            {project.eyebrow}
          </span>
          <h3 style={{
            fontFamily:'Syne, sans-serif', fontWeight:700,
            fontSize: featured ? 'clamp(1.2rem, 3vw, 1.5rem)' : 'clamp(1.05rem, 2.5vw, 1.15rem)',
            color:'var(--text)', marginBottom:'0.8rem',
            letterSpacing:'-0.02em', lineHeight:1.25,
          }}>
            {project.title}
          </h3>
          {!featured && (
            <p style={{ fontSize:'0.82rem', color:'var(--muted)', lineHeight:1.8, flex:1 }}>
              {project.description}
            </p>
          )}
          {featured && (
            <div style={{ flex: 1 }}>
              <p style={{ fontSize:'0.86rem', color:'var(--muted)', lineHeight:1.85, marginBottom: project.highlights ? '0.9rem' : 0 }}>
                {project.description}
              </p>
              {project.highlights && (
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.45rem', padding:0, margin:0 }}>
                  {project.highlights.map((h, idx) => (
                    <li key={idx} style={{ display:'flex', alignItems:'flex-start', gap:'0.6rem', fontSize:'0.8rem', color:'var(--muted)', lineHeight:1.6 }}>
                      <span style={{ color:'var(--accent)', flexShrink:0, marginTop:'0.2rem' }}>▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* right col (or bottom) */}
        <div style={{
          display:'flex', flexDirection:'column', justifyContent:'flex-end', gap:'1.2rem',
          marginTop: featured ? 0 : 'auto',
        }}>
          {/* tags */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.45rem' }}>
            {project.tags.map(t => (
              <span key={t} style={{
                fontSize:'0.64rem', padding:'0.28rem 0.7rem',
                borderRadius:'4px',
                background:'var(--tag-tech-bg)',
                border:'1px solid var(--tag-tech-border)',
                color:'var(--tag-tech-color)', letterSpacing:'0.04em',
                fontFamily:'DM Mono, monospace', fontWeight: 500,
              }}>{t}</span>
            ))}
          </div>

          {/* links */}
          <div style={{ display:'flex', gap:'0.8rem', flexWrap:'wrap' }}>
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display:'inline-flex', alignItems:'center', gap:'0.4rem',
                  padding:'0.58rem 1.2rem',
                  background:'var(--accent)', color:'var(--btn-primary-text)',
                  borderRadius:'7px', fontSize:'0.74rem',
                  fontFamily:'Syne, sans-serif', fontWeight:600,
                  transition:'all 0.2s',
                  boxShadow:'var(--btn-primary-shadow)',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow='var(--btn-primary-shadow-hover)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow='var(--btn-primary-shadow)'}
              >
                Live Demo ↗
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display:'inline-flex', alignItems:'center', gap:'0.4rem',
                  padding:'0.58rem 1.2rem',
                  border:'1px solid var(--border)', color:'var(--text)',
                  background:'var(--bg2)',
                  borderRadius:'7px', fontSize:'0.74rem',
                  fontFamily:'DM Mono, monospace', fontWeight: 500,
                  transition:'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text)'; }}
              >
                GitHub →
              </a>
            )}
            {(project.liveUrl === '#' && (!project.githubUrl || project.githubUrl === '#')) && (
              <span style={{
                fontSize:'0.7rem', color:'var(--dim)',
              }}>
                Repository / Demo upon request
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper" style={{ background: 'var(--bg)' }}>
      <div className="section-inner">
        <SectionHeader num="03" title="Projects" />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
