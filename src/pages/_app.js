import '@/styles/globals.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Cursor glow that follows the mouse
function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}

// Page loading screen
function Loader({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      onAnimationComplete={onFinish}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'var(--bg-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '3rem',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.04em',
        }}
      >
        AG.
      </motion.div>
      <div style={{
        width: '160px',
        height: '3px',
        background: 'rgba(108, 99, 255, 0.1)',
        borderRadius: '100px',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #6c63ff, #00d4ff)',
            borderRadius: '100px',
          }}
        />
      </div>
    </motion.div>
  );
}

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <CursorGlow />
      <AnimatePresence>
        {loading && <Loader key="loader" onFinish={() => setDone(true)} />}
      </AnimatePresence>
      <Component {...pageProps} />
    </>
  );
}
