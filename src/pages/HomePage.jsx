import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';
import MotionSection from '../components/MotionSection';
import SceneInterlude from '../components/SceneInterlude';
import ProjectGrid from '../components/ProjectGrid';
import ContactSection from '../components/ContactSection';
import FinalCTA from '../components/FinalCTA';

function HomePage() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1200], [0, -120]);
  const textY = useTransform(scrollY, [0, 1200], [0, 90]);

  return (
    <>
      <Hero />

      <motion.div className="parallax-bg" style={{ y: bgY }} />

      <MotionSection className="container section-space studio-intro" amount={0.35}>
        <div className="studio-intro-layout">
          <div>
            <motion.p className="eyebrow" style={{ y: textY }}>
              The Studio
            </motion.p>
            <h2>
              We choreograph architecture, interiors, and atmosphere into quietly memorable experiences.
            </h2>
          </div>

          <motion.div
            className="studio-gallery"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <figure className="studio-image studio-image-lg">
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/6489127/pexels-photo-6489127.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Elegant living room with warm lighting and curated furniture"
              />
            </figure>
            <figure className="studio-image studio-image-sm">
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Premium interior corner with marble, wood, and sculptural decor"
              />
            </figure>
          </motion.div>
        </div>
      </MotionSection>

      <SceneInterlude />
      <ProjectGrid />
      <ContactSection />
      <FinalCTA />
    </>
  );
}

export default HomePage;
