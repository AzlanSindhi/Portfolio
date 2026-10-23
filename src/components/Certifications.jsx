import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../data';
import SectionHeader from './SectionHeader';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const hasCertifications =
    certifications.length > 0 &&
    !certifications[0].title.includes('Add your');

  return (
    <section
      id="certifications"
      style={{
        padding: '6rem 3rem',
        position: 'relative',
        zIndex: 1,
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <SectionHeader
          num="04"
          title="Certifications & Credentials"
        />

        {!hasCertifications ? (
          <p
            style={{
              color: 'var(--muted)',
              fontSize: '0.85rem',
              fontStyle: 'italic',
              padding: '3rem 2rem',
              textAlign: 'center',
              background: 'var(--surface)',
              borderRadius: '12px',
              border: '1px solid var(--border)',
            }}
          >
            Certifications coming soon.
          </p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(94,235,200,0.3)',
                  boxShadow: '0 10px 30px -15px rgba(94,235,200,0.1)',
                }}
                onClick={() => setSelectedCert(cert)}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  cursor: 'pointer',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                }}
              >
                {/* Icon Badge */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'var(--bg2)',
                    border: '1px solid var(--border2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    flexShrink: 0,
                  }}
                >
                  {cert.icon}
                </div>

                {/* Certificate Info */}
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      display: 'block',
                      marginBottom: '0.2rem',
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 600,
                      fontSize: '0.92rem',
                      color: 'var(--text)',
                    }}
                  >
                    {cert.title}
                  </span>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--muted)',
                    }}
                  >
                    {cert.issuer}
                  </span>
                </div>

                {/* Date */}
                <span
                  style={{
                    fontSize: '0.65rem',
                    color: 'var(--dim)',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cert.date}
                </span>

                <span
                  style={{
                    color: 'var(--accent)',
                    fontSize: '0.9rem',
                    marginLeft: '0.5rem',
                  }}
                >
                  👁
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(7, 9, 16, 0.85)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10000,
              padding: '2rem',
            }}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '850px',
                maxHeight: '90vh',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              }}
            >
              {/* Top Accent Line */}
              <div
                style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
                }}
              />

              {/* Modal Header */}
              <div
                style={{
                  padding: '1.2rem 1.8rem',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: 'var(--text)',
                      lineHeight: 1.2,
                    }}
                  >
                    {selectedCert.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--muted)',
                      marginTop: '0.2rem',
                    }}
                  >
                    {selectedCert.issuer} &nbsp;·&nbsp; {selectedCert.date}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  style={{
                    background: 'var(--bg2)',
                    border: '1px solid var(--border2)',
                    color: 'var(--text)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border2)';
                    e.currentTarget.style.color = 'var(--text)';
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Modal Body / Viewer */}
              <div
                style={{
                  padding: '1.8rem',
                  background: 'rgba(7, 9, 16, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflowY: 'auto',
                  flex: 1,
<<<<<<< HEAD
                  minHeight: '320px',
                }}
              >
                {selectedCert.fileUrl && selectedCert.fileType === 'pdf' ? (
=======
                  minHeight: '350px',
                }}
              >
                {selectedCert.fileType === 'pdf' ? (
>>>>>>> origin/main
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <iframe
                      src={selectedCert.fileUrl}
                      width="100%"
                      height="480px"
                      style={{
                        border: '1px solid var(--border2)',
                        borderRadius: '8px',
                        background: 'var(--bg)',
                      }}
                      title={selectedCert.title}
                    />
                    <p style={{ fontSize: '0.72rem', color: 'var(--muted)', textAlign: 'center' }}>
                      PDF viewer not loading?{' '}
                      <a
                        href={selectedCert.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                      >
                        Open PDF in New Tab ↗
                      </a>
                    </p>
                  </div>
<<<<<<< HEAD
                ) : selectedCert.fileUrl && selectedCert.fileType === 'image' ? (
=======
                ) : (
>>>>>>> origin/main
                  <img
                    src={selectedCert.fileUrl}
                    alt={selectedCert.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '480px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    }}
<<<<<<< HEAD
                  />
                ) : (
                  <div style={{
                    textAlign: 'center',
                    padding: '2.5rem 1.5rem',
                    maxWidth: '480px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                  }}>
                    <div style={{
                      width: '72px', height: '72px', borderRadius: '18px',
                      background: 'var(--surface)', border: '1px solid var(--border2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '2.2rem',
                    }}>
                      {selectedCert.icon}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)', fontSize: '1.25rem', marginBottom: '0.35rem' }}>
                        {selectedCert.title}
                      </h4>
                      <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
                        Issued by <strong style={{ color: 'var(--text)' }}>{selectedCert.issuer}</strong> · {selectedCert.date}
                      </p>
                    </div>
                    <p style={{ color: 'var(--dim)', fontSize: '0.75rem', lineHeight: 1.6, maxWidth: 380 }}>
                      Verified completion credential awarded to Azlan Sindhi for demonstrating competency and completing assessment requirements.
                    </p>
                    {selectedCert.url && selectedCert.url !== '#' && (
                      <a
                        href={selectedCert.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          marginTop: '0.5rem',
                          padding: '0.65rem 1.4rem',
                          background: 'var(--accent)',
                          color: '#000',
                          borderRadius: '7px',
                          fontWeight: 600,
                          fontSize: '0.78rem',
                          fontFamily: 'Syne, sans-serif',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        Verify Credential Profile ↗
                      </a>
                    )}
                  </div>
=======
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/600x400/111420/5eebc8?text=Certificate+Image+Placeholder';
                    }}
                  />
>>>>>>> origin/main
                )}
              </div>

              {/* Modal Footer */}
              <div
                style={{
                  padding: '1rem 1.8rem',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'var(--bg2)',
                }}
              >
                {selectedCert.url && selectedCert.url !== '#' ? (
                  <a
                    href={selectedCert.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--accent2)',
                      fontFamily: 'DM Mono, monospace',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    Verify Original Credential ↗
                  </a>
                ) : (
                  <span />
                )}

                <div style={{ display: 'flex', gap: '0.8rem' }}>
<<<<<<< HEAD
                  {selectedCert.fileUrl && (
                    <a
                      href={selectedCert.fileUrl}
                      download
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        padding: '0.55rem 1.2rem',
                        background: 'var(--accent)',
                        color: '#000',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(94,235,200,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      Download File ↓
                    </a>
                  )}
=======
                  <a
                    href={selectedCert.fileUrl}
                    download
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: '0.55rem 1.2rem',
                      background: 'var(--accent)',
                      color: '#000',
                      borderRadius: '6px',
                      fontSize: '0.72rem',
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(94,235,200,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Download File ↓
                  </a>
>>>>>>> origin/main
                  <button
                    onClick={() => setSelectedCert(null)}
                    style={{
                      padding: '0.55rem 1.2rem',
                      background: 'transparent',
                      border: '1px solid var(--border2)',
                      color: 'var(--muted)',
                      borderRadius: '6px',
                      fontSize: '0.72rem',
                      fontFamily: 'DM Mono, monospace',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--text)';
                      e.currentTarget.style.color = 'var(--text)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border2)';
                      e.currentTarget.style.color = 'var(--muted)';
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}