import { motion } from 'framer-motion';

import './style.projects.css';

export default function Projects() {
  return (
    <motion.section className="projects">
      <div className="toggle-stack">
        <button type="button"><span>FRONT-END</span></button>
        <button type="button"><span>BACK-END</span></button>
      </div>
    </motion.section>
  );
}
