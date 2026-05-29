import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiLinkedin, FiMail } from 'react-icons/fi';

const CARDS = [
  {
    id: 0,
    title: 'Ecomotiv',
    badge: 'Live', badgeColor: '#C9A96A',
    bg: '#2B2FA0', titleColor: '#fff',
    rowBg: 'rgba(255,255,255,0.12)', labelColor: 'rgba(255,255,255,0.85)',
    rows: [
      { k: 'Tech Stack', v: 'React + Tailwind', c: '#fff' },
      { k: 'Platform', v: 'B2B Web', c: '#C9A96A' },
      { k: 'Storage', v: 'AWS S3', c: 'rgba(255,255,255,0.75)' },
    ],
  },
  {
    id: 1,
    title: 'RICEW Platform',
    badge: 'Live', badgeColor: '#D94FB5',
    bg: '#fff', titleColor: '#1A1F6E',
    rowBg: '#F0F1F8', labelColor: '#1A1F6E',
    rows: [
      { k: 'Tech Stack', v: 'React + AWS', c: '#2B2FA0' },
      { k: 'Uptime', v: '99.97%', c: '#D94FB5' },
      { k: 'Avg Latency', v: '48ms', c: '#E8602C' },
    ],
  },
  {
    id: 2,
    title: 'VOIZ',
    badge: 'Live', badgeColor: '#E8602C',
    bg: '#FAFAF8', titleColor: '#1A1F6E',
    rowBg: 'rgba(43,47,160,0.05)', labelColor: '#1A1F6E',
    rows: [
      { k: 'Tech Stack', v: 'React + Flutter', c: '#2B2FA0' },
      { k: 'Backend', v: 'AWS Lambda', c: '#E8602C' },
      { k: 'Database', v: 'DynamoDB', c: '#D94FB5' },
    ],
  },
];

// Fan-out positions relative to the stack origin
const FAN = [
  { x: -140, y: -60, rotate: -11, z: 1 },
  { x:  -10, y:  30, rotate:   1, z: 2 },
  { x:  130, y:  95, rotate:   9, z: 3 },
];

// Deck-collected position (stacked tight)
const DECK_POS = [
  { x: 0, y: 0, rotate: -3,  z: 1 },
  { x: 2, y: 2, rotate:  0,  z: 2 },
  { x: 4, y: 4, rotate:  2,  z: 3 },
];

const getCardAnimate = (idx, phase, hoveredCard) => {
  if (phase === 'collecting') {
    return { x: DECK_POS[idx].x, y: DECK_POS[idx].y, rotate: DECK_POS[idx].rotate, scale: 0.96, zIndex: DECK_POS[idx].z };
  }
  const base = { x: FAN[idx].x, y: FAN[idx].y, rotate: FAN[idx].rotate, scale: 1, zIndex: FAN[idx].z };
  if (hoveredCard === idx) {
    return { ...base, y: base.y - 38, scale: 1.07, zIndex: 20 };
  }
  return base;
};

const getCardTransition = (idx, phase) => {
  if (phase === 'fan') {
    // Deal out: back card first → front card last
    return { type: 'spring', stiffness: 240, damping: 26, delay: idx * 0.12 };
  }
  if (phase === 'collecting') {
    // Collect: front card first → back card last
    return { type: 'spring', stiffness: 320, damping: 32, delay: (2 - idx) * 0.09 };
  }
  return { type: 'spring', stiffness: 200, damping: 24 };
};

