import { useNavigate } from 'react-router-dom';

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
      </nav>
    </header>
  );
}
