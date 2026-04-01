import { useState } from 'react';
import { motion } from 'framer-motion';

const fieldVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }
  })
};

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <motion.section
      id="contact"
      className="contact-section section-space"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Contact Us</p>
          <h2>Tell us about your space.</h2>
          <p>
            Share your project details and our team will get back with a tailored consultation and next
            steps.
          </p>
        </div>

        <motion.form className="contact-form" onSubmit={onSubmit} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.label custom={0.05} variants={fieldVariants}>
            Name
            <input name="name" type="text" required placeholder="Your full name" />
          </motion.label>

          <motion.label custom={0.12} variants={fieldVariants}>
            Email
            <input name="email" type="email" required placeholder="you@example.com" />
          </motion.label>

          <motion.label custom={0.19} variants={fieldVariants}>
            Phone
            <input name="phone" type="tel" placeholder="+91 98765 43210" />
          </motion.label>

          <motion.label custom={0.26} variants={fieldVariants}>
            Project Type
            <select name="project_type" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Residence</option>
              <option>Penthouse</option>
              <option>Villa</option>
              <option>Hospitality</option>
            </select>
          </motion.label>

          <motion.label className="message-field" custom={0.33} variants={fieldVariants}>
            Project Brief
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Scope, timeline, location, and preferred mood..."
            />
          </motion.label>

          <motion.button custom={0.4} variants={fieldVariants} type="submit" className="cta">
            Send Inquiry
          </motion.button>

          {submitted ? <p className="form-success">Thank you. We will contact you shortly.</p> : null}
        </motion.form>
      </div>
    </motion.section>
  );
}

export default ContactSection;
