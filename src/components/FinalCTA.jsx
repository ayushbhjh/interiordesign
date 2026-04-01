import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
  })
};

function FinalCTA() {
  return (
    <motion.section
      className="final-cta section-space"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className="container final-cta-inner">
        <motion.p custom={0.1} variants={textVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
          Begin A Private Commission
        </motion.p>
        <motion.h2 custom={0.2} variants={textVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
          Let us compose your next space with cinematic restraint and timeless detail.
        </motion.h2>
        <motion.a
          custom={0.35}
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="cta cta-glow"
          href="mailto:hello@aureliaatelier.com"
        >
          Start The Conversation
        </motion.a>
      </div>
    </motion.section>
  );
}

export default FinalCTA;
