import { motion, useScroll, useTransform } from 'framer-motion';

function SceneInterlude() {
  const { scrollY } = useScroll();
  const leftY = useTransform(scrollY, [350, 1600], [0, -26]);
  const rightY = useTransform(scrollY, [350, 1600], [0, 24]);

  return (
    <section className="scene-interlude container">
      <motion.div
        className="scene-copy"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Visual Narrative</p>
        <h3>From mood to material, every frame is deliberate.</h3>
      </motion.div>

      <div className="scene-media">
        <motion.figure
          className="scene-image scene-image-main"
          style={{ y: leftY }}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            loading="lazy"
            src="https://images.pexels.com/photos/6585753/pexels-photo-6585753.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Luxury interior detail"
          />
        </motion.figure>

        <motion.figure
          className="scene-image scene-image-accent"
          style={{ y: rightY }}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            loading="lazy"
            src="https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&w=1100"
            alt="Curated interior corner with natural textures"
          />
        </motion.figure>
      </div>
    </section>
  );
}

export default SceneInterlude;
