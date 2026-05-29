import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#6c63ff',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Flutter', level: 78 },
      { name: 'HTML / CSS', level: 92 },
    ],
  },
  {
    category: 'Backend',
    color: '#00d4ff',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'Microservices', level: 70 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: '#00ffb3',
    icon: '☁️',
    skills: [
      { name: 'AWS Lambda', level: 78 },
      { name: 'API Gateway', level: 75 },
      { name: 'AWS S3', level: 80 },
      { name: 'CloudFront', level: 72 },
      { name: 'EC2', level: 65 },
    ],
  },
  {
    category: 'Database & Tools',
    color: '#ff6584',
    icon: '🗄️',
    skills: [
      { name: 'DynamoDB', level: 72 },
      { name: 'MySQL', level: 75 },
      { name: 'Java', level: 68 },
      { name: 'Git', level: 85 },
    ],
  },
];

const techBadges = [
  'React.js', 'JavaScript', 'Node.js', 'Express.js',
  'Flutter', 'AWS Lambda', 'DynamoDB', 'MySQL',
  'Tailwind CSS', 'HTML/CSS', 'Java', 'Git',
  'API Gateway', 'S3', 'CloudFront', 'EC2',
  'ExcelJS', 'Material UI', 'RESTful API', 'Microservices',
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
};

function SkillBar({ skill, color, inView, delay }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
          {skill.name}
        </span>
        <span style={{ color: color, fontSize: '0.8rem', fontWeight: 600 }}>
          {skill.level}%
        </span>
      </div>
      <div style={{
        height: '6px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '100px',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            height: '100%',
            borderRadius: '100px',
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 10px ${color}44`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: '7rem 2rem',
        background: 'linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.02) 50%, transparent 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <span className="section-tag">04 — Skills</span>
        </motion.div>
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          My <span className="gradient-text-alt">Toolkit</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
        >
          Technologies I work with daily to craft great products.
        </motion.p>

        {/* Skill groups with bars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass-card"
              style={{ padding: '1.8rem' }}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={gi + 3}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.3rem' }}>{group.icon}</span>
                <h3 style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: group.color,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  color={group.color}
                  inView={inView}
                  delay={gi * 0.1 + si * 0.08 + 0.3}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={8}
        >
          <h3 style={{
            fontSize: '0.9rem',
            fontWeight: 700,
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            All Technologies
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                className="skill-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.04 + 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.08 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
