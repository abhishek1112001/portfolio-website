import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const stats = [
  { value: '1+', label: 'Year Experience' },
  { value: '3', label: 'Major Projects' },
  { value: '5+', label: 'Tech Stacks' },
  { value: '2', label: 'Degrees' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} style={{ padding: '7rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <span className="section-tag">01 — About</span>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
        marginTop: '1rem',
      }}>
        {/* Left — Text */}
        <div>
          <motion.h2
            className="section-title"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
          >
            Crafting Digital{' '}
            <span className="gradient-text">Experiences</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
            style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '1.05rem' }}
          >
            I&apos;m a Junior Software Developer at CloudMotiv, Pune, with a passion for building
            scalable SaaS applications, cross-platform mobile apps, and efficient cloud-native backend systems.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={3}
            style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '2rem', fontSize: '1.05rem' }}
          >
            From designing responsive UIs with React.js to deploying serverless architectures
            on AWS Lambda, I focus on delivering fast, reliable, and beautiful software.
            I also build and publish cross-platform mobile apps with Flutter on the Google Play Store.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={4}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="mailto:abhishekgothankar01@gmail.com" className="btn-primary">
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Right — Stats */}
        <div>
          {/* Stats Grid */}
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '2rem',
            }}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="glass-card"
                style={{ padding: '1.5rem', textAlign: 'center' }}
                whileHover={{ scale: 1.04 }}
                custom={i}
              >
                <div className="stat-number">{s.value}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Info block */}
          <motion.div
            className="glass-card"
            style={{ padding: '1.5rem' }}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={4}
          >
            {[
              { label: '📍 Location', value: 'Pune, India' },
              { label: '🎓 Education', value: 'M.Sc. Computer Science' },
              { label: '🏢 Current', value: 'CloudMotiv — Jr. Developer' },
              { label: '📧 Email', value: 'abhishekgothankar01@gmail.com' },
              { label: '📱 Phone', value: '+91 9833505711' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid rgba(108, 99, 255, 0.08)',
                  gap: '1rem',
                }}
              >
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                  {item.label}
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'right' }}>
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
