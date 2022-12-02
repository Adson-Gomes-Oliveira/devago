import { useNavigate } from 'react-router-dom';

import GithubLogo from '../../assets/images/github-logo.svg';
import WhatsappLogo from '../../assets/images/whatsapp-logo.svg';
import LinkedinLogo from '../../assets/images/linkedin-logo.svg';
import MediumLogo from '../../assets/images/medium-logo.svg';

import LogoDevago from '../../assets/images/devago-light-logo.svg';

import './style.header.css';

export default function Header(): JSX.Element {
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <img src={LogoDevago} alt="Logomarca Devago" />
      <nav className="header-nav">
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/projects')}>Projetos</li>
          <li onClick={() => navigate('/contact')}>Contato</li>
        </ul>
        <div className="header-icons">
          <a
            href="https://wa.me/5577988342289"
            rel="noreferrer"
            target="_blank"
          >
            <img src={WhatsappLogo} alt="Icone para Whatsapp" />
          </a>

          <a
            href="https://www.linkedin.com/in/adson-gomes-oliveira/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={LinkedinLogo} alt="Icone para LinkedIn" />
          </a>

          <a
            href="https://github.com/Adson-Gomes-Oliveira/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={GithubLogo} alt="Icone para Github" />
          </a>

          <a
            href="https://medium.com/@adson_4490"
            rel="noreferrer"
            target="_blank"
          >
            <img src={MediumLogo} alt="Icone para Medium" />
          </a>
        </div>
      </nav>
    </header>
  );
}
