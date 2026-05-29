import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(43, 47, 160, 0.1)',
      padding: '2.5rem 2rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            fontWeight: 800,
            fontSize: '1.2rem',
            color: '#1A1F6E',
            letterSpacing: '-0.03em',
          }}
        >
          AG.
        </motion.div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          Built with <FiHeart size={13} style={{ color: '#D94FB5' }} /> by Abhishek Gothankar — {new Date().getFullYear()}
        </p>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['#about', '#experience', '#projects', '#skills', '#contact'].map((href) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              style={{ fontSize: '0.82rem', textTransform: 'capitalize' }}
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
