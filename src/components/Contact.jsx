import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    background:'var(--surface)', border:'1px solid var(--border)',
    borderRadius:'8px', padding:'0.85rem 1.1rem',
    color:'var(--text)', fontFamily:'DM Mono, monospace',
    fontSize:'0.84rem', outline:'none', width:'100%',
    transition:'border-color 0.2s, box-shadow 0.2s, background-color 0.2s',
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: 'var(--bg)' }}>
      <div className="section-inner">
        <SectionHeader num="05" title="Get In Touch" />

        <div className="contact-grid">
          {/* left */}
          <motion.div
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
          >
            <h3 style={{
              fontFamily:'Fraunces, serif', fontStyle:'italic',
              fontSize:'clamp(1.6rem, 3.8vw, 3rem)',
              color:'var(--text)', lineHeight:1.2, marginBottom:'1.25rem',
              fontWeight:400,
            }}>
              Let's work{' '}
              <em style={{
                fontFamily:'Syne, sans-serif', fontStyle:'normal',
                color:'var(--accent)', fontWeight:700,
              }}>
                together
              </em>
              .
            </h3>
            <p style={{ color:'var(--muted)', fontSize:'0.86rem', lineHeight:1.85, marginBottom:'2rem' }}>
              I'm open to full-time opportunities and interesting project collaborations.
              Have a project in mind or want to discuss how I can contribute? Feel free to reach out.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.9rem' }}>
              {[
                { icon:'📧', label:'Email', val: profile.email, href:`mailto:${profile.email}` },
                { icon:'📍', label:'Location', val: profile.location },
                { icon:'📱', label:'Phone', val: profile.phone },
              ].map(item => (
                <div key={item.label} style={{ display:'flex', alignItems:'center', gap:'0.85rem' }}>
                  <span style={{ fontSize:'1.1rem', flexShrink: 0 }}>{item.icon}</span>
                  <div style={{ minWidth: 0 }}>
                    <span style={{ fontSize:'0.64rem', color:'var(--muted)', letterSpacing:'0.1em', textTransform:'uppercase', display:'block', fontWeight: 600 }}>
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} style={{ color:'var(--accent)', fontSize:'0.84rem', wordBreak: 'break-all', fontWeight: 500 }}>
                        {item.val}
                      </a>
                    ) : (
                      <span style={{ color:'var(--text)', fontSize:'0.84rem', fontWeight: 500 }}>{item.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ delay:0.15 }}
            style={{ display:'flex', flexDirection:'column', gap:'1.1rem' }}
          >
            <div className="contact-form-row">
              {[
                { name:'name', label:'Your Name', placeholder:'Azlan Sindhi' },
                { name:'email', label:'Email Address', placeholder:'hello@email.com', type:'email' },
              ].map(field => (
                <div key={field.name} style={{ display:'flex', flexDirection:'column', gap:'0.4rem' }}>
                  <label style={{ fontSize:'0.66rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--muted)', fontWeight: 600 }}>
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    type={field.type || 'text'}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor='var(--accent)'; e.target.style.boxShadow='0 0 0 3px var(--glow)'; }}
                    onBlur={e => { e.target.style.borderColor='var(--border)'; e.target.style.boxShadow='none'; }}
                  />
                </div>
              ))}
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'0.4rem' }}>
              <label style={{ fontSize:'0.66rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--muted)', fontWeight: 600 }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
                rows={5}
                style={{ ...inputStyle, resize:'vertical' }}
                onFocus={e => { e.target.style.borderColor='var(--accent)'; e.target.style.boxShadow='0 0 0 3px var(--glow)'; }}
                onBlur={e => { e.target.style.borderColor='var(--border)'; e.target.style.boxShadow='none'; }}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale:1.01 }}
              whileTap={{ scale:0.98 }}
              style={{
                padding:'0.95rem 2rem',
                background: sent ? 'var(--accent2)' : 'var(--accent)',
                color:'var(--btn-primary-text)',
                border:'none', borderRadius:'8px',
                fontFamily:'Syne, sans-serif', fontWeight:700,
                fontSize:'0.85rem', letterSpacing:'0.04em',
                cursor:'pointer', transition:'all 0.3s',
                boxShadow: sent ? '0 4px 20px var(--glow2)' : 'var(--btn-primary-shadow)',
              }}
            >
              {sent ? '✓ Message Opened in Email Client' : 'Send Message →'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
