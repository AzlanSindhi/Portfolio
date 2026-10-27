import { motion } from 'framer-motion';
import { useTheme } from '../context/useTheme';

export default function ThemeToggle({ size = 'normal' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const buttonSize = size === 'small' ? '36px' : '38px';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        width: buttonSize,
        height: buttonSize,
        borderRadius: '8px',
        border: '1px solid var(--border)',
        background: 'var(--surface)',
        color: 'var(--text)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'border-color 0.25s, color 0.25s, background-color 0.25s, box-shadow 0.25s',
        boxShadow: 'var(--shadow-sm)',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.color = 'var(--accent)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.color = 'var(--text)';
      }}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {isDark ? (
          /* Sun icon when in dark mode (clicking will switch to light) */
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          /* Moon icon when in light mode (clicking will switch to dark) */
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
}
