import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id) || projects[0];

  return (
    <main className="project-page section-space">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link className="grow-link back-link" to="/">
            Back to Home
          </Link>
          <p className="eyebrow">{project.location}</p>
          <h1>{project.title}</h1>
          <p className="project-lede">{project.description}</p>
        </motion.div>

        <motion.div
          className="project-hero-image"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <img loading="eager" src={project.image} alt={project.title} />
        </motion.div>
      </div>
    </main>
  );
}

export default ProjectPage;
