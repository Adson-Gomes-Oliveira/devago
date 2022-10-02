import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import ProjectCards from '../components/projects/ProjectCards';
import { ICategory, IGetProject } from '../interface/Admin.interfaces';
import {
  useGetCategoriesQuery,
  useGetProjectsQuery,
} from '../features/admin.api';

import './style.projects.css';

export default function Projects() {
  const { data: dataProjects, isLoading } = useGetProjectsQuery();
  const { data: dataCategories } = useGetCategoriesQuery();
  const [ stacks, setStacks ] = useState<ICategory[]>([]);
  const [ skills, setSkills ] = useState<ICategory[]>([]);

  useEffect(() => {
    const stacksRender = dataCategories
    && dataCategories.filter((cat) => cat.type === 'label');

    const skillsRender = dataCategories
    && dataCategories.filter((cat) => cat.type === 'tech');

    if (dataCategories) {
      setStacks(stacksRender as ICategory[]);
      setSkills(skillsRender as ICategory[]);
    }
  }, [ dataCategories ]);

  return (
    <motion.section className="projects">
      <div className="header-projects">
        <h1>Projetos Realizados</h1>
        <p>Abaixo se encontram meus projetos de maior orgulho.
          No meu GitHub você encontrará varios outros projetos.</p>
      </div>
      <div className="navigate-projects">
        <button type="button">
          HOME
          <span className="material-icons-outlined">home</span>
        </button>
        <button type="button">
          CONTATO
          <span className="material-icons-outlined">navigate_next</span>
        </button>
      </div>
      <div className="filter-projects">
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
      <ProjectCards data={dataProjects as IGetProject[]} />
    </motion.section>
  );
}
