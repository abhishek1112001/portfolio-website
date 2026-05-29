import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 100,
        padding: '0.5rem 1.5rem',
        borderRadius: '100px',
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(255, 255, 255, 0.9)'
          : 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(43, 47, 160, 0.1)',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.2)',
      }}
    >
      <nav style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          style={{
            fontWeight: 800,
            fontSize: '1.3rem',
            textDecoration: 'none',
            color: '#1A1F6E',
            letterSpacing: '-0.03em',
          }}
        >
          AG.
        </motion.a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="nav-link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="mailto:abhishekgothankar01@gmail.com"
            className="btn-primary"
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none' }}
          id="hamburger-btn"
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              maxWidth: '1200px',
              margin: '1rem auto 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '12px',
              border: '1px solid rgba(43, 47, 160, 0.1)',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: '1rem', padding: '0.5rem 0' }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          #hamburger-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
