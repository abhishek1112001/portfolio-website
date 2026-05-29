import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const WORK = [
  {
    company: 'CloudMotiv',
    initials: 'CM',
    role: 'Jr. Software Developer',
    period: 'Jan 2025 – Present',
    location: 'Pune, India',
    color: '#2B2FA0',
    current: true,
    tags: ['React.js', 'Node.js', 'AWS Lambda', 'Flutter', 'DynamoDB', 'API Gateway'],
    points: [
      'Built and maintained scalable SaaS applications using React.js, improving performance and responsive UI design.',
      'Designed RESTful APIs with Node.js and Express.js for seamless web and mobile integration.',
      'Implemented serverless architectures on AWS Lambda + API Gateway for cost-efficient, scalable backends.',
      'Built and deployed cross-platform Flutter apps to the Google Play Store.',
    ],
  },
  {
    company: 'Level Up Technologies',
    initials: 'LU',
    role: 'Frontend Developer Intern',
    period: 'Jun 2024 – Sep 2024',
    location: 'Bopal (Remote)',
    color: '#E8602C',
    current: false,
    tags: ['React.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
    points: [
      'Contributed to frontend development at a global IT company delivering software and web solutions.',
      'Built responsive UI components with React, Tailwind CSS, and JavaScript.',
      'Completed certified internship with a focus on modern web development practices.',
    ],
  },
];

const EDUCATION = [
  {
    institution: 'D.G. Ruparel College',
    degree: 'Master of Science — Computer Science',
    period: 'Jun 2022 – Apr 2024',
    location: 'Mumbai',
    color: '#D94FB5',
    icon: '🎓',
  },
  {
    institution: 'Kirti M. Doongursee College',
    degree: 'Bachelor of Science — Computer Science',
    period: 'Jun 2019 – Apr 2022',
    location: 'Mumbai',
    color: '#2B2FA0',
    icon: '🎓',
  },
  {
    institution: 'Level Up Technologies',
    degree: 'Frontend Development Certification',
    period: 'Sep 2024',
    location: 'Bopal (Remote)',
    color: '#E8602C',
    icon: '📜',
  },
];

const TABS = [
  { id: 'work', label: 'Work Experience', count: WORK.length },
  { id: 'edu',  label: 'Education',       count: EDUCATION.length },
];

const tabPanel = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [tab, setTab] = useState('work');

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(43,47,160,0.04) 50%, transparent 100%)',
      }}
    >
      <style>{`
        .exp-card {
          background: #fff;
          border-radius: 18px;
          border: 1px solid rgba(43,47,160,0.09);
          box-shadow: 0 4px 20px rgba(26,31,110,0.05);
          overflow: hidden;
          margin-bottom: 1.4rem;
          display: flex;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .exp-card:hover {
          box-shadow: 0 14px 40px rgba(26,31,110,0.12);
          transform: translateY(-3px) translateX(3px);
        }
        .exp-card-body { padding: 1.5rem; flex: 1; }
        .exp-tag {
          display: inline-flex;
          font-size: 11px; font-weight: 600;
          padding: 3px 11px; border-radius: 100px;
          background: rgba(43,47,160,0.07);
          color: #2B2FA0;
          border: 1px solid rgba(43,47,160,0.12);
          transition: background 0.2s;
        }
        .exp-tag:hover { background: rgba(43,47,160,0.14); }

        .edu-card {
          background: #fff;
          border-radius: 18px;
          border: 1px solid rgba(43,47,160,0.09);
          box-shadow: 0 4px 20px rgba(26,31,110,0.05);
          padding: 1.4rem 1.6rem;
          margin-bottom: 1.2rem;
          display: flex; gap: 1rem; align-items: flex-start;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .edu-card:hover {
          box-shadow: 0 14px 36px rgba(26,31,110,0.11);
          transform: translateY(-3px);
        }
        .edu-icon-wrap {
          width: 46px; height: 46px; flex-shrink: 0;
          border-radius: 12px; display: flex; align-items: center; justify-content: center;
          font-size: 20px;
        }

        .exp-timeline-wrap { position: relative; padding-left: 44px; }
        .exp-tl-line {
          position: absolute; left: 15px; top: 8px; width: 2px;
          border-radius: 2px;
          transform-origin: top;
        }
        .exp-tl-dot {
          position: absolute; left: 6px;
          width: 20px; height: 20px; border-radius: 50%;
          background: #fff; border: 3px solid;
          box-shadow: 0 0 0 4px rgba(255,255,255,0.8);
        }

        .tab-btn {
          position: relative; padding: 8px 20px;
          border-radius: 100px; border: none; cursor: pointer;
          font-size: 13px; font-weight: 600;
          background: transparent; outline: none;
          transition: color 0.2s ease;
          z-index: 1;
        }
        .exp-bullet {
          display: flex; gap: 9px; align-items: flex-start;
          margin-bottom: 0.6rem;
        }
        .exp-bullet-dot {
          width: 6px; height: 6px; border-radius: 50%;
          flex-shrink: 0; margin-top: 7px;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">02 — Experience</span>
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: '0.5rem' }}
        >
          My <span className="gradient-text">Journey</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Where I&apos;ve worked and what I&apos;ve built along the way.
        </motion.p>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'inline-flex', gap: '4px',
            background: 'rgba(43,47,160,0.06)',
            border: '1px solid rgba(43,47,160,0.1)',
            borderRadius: '100px', padding: '4px',
            marginBottom: '2.8rem',
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              className="tab-btn"
              onClick={() => setTab(t.id)}
              style={{ color: tab === t.id ? '#fff' : '#2B2FA0' }}
            >
              {tab === t.id && (
                <motion.div
                  layoutId="tab-pill"
                  style={{
                    position: 'absolute', inset: 0,
                    background: '#1A1F6E',
                    borderRadius: '100px',
                    zIndex: -1,
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                />
              )}
              {t.label}
              <span style={{
                marginLeft: '7px', fontSize: '10px', fontWeight: 700,
                background: tab === t.id ? 'rgba(255,255,255,0.2)' : 'rgba(43,47,160,0.12)',
                padding: '1px 7px', borderRadius: '100px',
                color: tab === t.id ? '#fff' : '#2B2FA0',
              }}>
                {t.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">

          {/* WORK EXPERIENCE */}
          {tab === 'work' && (
            <motion.div key="work" variants={tabPanel} initial="initial" animate="animate" exit="exit">
              <div className="exp-timeline-wrap">

                {/* Animated line */}
                <motion.div
                  className="exp-tl-line"
                  style={{
                    height: `${WORK.length * 220}px`,
                    background: 'linear-gradient(to bottom, #2B2FA0, #E8602C, rgba(201,169,106,0.15))',
                  }}
                  initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
                  transition={{ duration: 1.1, delay: 0.2, ease: 'easeInOut' }}
                />

                {WORK.map((exp, i) => (
                  <div key={exp.company} style={{ position: 'relative', marginBottom: '1.6rem' }}>
                    {/* Timeline dot */}
                    <motion.div
                      className="exp-tl-dot"
                      style={{ borderColor: exp.color, top: '22px', boxShadow: `0 0 0 4px #fff, 0 0 12px ${exp.color}44` }}
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 0.35 + i * 0.2 }}
                    />

                    {/* Card */}
                    <motion.div
                      className="exp-card"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 + i * 0.15 }}
                    >
                      {/* Left color stripe */}
                      <div style={{ width: '5px', background: exp.color, flexShrink: 0, borderRadius: '0 0 0 0' }} />

                      <div className="exp-card-body">
                        {/* Card top row */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.9rem' }}>
                          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            {/* Company initial badge */}
                            <div style={{
                              width: '42px', height: '42px', borderRadius: '12px',
                              background: exp.color + '18', border: `1.5px solid ${exp.color}30`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '13px', fontWeight: 800, color: exp.color,
                              flexShrink: 0,
                            }}>
                              {exp.initials}
                            </div>
                            <div>
                              <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1A1F6E', marginBottom: '2px' }}>
                                {exp.role}
                              </div>
                              <div style={{ fontSize: '13px', fontWeight: 600, color: exp.color }}>
                                {exp.company}
                              </div>
                            </div>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              {exp.current && (
                                <span style={{
                                  fontSize: '10px', fontWeight: 700, padding: '2px 9px',
                                  borderRadius: '100px', background: '#1A1F6E', color: '#fff',
                                  letterSpacing: '0.4px',
                                }}>
                                  CURRENT
                                </span>
                              )}
                              <span style={{
                                fontSize: '11.5px', fontWeight: 600, padding: '3px 11px',
                                borderRadius: '100px', background: exp.color + '14',
                                border: `1px solid ${exp.color}28`, color: exp.color,
                              }}>
                                {exp.period}
                              </span>
                            </div>
                            <span style={{ fontSize: '11.5px', color: '#888', marginTop: '1px' }}>
                              📍 {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* Bullet points */}
                        <div style={{ marginBottom: '1rem' }}>
                          {exp.points.map((pt, j) => (
                            <motion.div
                              key={j}
                              className="exp-bullet"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.35, delay: 0.4 + i * 0.15 + j * 0.07 }}
                            >
                              <div className="exp-bullet-dot" style={{ background: exp.color }} />
                              <span style={{ fontSize: '13.5px', color: '#2B2FA0', opacity: 0.8, lineHeight: 1.7 }}>{pt}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Tech tags */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {exp.tags.map((tag) => (
                            <span key={tag} className="exp-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* EDUCATION */}
          {tab === 'edu' && (
            <motion.div key="edu" variants={tabPanel} initial="initial" animate="animate" exit="exit">
              <div className="exp-timeline-wrap">

                {/* Animated line */}
                <motion.div
                  className="exp-tl-line"
                  style={{
                    height: `${EDUCATION.length * 110}px`,
                    background: 'linear-gradient(to bottom, #D94FB5, #2B2FA0, #E8602C)',
                  }}
                  initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
                />

                {EDUCATION.map((edu, i) => (
                  <div key={edu.institution} style={{ position: 'relative', marginBottom: '1.2rem' }}>
                    {/* Timeline dot */}
                    <motion.div
                      className="exp-tl-dot"
                      style={{ borderColor: edu.color, top: '16px', boxShadow: `0 0 0 4px #fff, 0 0 10px ${edu.color}44` }}
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 0.3 + i * 0.18 }}
                    />

                    <motion.div
                      className="edu-card"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: 0.2 + i * 0.15 }}
                    >
                      {/* Icon badge */}
                      <div className="edu-icon-wrap" style={{ background: edu.color + '14', border: `1.5px solid ${edu.color}28` }}>
                        <span>{edu.icon}</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: '0.97rem', color: '#1A1F6E', marginBottom: '3px' }}>
                          {edu.degree}
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: edu.color, marginBottom: '6px' }}>
                          {edu.institution}
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '12px', color: '#888' }}>📅 {edu.period}</span>
                          <span style={{ fontSize: '12px', color: '#888' }}>📍 {edu.location}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}