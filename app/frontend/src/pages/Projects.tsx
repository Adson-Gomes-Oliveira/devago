import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import ProjectCards from '../components/projects/ProjectCards';
import { ICategory, IGetProject } from '../interface/Admin.interfaces';
import { useAppSelector } from '../app/hooks';

import projects from '../database/projects.json';
import categories from '../database/categories.json';

import './style.projects.css';
import ProjectModal from '../components/projects/ProjectModal';

export default function Projects() {
  const [ stacks, setStacks ] = useState<ICategory[]>([]);
  const [ skills, setSkills ] = useState<ICategory[]>([]);
  const [ alert, setAlert ] = useState<boolean>(true);
  const showModal = useAppSelector((state) => state.projectModal.showMode);
  const navigate = useNavigate();

  useEffect(() => {
    const stacksRender = categories
    && categories.filter((cat) => cat.type === 'label');

    const skillsRender = categories
    && categories.filter((cat) => cat.type === 'tech');

    if (categories) {
      setStacks(stacksRender as ICategory[]);
      setSkills(skillsRender as ICategory[]);
    }
  }, [ categories ]);

  return (
    <motion.section
      className="projects"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: '-100%', transition: { duration: 0.3 } }}
    >
      <div className="header-projects">
        <h1>Projetos Realizados</h1>
        <p>Abaixo se encontram meus projetos de maior orgulho.
          Ao clicar a página irá te redirecionar para o projeto 
          no GitHub e lá você também encontrará varios outros projetos.</p>
      </div>
      <div className="navigate-projects">
        <button type="button" onClick={() => navigate('/')}>
          HOME
          <span className="material-icons-outlined">home</span>
        </button>
        <button type="button" onClick={() => navigate('/contact')}>
          CONTATO
          <span className="material-icons-outlined">navigate_next</span>
        </button>
      </div>
      <div className={`update-alert ${!alert && 'hidden'}`}>
        <span className="material-icons-outlined">tips_and_updates</span>
        <p>As próximas atualizações trarão filtros para os projetos.</p>
        <button type="button" onClick={() => setAlert(false)}>
          <span className="material-icons-outlined">close</span>
        </button>
      </div>
      <div className="filter-projects hidden">
        <span className="material-icons-outlined">filter_alt</span>
        <select name="" id="stacks">
          {stacks.map((cat) => {
            return (
              <option key={uuidv4()} value={cat.name}>{cat.name}</option>
            );
          })}
        </select>
        <select name="" id="skills">
          {skills.map((cat) => {
            return (
              <option key={uuidv4()} value={cat.name}>{cat.name}</option>
            );
          })}
        </select>
        <span className="material-icons-outlined">search</span>
      </div>
      {showModal && <ProjectModal />}
      <ProjectCards data={projects as IGetProject[]} />
    </motion.section>
  );
}
