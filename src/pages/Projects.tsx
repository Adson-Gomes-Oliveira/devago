import { useState } from 'react';
import { useGetProjectsQuery } from '../features/admin.api';
import { motion } from 'framer-motion';

import Frontend from '../components/projects/Frontend';
import { IGetProject } from '../interface/Admin.interfaces';

import './style.projects.css';

export default function Projects() {
  const [ stack, setStack ] = useState('NO_STACK');
  const { data, isLoading } = useGetProjectsQuery();
  

  function changeStack(stack: string): void {
    setStack(stack);
  }

  return (
    <motion.section
      className={`projects ${stack === 'NO_STACK' && 'h-screen'}`}
    >
      <div className="toggle-stack">
        <button
          type="button"
          onClick={() => changeStack('FRONTEND')}
        >
          <span>FRONT-END</span>
        </button>
        <button
          type="button"
          onClick={() => changeStack('BACKEND')}
        >
          <span>BACK-END</span>
        </button>
      </div>
      {stack === 'FRONTEND' && <Frontend data={data as IGetProject[]}/>}
    </motion.section>
  );
}
