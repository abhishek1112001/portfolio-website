import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    company: 'CloudMotiv',
    role: 'Jr. Software Developer',
    period: 'Jan 2025 – Present',
    location: 'Pune, India',
    color: '#6c63ff',
    points: [
      'Developed and maintained scalable SaaS applications with React.js and JavaScript, enhancing performance and responsive UI design.',
      'Designed and implemented RESTful APIs with Node.js and Express.js for seamless web & mobile integration.',
      'Implemented serverless backend architectures with AWS Lambda and API Gateway, enabling scalable, cost-efficient services.',
      'Built cross-platform mobile applications using Flutter and deployed apps to the Google Play Store.',
    ],
  },
  {
    company: 'Level Up Technologies',
    role: 'Software Development Intern',
    period: 'Jun 2024 – Sep 2024',
    location: 'Bopal (Online)',
    color: '#00d4ff',
    points: [
      'Contributed to frontend development at a fast-growing IT company providing software, website, and application development solutions globally.',
      'Worked as a Frontend Developer using React, HTML, CSS, Tailwind CSS, and JavaScript.',
      'Completed a certified internship with a focus on modern web development practices.',
    ],
  },
];

const education = [
  {
    institution: 'D.G. Ruparel College',
    degree: 'Master of Science in Computer Science',
    period: 'Jun 2022 – Apr 2024',
    location: 'Mumbai',
  },
  {
    institution: 'Kirti M. Doongursee College',
    degree: 'Bachelor of Science in Computer Science',
    period: 'Jun 2019 – Apr 2022',
    location: 'Mumbai',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: '7rem 2rem',
        background: 'linear-gradient(180deg, transparent 0%, rgba(108, 99, 255, 0.03) 50%, transparent 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <span className="section-tag">02 — Experience</span>
        </motion.div>
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          My <span className="gradient-text">Journey</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
        >
          Where I&apos;ve worked and what I&apos;ve built along the way.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
          {/* Work Experience */}
          <div>
            <motion.h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
              }}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={3}
            >
              Work Experience
            </motion.h3>

            <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
              <div className="timeline-line" />

              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  style={{ position: 'relative', marginBottom: '2.5rem' }}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={i + 4}
                >
                  <div
                    className="timeline-dot"
                    style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}66` }}
                  />

                  <motion.div
                    className="glass-card"
                    style={{ padding: '1.5rem' }}
                    whileHover={{ x: 4 }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                    }}>
                      <div>
                        <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                          {exp.role}
                        </h4>
                        <div style={{ color: exp.color, fontWeight: 600, fontSize: '0.9rem' }}>
                          {exp.company}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{
                          fontSize: '0.78rem',
                          background: `${exp.color}18`,
                          border: `1px solid ${exp.color}30`,
                          color: exp.color,
                          borderRadius: '6px',
                          padding: '0.2rem 0.6rem',
                          fontWeight: 600,
                          marginBottom: '0.3rem',
                          whiteSpace: 'nowrap',
                        }}>
                          {exp.period}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          📍 {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem' }}>
                      {exp.points.map((pt, j) => (
                        <li
                          key={j}
                          style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.88rem',
                            lineHeight: 1.7,
                            marginBottom: '0.5rem',
                          }}
                        >
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--accent-cyan)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
              }}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={3}
            >
              Education
            </motion.h3>

            <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
              <div className="timeline-line" style={{
                background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-green), transparent)',
              }} />

              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  style={{ position: 'relative', marginBottom: '2.5rem' }}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={i + 5}
                >
                  <div
                    className="timeline-dot"
                    style={{
                      background: 'var(--accent-cyan)',
                      boxShadow: '0 0 12px var(--glow-cyan)',
                    }}
                  />

                  <motion.div
                    className="glass-card"
                    style={{ padding: '1.5rem' }}
                    whileHover={{ x: 4 }}
                  >
                    <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                      {edu.degree}
                    </h4>
                    <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                      {edu.institution}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>📅 {edu.period}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>📍 {edu.location}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Certification */}
              <motion.div
                style={{ position: 'relative', marginBottom: '2.5rem' }}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={8}
              >
                <div
                  className="timeline-dot"
                  style={{ background: 'var(--accent-green)', boxShadow: '0 0 12px rgba(0, 255, 179, 0.4)' }}
                />
                <motion.div
                  className="glass-card"
                  style={{ padding: '1.5rem' }}
                  whileHover={{ x: 4 }}
                >
                  <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    Frontend Development Certification
                  </h4>
                  <div style={{ color: 'var(--accent-green)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    Level Up Technologies
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>📅 Sep 2024</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
