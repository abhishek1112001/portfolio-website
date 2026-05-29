import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const projects = [
  {
    title: 'RICEW ERP System',
    subtitle: 'Enterprise Resource Planning Platform',
    tech: ['React.js', 'AWS', 'Node.js', 'Express.js', 'Material UI', 'ExcelJS'],
    color: '#6c63ff',
    gradient: 'linear-gradient(135deg, #6c63ff22, #8b83ff11)',
    emoji: '⚡',
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
    color: '#ff6584',
    gradient: 'linear-gradient(135deg, #ff658422, #ff83a011)',
    emoji: '🎵',
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
    color: '#00ffb3',
    gradient: 'linear-gradient(135deg, #00ffb322, #00d4ff11)',
    emoji: '🌿',
    points: [
      'Built a platform connecting corporations with farmers to facilitate tree plantation on registered land.',
      'Developed responsive, scalable frontend components using React.js and Tailwind CSS.',
      'Engineered media storage with AWS S3 and CloudFront for fast, secure delivery of photos, videos, and files.',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

function ProjectCard({ project, index, inView }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="glass-card"
      style={{
        padding: '2rem',
        background: project.gradient,
        overflow: 'hidden',
        cursor: 'default',
      }}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      whileHover={{ y: -6 }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '52px', height: '52px',
            background: `${project.color}20`,
            border: `1px solid ${project.color}40`,
            borderRadius: '14px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.4rem',
            flexShrink: 0,
          }}>
            {project.emoji}
          </div>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
              {project.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{project.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.2rem' }}>
        {project.tech.map((t) => (
          <span
            key={t}
            className="project-tag"
            style={{
              background: `${project.color}12`,
              color: project.color,
              borderColor: `${project.color}30`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Description — collapsible */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{ overflow: 'hidden', paddingLeft: '1.2rem', marginBottom: '1rem' }}
          >
            {project.points.map((pt, i) => (
              <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '0.5rem' }}>
                {pt}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: 'transparent',
          border: `1px solid ${project.color}30`,
          color: project.color,
          borderRadius: '8px',
          padding: '0.45rem 1rem',
          fontSize: '0.82rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {expanded ? <><FiChevronUp /> Show Less</> : <><FiChevronDown /> View Details</>}
      </button>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} style={{ padding: '7rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <span className="section-tag">03 — Projects</span>
        </motion.div>
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Things I&apos;ve <span className="gradient-text">Built</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
        >
          Real-world projects shipped to production.
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 3} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
