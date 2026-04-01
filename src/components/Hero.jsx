import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const headline = 'Spaces Composed Like Cinema';

function Hero() {
  const words = useMemo(() => headline.split(' '), []);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const onPointerMove = (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 10;
    const y = (event.clientY / innerHeight - 0.5) * 10;
    setPointer({ x, y });
  };

  return (
    <section className="hero" onMouseMove={onPointerMove}>
      <motion.div
        className="hero-bg"
        animate={{ scale: 1.1, x: pointer.x, y: pointer.y }}
        transition={{
          scale: { duration: 9, ease: 'easeOut' },
          x: { type: 'spring', stiffness: 28, damping: 20 },
          y: { type: 'spring', stiffness: 28, damping: 20 }
        }}
      />

      <div className="hero-overlay" />

      <div className="hero-content container">
        <h1 aria-label={headline}>
          {words.map((word, index) => (
            <motion.span
              className="hero-word"
              key={word + index}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.14 }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          We design refined interiors with the pacing, atmosphere, and emotional arc of a luxury brand film.
        </motion.p>

        <motion.div
          className="hero-cta-wrap"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        >
          <motion.a
            href="#projects"
            className="cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            Explore Projects
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.1, ease: 'easeInOut' }}
      >
        <span />
      </motion.div>
    </section>
  );
}

export default Hero;
