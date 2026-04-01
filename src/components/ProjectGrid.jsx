import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1600';

function ProjectCard({ project }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.article variants={itemVariants}>
      <Link className="project-card" to={`/projects/${project.id}`}>
        <div className="project-image-wrap">
          <motion.img
            loading="lazy"
            src={project.image}
            alt={project.title}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 1.04 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            onLoad={() => setLoaded(true)}
            onError={(event) => {
              if (event.currentTarget.dataset.fallbackApplied) return;
              event.currentTarget.dataset.fallbackApplied = 'true';
              event.currentTarget.src = FALLBACK_IMAGE;
            }}
          />
          <div className="project-overlay" />
          <motion.div className="project-copy" whileHover={{ y: 0 }}>
            <p>{project.location}</p>
            <h3>{project.title}</h3>
          </motion.div>
        </div>
      </Link>
    </motion.article>
  );
}

function ProjectGrid() {
  const { scrollY } = useScroll();
  const sectionY = useTransform(scrollY, [450, 1700], [0, -38]);
  const copyY = useTransform(scrollY, [450, 1700], [0, 22]);

  return (
    <motion.section id="projects" className="projects container section-space" style={{ y: sectionY }}>
      <motion.div className="section-head" style={{ y: copyY }}>
        <p className="eyebrow">Selected Work</p>
        <h2>Scenes of Material, Light, and Precision</h2>
      </motion.div>

      <motion.div
        className="project-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ProjectGrid;
