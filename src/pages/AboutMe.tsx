import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import DevPicture from '../assets/images/dev-picture.png';
import { useGetCategoriesQuery } from '../features/admin.api';

import './style.aboutme.css';

export default function AboutMe(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    useGetCategoriesQuery();
  }, []);

  function redirect() {
    navigate('/projects');
  }

  return (
    <motion.section
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: '-100%', transition: { duration: 0.3 } }}
    >
      <div className="bio">
        <h1>Adson Gomes Oliveira</h1>
        <h2>Software Developer Full-Stack Jr.</h2>
        <p>Atuo no desenvolvimento de aplicações Front-End e Back-End,
          prezo pela qualidade,respeito e produtividade.</p>
        <p>No momento estou em busca da minha primeira oportunidade
          em programação, aqui você terá acesso aos meus
          projetos, faça download do curriculo clicando no botão abaixo.</p>
        <div className="bio-buttons">
          <a 
            href='Curriculo-Fullstack_[ Adson Gomes Oliveira ].pdf'
            download='Curriculo-Fullstack_[ Adson Gomes Oliveira ].pdf'
          >
            <button type="button">
              Download Curriculum
              <span className="material-icons-outlined">download</span>
            </button>
          </a>
          <button type="button" onClick={redirect}>
            Projetos
            <span className="material-icons-outlined">navigate_next</span>
          </button>
        </div>
      </div>
      <img
        className="dev-picture"
        src={DevPicture}
        alt="Foto de Adson Gomes Oliveira. Desenvolvedor da página."
      />
    </motion.section>
  );
}
