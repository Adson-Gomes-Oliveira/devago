import { useNavigate } from 'react-router-dom';

import DevPicture from '../../assets/images/dev-picture.png';

import './style.aboutme.css';

export default function AboutMe():JSX.Element {
  const navigate = useNavigate();

  function redirect() {
    navigate('/projects');
  }

  return (
    <>
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
            href='resume.pdf'
            download='curriculo-adson-dev.pdf'
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
    </>
  );
}
