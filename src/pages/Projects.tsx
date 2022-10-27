import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import ProjectCards from '../components/projects/ProjectCards';
import { ICategory, IGetProject } from '../interface/Admin.interfaces';
import { setLoading } from '../features/loader';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  useGetCategoriesQuery,
  useGetProjectsQuery,
} from '../features/admin.api';

import './style.projects.css';
import ProjectModal from '../components/projects/ProjectModal';

export default function Projects() {
  const { data: dataProjects, isLoading } = useGetProjectsQuery();
  const { data: dataCategories } = useGetCategoriesQuery();
  const [ stacks, setStacks ] = useState<ICategory[]>([]);
  const [ skills, setSkills ] = useState<ICategory[]>([]);
  const [ alert, setAlert ] = useState<boolean>(true);
  const showModal = useAppSelector((state) => state.projectModal.showMode);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading) dispatch(setLoading(true));
    if (!isLoading) dispatch(setLoading(false));

  }, [ isLoading ]);

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
        <p>As próximas atualizações trarão filtros para os projetos
          e será possivel acessar detalhes dos projetos direto do site.</p>
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
      <ProjectCards data={dataProjects as IGetProject[]} />
    </motion.section>
  );
}
