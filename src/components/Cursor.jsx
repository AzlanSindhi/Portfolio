import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [enabled, setEnabled] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(pointer: fine) and (min-width: 769px)').matches
      : false
  );

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (min-width: 769px)');
    const handler = (e) => setEnabled(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px';
        dot.current.style.top = e.clientY + 'px';
      }
      if (ring.current) {
        ring.current.style.left = e.clientX + 'px';
        ring.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dot} className="custom-cursor" style={{
        position:'fixed', width:8, height:8, background:'var(--accent)',
        borderRadius:'50%', pointerEvents:'none', zIndex:10000,
        transform:'translate(-50%,-50%)', mixBlendMode:'screen',
        transition:'width .15s, height .15s'
      }} />
      <div ref={ring} className="custom-cursor" style={{
        position:'fixed', width:34, height:34,
        border:'1px solid rgba(94,235,200,0.4)', borderRadius:'50%',
        pointerEvents:'none', zIndex:9999,
        transform:'translate(-50%,-50%)',
        transition:'left .12s ease, top .12s ease, width .22s, height .22s'
      }} />
    </>
  );
}
