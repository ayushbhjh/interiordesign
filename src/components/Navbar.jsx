import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`nav-shell ${scrolled ? 'is-solid' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav-wrap">
        <Link className="brand" to="/">
          Aurelia Atelier
        </Link>
        <div className="nav-links">
          <NavLink className="grow-link" to="/">
            Home
          </NavLink>
          <NavLink className="grow-link" to="/projects/private-residence">
            Showcase
          </NavLink>
          <Link className="grow-link" to="/#contact">
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
