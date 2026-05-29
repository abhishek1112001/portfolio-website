import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: '2.4rem 2rem 1.8rem',
        background: 'linear-gradient(180deg, transparent 0%, rgba(43, 47, 160, 0.05) 50%, transparent 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <span className="section-tag">05 — Contact</span>
        </motion.div>
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Let&apos;s <span className="gradient-text">Work Together</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
        >
          Open to new opportunities, collaborations, and interesting projects.
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={3}
          >
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              fontSize: '1.05rem',
            }}>
              Whether you have a project idea, a job opportunity, or just want to say hello — 
              my inbox is always open. I&apos;ll try my best to get back to you!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  icon: <FiMail size={18} />,
                  label: 'Email',
                  value: 'abhishekgothankar01@gmail.com',
                  href: 'mailto:abhishekgothankar01@gmail.com',
                  color: '#2B2FA0',
                },
                {
                  icon: <FiPhone size={18} />,
                  label: 'Phone',
                  value: '+91 9833505711',
                  href: 'tel:+919833505711',
                  color: '#E8602C',
                },
                {
                  icon: <FiLinkedin size={18} />,
                  label: 'LinkedIn',
                  value: 'Abhishek Gothankar',
                  href: 'https://linkedin.com/in/abhishek-gothankar',
                  color: '#C9A96A',
                },
                {
                  icon: <FiMapPin size={18} />,
                  label: 'Location',
                  value: 'Pune, India',
                  href: null,
                  color: '#D94FB5',
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="glass-card"
                  style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                  whileHover={{ x: 6 }}
                >
                  <div style={{
                    width: '42px', height: '42px',
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.color,
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.3s' }}
                        onMouseEnter={(e) => e.target.style.color = item.color}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-card"
            style={{ padding: '2rem' }}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={4}
          >
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="contact-input"
                  style={{ resize: 'vertical', minHeight: '120px' }}
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                disabled={sending || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  justifyContent: 'center',
                  opacity: sending ? 0.7 : 1,
                  background: sent
                    ? 'linear-gradient(135deg, #C9A96A, #D6BA84)'
                    : 'linear-gradient(135deg, #2B2FA0, #3B3FB0)',
                }}
              >
                {sent ? '✓ Message Sent!' : sending ? 'Sending...' : <><FiSend /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
