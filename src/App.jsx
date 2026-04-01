import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

const pageTransition = {
  initial: { opacity: 0, filter: 'blur(8px)' },
  animate: { opacity: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, filter: 'blur(8px)' }
};

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const node = document.getElementById(id);
    if (!node) return;
    requestAnimationFrame(() => {
      node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location]);

  return (
    <SmoothScrollProvider>
      <div className="site-shell">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  variants={pageTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                >
                  <HomePage />
                </motion.div>
              }
            />
            <Route
              path="/projects/:id"
              element={
                <motion.div
                  variants={pageTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                >
                  <ProjectPage />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
