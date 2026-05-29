import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiZap, FiLayers, FiCloud } from 'react-icons/fi';

const projects = [
  {
    title: 'RICEW ERP System',
    subtitle: 'Enterprise Resource Planning Platform',
    tech: ['React.js', 'AWS', 'Node.js', 'Express.js', 'Material UI', 'ExcelJS'],
    color: '#D94FB5',
    bg: 'rgba(217, 79, 181, 0.06)',
    icon: <FiZap size={22} />,
    label: 'ERP / SaaS',
    points: [
      'Engineered a responsive and accessible UI with React 18 and Material UI across all modules.',
      'Built a Bulk Management Module using ExcelJS and XLSX for mass upload and validation of RICEW requirements.',
      'Developed a Cost Estimation Model and Rate Card Generator for real-time effort, resourcing, and budget projections.',
    ],
  },
  {
    title: 'VOIZ',
    subtitle: 'Indian Regional Music Streaming Platform',
    tech: ['React.js', 'Flutter', 'AWS Lambda', 'Node.js', 'Express.js', 'DynamoDB'],
    color: '#E8602C',
    bg: 'rgba(232, 96, 44, 0.06)',
    icon: <FiLayers size={22} />,
    label: 'Music / Mobile',
    points: [
      'Designed and implemented a clean, intuitive player UI in React.js for seamless music browsing and streaming.',
      'Built and maintained RESTful APIs on AWS Lambda for secure, efficient data access.',
      'Engineered low-latency endpoints for audio streaming, user data management, and real-time interactions on AWS.',
    ],
  },
  {
    title: 'Ecomotiv',
    subtitle: 'Environmental Conservation Platform',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'AWS S3', 'CloudFront', 'Node.js'],
    color: '#C9A96A',
    bg: 'rgba(201, 169, 106, 0.06)',
    icon: <FiCloud size={22} />,
    label: 'Green / Cloud',
    points: [
      'Built a platform connecting corporations with farmers to facilitate tree plantation on registered land.',
      'Developed responsive, scalable frontend components using React.js and Tailwind CSS.',
      'Engineered media storage with AWS S3 and CloudFront for fast, secure delivery of photos, videos, and files.',
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  const project = projects[active];

  return (
    <section id="projects" ref={ref} style={{ padding: '2.4rem 2rem' }}>
      <style>{`
        .proj-list-item {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .proj-list-item:hover .proj-arrow {
          opacity: 1;
          transform: translateX(4px);
        }
        .proj-tag-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.9rem;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          background: rgba(26, 31, 110, 0.06);
          color: var(--text-secondary);
          border: 1px solid rgba(26, 31, 110, 0.1);
          transition: all 0.2s ease;
        }
        .proj-point::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-right: 0.75rem;
          flex-shrink: 0;
          margin-top: 0.45rem;
        }
        @media (max-width: 768px) {
          .projects-showcase {
            flex-direction: column !important;
          }
          .proj-sidebar {
            width: 100% !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(26, 31, 110, 0.08) !important;
            padding-bottom: 1.5rem !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">03 — Projects</span>
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Things I&apos;ve <span className="gradient-text">Built</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real-world products shipped to production.
        </motion.p>

        {/* Showcase Container */}
        <motion.div
          className="projects-showcase"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            display: 'flex',
            gap: 0,
            background: 'var(--bg-card)',
            borderRadius: '24px',
            border: '1px solid rgba(26, 31, 110, 0.08)',
            overflow: 'hidden',
            boxShadow: '0 20px 80px rgba(26, 31, 110, 0.07)',
            minHeight: '480px',
          }}
        >
          {/* Left Sidebar — Project List */}
          <div
            className="proj-sidebar"
            style={{
              width: '280px',
              flexShrink: 0,
              borderRight: '1px solid rgba(26, 31, 110, 0.08)',
              padding: '2rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {projects.map((p, i) => {
              const isActive = i === active;
              return (
                <div
                  key={p.title}
                  className="proj-list-item"
                  onClick={() => setActive(i)}
                  style={{
                    padding: '1.2rem 1.8rem',
                    position: 'relative',
                    background: isActive ? p.bg : 'transparent',
                    borderLeft: isActive ? `3px solid ${p.color}` : '3px solid transparent',
                  }}
                >
                  {/* Number */}
                  <div style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: isActive ? p.color : 'var(--text-muted)',
                    letterSpacing: '0.12em',
                    marginBottom: '0.3rem',
                    transition: 'color 0.3s ease',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                        transition: 'color 0.3s ease',
                        letterSpacing: '-0.02em',
                        marginBottom: '0.15rem',
                      }}>
                        {p.title}
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: isActive ? p.color : 'var(--text-muted)',
                        fontWeight: 600,
                        transition: 'color 0.3s ease',
                      }}>
                        {p.label}
                      </div>
                    </div>
                    <FiArrowRight
                      className="proj-arrow"
                      size={15}
                      style={{
                        color: p.color,
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateX(4px)' : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Bottom accent */}
            <div style={{ marginTop: 'auto', padding: '1.5rem 1.8rem 0.5rem' }}>
              <div style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                fontWeight: 500,
                lineHeight: 1.6,
              }}>
                {projects.length} production projects · Full-stack
              </div>
            </div>
          </div>

          {/* Right Detail Panel */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            {/* Giant background number */}
            <div style={{
              position: 'absolute',
              bottom: '-40px',
              right: '-20px',
              fontSize: '18rem',
              fontWeight: 900,
              lineHeight: 1,
              color: `${project.color}07`,
              userSelect: 'none',
              pointerEvents: 'none',
              letterSpacing: '-0.05em',
              zIndex: 0,
            }}>
              {String(active + 1).padStart(2, '0')}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{
                  padding: '3rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Header */}
                <div style={{ marginBottom: '2rem' }}>
                  {/* Accent bar */}
                  <div style={{
                    width: '40px',
                    height: '4px',
                    borderRadius: '2px',
                    background: project.color,
                    marginBottom: '1.5rem',
                    boxShadow: `0 0 12px ${project.color}60`,
                  }} />

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)`,
                      border: `1px solid ${project.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: project.color,
                      boxShadow: `0 8px 24px ${project.color}20`,
                    }}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 style={{
                        fontWeight: 800,
                        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        marginBottom: '0.2rem',
                      }}>
                        {project.title}
                      </h3>
                      <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {project.tech.map((t) => (
                    <span key={t} className="proj-tag-chip">{t}</span>
                  ))}
                </div>

                {/* Points */}
                <div style={{ flex: 1 }}>
                  {project.points.map((pt, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.1, duration: 0.35 }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        marginBottom: '1.2rem',
                        padding: '1rem 1.2rem',
                        borderRadius: '12px',
                        background: `${project.color}06`,
                        border: `1px solid ${project.color}15`,
                      }}
                    >
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: project.color,
                        flexShrink: 0,
                        marginTop: '0.4rem',
                        boxShadow: `0 0 8px ${project.color}80`,
                      }} />
                      <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.92rem',
                        lineHeight: 1.75,
                        margin: 0,
                      }}>
                        {pt}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom nav dots */}
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
                  {projects.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      style={{
                        width: i === active ? '28px' : '8px',
                        height: '8px',
                        borderRadius: '100px',
                        background: i === active ? project.color : 'rgba(26, 31, 110, 0.15)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: 0,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