export default function Hero() {
  const heroRef = useRef(null);
  const [phase, setPhase] = useState('stacked');
  const [hoveredCard, setHoveredCard] = useState(-1);

  // Spring-smoothed mouse parallax for the whole stack
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const stackX = useSpring(rawX, { stiffness: 70, damping: 22 });
  const stackY = useSpring(rawY, { stiffness: 70, damping: 22 });

  // Initial deal
  useEffect(() => {
    const t = setTimeout(() => setPhase('fan'), 500);
    return () => clearTimeout(t);
  }, []);

  // Periodic shuffle: collect → re-deal every 7s
  useEffect(() => {
    const id = setInterval(() => {
      setPhase('collecting');
      const t = setTimeout(() => setPhase('fan'), 750);
      return () => clearTimeout(t);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  // Mouse parallax
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      rawX.set(((e.clientX - r.left) / r.width - 0.5) * -28);
      rawY.set(((e.clientY - r.top) / r.height - 0.5) * -20);
    };
    const onLeave = () => { rawX.set(0); rawY.set(0); };
    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);
    return () => {
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
    };
  }, [rawX, rawY]);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: '100vh',
        paddingTop: '90px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <style>{`
        .hero-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(43,47,160,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(43,47,160,0.04) 1px, transparent 1px);
          background-size: 44px 44px;
          pointer-events: none; z-index: 0;
        }

        .h-card {
          width: 264px;
          border-radius: 18px;
          padding: 20px;
          border: 1px solid rgba(226,223,216,0.75);
          will-change: transform, box-shadow;
          cursor: default;
          user-select: none;
          box-shadow: 0 8px 36px rgba(26,31,110,0.10);
        }

        .hero-body {
          display: flex;
          align-items: center;
          padding: 0 52px;
          flex: 1;
          position: relative;
          z-index: 5;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          gap: 16px;
        }
        @media (max-width: 900px) {
          .hero-body { flex-direction: column; padding: 0 24px; }
          .hero-right-panel { display: none !important; }
        }

        .card-stack-scene {
          position: relative;
          width: 500px;
          height: 420px;
        }

        .card-origin {
          position: absolute;
          left: 160px;
          top: 140px;
        }

        /* Orbit ring */
        .h-orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(43,47,160,0.12);
          pointer-events: none;
        }

        /* Shuffle hint label */
        @keyframes hfu { from{opacity:0;transform:translateY(16px);} to{opacity:1;transform:translateY(0);} }

        /* badge dot */
        @keyframes hdot { 0%,100%{transform:scale(1);} 50%{transform:scale(1.5);} }

        /* scroll wheel */
        .h-sc-mouse::after {
          content:''; width:3px; height:6px;
          background: #2B2FA0; border-radius:100px;
          animation: hscroll 1.5s ease-in-out infinite;
          display:block; margin:4px auto 0;
        }
        @keyframes hscroll {0%,100%{transform:translateY(0);opacity:1;}50%{transform:translateY(6px);opacity:0;}}

        /* accent lines */
        .h-aline { height:2px; border-radius:100px; background:#E8602C; width:0; }
        .h-aline:nth-child(1) { animation: hal1 0.9s 1.1s ease forwards; }
        .h-aline:nth-child(2) { animation: hal2 0.9s 1.25s ease forwards; }
        .h-aline:nth-child(3) { animation: hal3 0.9s 1.4s ease forwards; }
        @keyframes hal1 { to { width:40px; } }
        @keyframes hal2 { to { width:28px; } }
        @keyframes hal3 { to { width:16px; } }

        /* Glow blob behind cards */
        .card-glow {
          position: absolute;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(43,47,160,0.07) 0%, transparent 70%);
          left: 50%; top: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
          filter: blur(20px);
        }
      `}</style>

      <div className="hero-bg-grid" />

      <div className="hero-body">

        {/* LEFT — Text content */}
        <div style={{ flex: '0 0 46%', paddingTop: '0px' }}>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: '#FAFAF8', border: '1px solid #E2DFD8',
              borderRadius: '100px', padding: '5px 14px',
              fontSize: '11px', color: '#2B2FA0', fontWeight: 600,
              letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '20px',
            }}
          >
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%', background: '#D94FB5',
              animation: 'hdot 1.8s ease-in-out infinite',
            }} />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              fontWeight: 900, lineHeight: 1.05,
              color: 'var(--text-primary)',
              letterSpacing: '-0.04em', marginBottom: '14px',
            }}
          >
            Abhishek<br />
            <span style={{ color: '#D94FB5' }}>Gothankar</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            style={{
              fontSize: '1rem', fontWeight: 500,
              color: 'var(--text-secondary)', opacity: 0.8,
              marginBottom: '10px', minHeight: '1.6rem',
            }}
          >
            <TypeAnimation
              sequence={[
                'Jr. Software Developer', 2000,
                'React.js Specialist', 2000,
                'Flutter Developer', 2000,
                'AWS Cloud Engineer', 2000,
                'Full-Stack Builder', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ color: '#E8602C', fontWeight: 700 }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            style={{
              fontSize: '0.95rem', color: 'var(--text-secondary)', opacity: 0.65,
              lineHeight: 1.75, maxWidth: '400px', marginBottom: '30px',
            }}
          >
            Building scalable SaaS applications, cross-platform mobile apps, and serverless cloud architectures with modern tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#projects"
              whileHover={{ translateY: -2, boxShadow: '0 8px 24px rgba(26,31,110,0.25)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '12px 26px',
                background: '#1A1F6E', color: '#fff',
                borderRadius: '100px', fontSize: '13px', fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '6px',
              }}
            >
              View My Work <FiArrowRight size={14} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ opacity: 1 }}
              style={{
                padding: '12px 26px',
                background: 'transparent', color: '#2B2FA0',
                border: '1.5px solid #2B2FA0',
                borderRadius: '100px', fontSize: '13px', fontWeight: 500,
                textDecoration: 'none', opacity: 0.65,
                transition: 'opacity 0.2s ease',
              }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.56 }}
            style={{
              display: 'flex', gap: '28px',
              paddingTop: '20px',
              borderTop: '1px solid #E2DFD8',
            }}
          >
            {[
              { n: '1+', l: 'Year Experience' },
              { n: '3', l: 'Live Products' },
              { n: '10+', l: 'AWS Services' },
            ].map((s) => (
              <div key={s.l}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#1A1F6E', letterSpacing: '-0.05em' }}>{s.n}</div>
                <div style={{ fontSize: '11px', color: '#2B2FA0', opacity: 0.5, marginTop: '2px', letterSpacing: '0.3px' }}>{s.l}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ display: 'flex', gap: '12px', marginTop: '24px' }}
          >
            {[
              { icon: <FiLinkedin size={16} />, href: 'https://linkedin.com/in/abhishek-gothankar', label: 'LinkedIn' },
              { icon: <FiMail size={16} />, href: 'mailto:abhishekgothankar01@gmail.com', label: 'Email' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                title={s.label}
                style={{
                  width: '38px', height: '38px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '10px',
                  background: 'rgba(43,47,160,0.06)',
                  border: '1px solid rgba(43,47,160,0.12)',
                  color: '#2B2FA0', textDecoration: 'none',
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Card deck scene */}
        <div
          className="hero-right-panel"
          style={{
            flex: '1 1 auto',
            position: 'relative',
            height: '480px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '20px',
          }}
        >
          {/* Subtle orbit rings */}
          <div className="h-orbit-ring" style={{ width: '380px', height: '380px', left: '50px', top: '50px' }} />
          <div className="h-orbit-ring" style={{ width: '240px', height: '240px', left: '130px', top: '110px', opacity: 0.6 }} />

          {/* Glow blob */}
          <div className="card-glow" style={{ left: '240px', top: '210px', transform: 'none' }} />

          {/* Floating accent dots */}
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: '60px', left: '60px', width: '10px', height: '10px', borderRadius: '50%', background: '#D94FB5', opacity: 0.5 }}
          />
          <motion.div
            animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
            transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            style={{ position: 'absolute', bottom: '100px', right: '80px', width: '7px', height: '7px', borderRadius: '50%', background: '#C9A96A', opacity: 0.45 }}
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            style={{ position: 'absolute', top: '160px', right: '60px', width: '5px', height: '5px', borderRadius: '50%', background: '#E8602C', opacity: 0.4 }}
          />

          {/* Card stack with mouse parallax */}
          <motion.div
            className="card-stack-scene"
            style={{ x: stackX, y: stackY }}
          >
            <div className="card-origin">
              {CARDS.map((card, idx) => (
                <motion.div
                  key={card.id}
                  style={{
                    position: 'absolute',
                    transformOrigin: 'center bottom',
                    cursor: 'default',
                  }}
                  initial={{ x: DECK_POS[idx].x, y: DECK_POS[idx].y, rotate: DECK_POS[idx].rotate, scale: 0.9, opacity: 0 }}
                  animate={{
                    ...getCardAnimate(idx, phase, hoveredCard),
                    opacity: 1,
                  }}
                  transition={getCardTransition(idx, phase)}
                  onHoverStart={() => setHoveredCard(idx)}
                  onHoverEnd={() => setHoveredCard(-1)}
                >
                  <div
                    className="h-card"
                    style={{
                      background: card.bg,
                      boxShadow: hoveredCard === idx
                        ? '0 24px 60px rgba(26,31,110,0.22), 0 4px 16px rgba(26,31,110,0.10)'
                        : '0 8px 36px rgba(26,31,110,0.10)',
                      transition: 'box-shadow 0.3s ease',
                    }}
                  >
                    {/* Card header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: card.titleColor }}>{card.title}</div>
                      <div style={{
                        fontSize: '10px', padding: '3px 10px', borderRadius: '100px',
                        background: card.badgeColor, color: '#fff', fontWeight: 600,
                      }}>
                        {card.badge}
                      </div>
                    </div>
                    {/* Card rows */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      {card.rows.map((row) => (
                        <div
                          key={row.k}
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '8px 11px', background: card.rowBg, borderRadius: '8px',
                          }}
                        >
                          <div style={{ fontSize: '12px', color: card.labelColor, fontWeight: 500 }}>{row.k}</div>
                          <div style={{ fontSize: '12px', fontWeight: 700, color: row.c }}>{row.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stack label tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            style={{
              position: 'absolute', top: '28px', right: '24px', zIndex: 10,
              background: '#fff', border: '1px solid #E2DFD8', borderRadius: '12px',
              padding: '8px 14px',
              boxShadow: '0 4px 16px rgba(26,31,110,0.08)',
            }}
          >
            <div style={{ fontSize: '10px', color: '#2B2FA0', opacity: 0.5, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Stack</div>
            <div style={{ fontWeight: 800, fontSize: '14px', color: '#1A1F6E', marginTop: '1px' }}>AWS · Node · React</div>
            <div style={{ fontSize: '10px', color: '#D94FB5', fontWeight: 600, marginTop: '1px' }}>+ Flutter · DynamoDB</div>
          </motion.div>

          {/* Accent lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            style={{
              position: 'absolute', top: '78px', right: '34px',
              display: 'flex', flexDirection: 'column', gap: '5px',
            }}
          >
            <div className="h-aline" />
            <div className="h-aline" />
            <div className="h-aline" />
          </motion.div>

          {/* Shuffle hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            style={{
              position: 'absolute', bottom: '32px', left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex', alignItems: 'center', gap: '5px',
              fontSize: '10px', color: '#2B2FA0', opacity: 0.35,
              letterSpacing: '0.4px',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#2B2FA0', opacity: 0.5 }} />
            Hover cards to explore
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          position: 'absolute', bottom: '20px', left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        }}
      >
        <div
          className="h-sc-mouse"
          style={{
            width: '20px', height: '30px',
            border: '1.5px solid #2B2FA0', borderRadius: '100px',
            opacity: 0.25,
          }}
        />
        <div style={{ fontSize: '9px', color: '#2B2FA0', opacity: 0.35, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
          Scroll
        </div>
      </motion.div>
    </section>
  );
}