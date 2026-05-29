import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const TRAITS = [
  { icon: '⚡', label: 'Fast Learner',   c: '#E8602C' },
  { icon: '🏗️', label: 'System Builder', c: '#2B2FA0' },
  { icon: '📱', label: 'Mobile Dev',     c: '#D94FB5' },
  { icon: '☁️', label: 'Cloud Native',  c: '#C9A96A' },
];

const STATS = [
  { n: 1,  suffix: '+', label: 'Year Experience' },
  { n: 3,  suffix: '',  label: 'Live Products'   },
  { n: 10, suffix: '+', label: 'AWS Services'    },
  { n: 5,  suffix: '+', label: 'Tech Stacks'     },
];

const TERMINAL = [
  { t: 'const abhishek = {',             tc: '#E8602C' },
  { t: '  role:',     v: ' "Jr. Software Developer",', tc: '#7C83E0', vc: '#C9A96A' },
  { t: '  company:',  v: ' "CloudMotiv, Pune",',       tc: '#7C83E0', vc: '#C9A96A' },
  { t: '  education:',v: ' "M.Sc. CS",',               tc: '#7C83E0', vc: '#C9A96A' },
  { t: '  stack:',    v: ' ["React","AWS","Flutter"],', tc: '#7C83E0', vc: '#D94FB5' },
  { t: '  available:',v: ' true,',                     tc: '#7C83E0', vc: '#28C840' },
  { t: '}',                              tc: '#E8602C' },
];

function CountUp({ target, inView, suffix = '' }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1500;
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / dur, 1);
      setVal(Math.round((1 - Math.pow(1 - prog, 3)) * target));
      if (prog < 1) requestAnimationFrame(tick);
      else setVal(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);
  return <>{val}{suffix}</>;
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}
    >
      <style>{`
        .about-term {
          background: #10112B;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(124,131,224,0.2);
          box-shadow: 0 24px 64px rgba(26,31,110,0.16), 0 0 0 1px rgba(124,131,224,0.08);
        }
        .about-term-bar {
          background: #181A3A;
          padding: 11px 16px;
          display: flex;
          align-items: center;
          gap: 7px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .term-dot { width: 11px; height: 11px; border-radius: 50%; }
        .term-body {
          padding: 22px 24px 24px;
          font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
          font-size: 13px;
          line-height: 1.9;
        }
        .about-stat {
          background: #fff;
          border: 1px solid rgba(43,47,160,0.09);
          border-radius: 16px;
          padding: 1.4rem 1rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(26,31,110,0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .about-stat:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 36px rgba(26,31,110,0.11);
        }
        .trait-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 15px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          border: 1.5px solid;
          transition: background 0.2s ease, transform 0.2s ease;
          cursor: default;
        }
        .trait-pill:hover { transform: translateY(-2px); }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>

      {/* Section tag */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="section-tag">01 — About</span>
      </motion.div>

      {/* Two-column grid */}
      <div
        className="about-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginTop: '1.8rem' }}
      >

        {/* LEFT — Text */}
        <div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ marginBottom: '1.2rem' }}
          >
            Building with{' '}
            <span style={{ color: '#D94FB5' }}>purpose,</span>
            <br />
            shipping with{' '}
            <span className="gradient-text">precision.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.96rem', opacity: 0.8 }}
          >
            I&apos;m a Junior Software Developer at CloudMotiv, Pune, passionate about building
            scalable SaaS applications, cross-platform mobile apps, and cloud-native systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1.8rem', fontSize: '0.96rem', opacity: 0.8 }}
          >
            From responsive UIs with React.js to serverless AWS Lambda architectures,
            I focus on fast, reliable, and beautiful software — and ship cross-platform
            apps with Flutter on the Play Store.
          </motion.p>

          {/* Trait pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px', marginBottom: '2rem' }}>
            {TRAITS.map((t, i) => (
              <motion.div
                key={t.label}
                className="trait-pill"
                style={{ borderColor: t.c, color: t.c }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 280, damping: 22, delay: 0.38 + i * 0.08 }}
                whileHover={{ backgroundColor: t.c + '1A' }}
              >
                <span>{t.icon}</span>{t.label}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="mailto:abhishekgothankar01@gmail.com"
              whileHover={{ translateY: -2, boxShadow: '0 8px 24px rgba(26,31,110,0.28)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 26px',
                background: '#1A1F6E', color: '#fff',
                borderRadius: '100px', fontSize: '13px', fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Get In Touch →
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT — Terminal card */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="about-term">
            {/* Title bar */}
            <div className="about-term-bar">
              <div className="term-dot" style={{ background: '#FF5F57' }} />
              <div className="term-dot" style={{ background: '#FFBD2E' }} />
              <div className="term-dot" style={{ background: '#28C840' }} />
              <span style={{
                marginLeft: '12px', fontSize: '11.5px',
                color: 'rgba(255,255,255,0.35)',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.3px',
              }}>
                developer.profile.js
              </span>
            </div>

            {/* Code body */}
            <div className="term-body">
              {TERMINAL.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.45 + i * 0.12 }}
                >
                  <span style={{ color: line.tc }}>{line.t}</span>
                  {line.v && <span style={{ color: line.vc }}>{line.v}</span>}
                </motion.div>
              ))}

              {/* Command prompt */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.45 + TERMINAL.length * 0.12 + 0.2 }}
                style={{ marginTop: '10px' }}
              >
                <span style={{ color: '#28C840' }}>{'>'} </span>
                <span style={{ color: '#aaa' }}>abhishek.passion</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.45 + TERMINAL.length * 0.12 + 0.45 }}
              >
                <span style={{ color: '#D94FB5', fontStyle: 'italic' }}>
                  &quot;Building things that matter 🚀&quot;
                </span>
              </motion.div>

              {/* Blinking cursor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.45 + TERMINAL.length * 0.12 + 0.7 }}
                style={{ marginTop: '4px' }}
              >
                <span style={{ color: '#28C840' }}>{'>'} </span>
                <span style={{
                  display: 'inline-block', width: '8px', height: '14px',
                  background: '#28C840', marginLeft: '2px', verticalAlign: 'middle',
                  animation: 'blink 1s step-end infinite',
                }} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <div
        className="about-stats-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '3.5rem' }}
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="about-stat"
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          >
            <div style={{
              fontSize: '2.1rem', fontWeight: 900,
              background: 'linear-gradient(135deg, #1A1F6E, #D94FB5)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.04em', fontFamily: 'Inter, sans-serif',
            }}>
              <CountUp target={s.n} inView={inView} suffix={s.suffix} />
            </div>
            <div style={{ color: '#2B2FA0', opacity: 0.55, fontSize: '11.5px', marginTop: '4px', fontWeight: 500, letterSpacing: '0.3px' }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}