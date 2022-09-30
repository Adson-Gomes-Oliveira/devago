import LogoDevago from '../../assets/images/devago-light-logo.svg';
import './style.header.css';

export default function Header(): JSX.Element {
  return (
    <header className="articles-header">
      <img src={LogoDevago} alt="Logomarca Devago" />
      <div className="header-menu">
        <ul>
          <button type="button"><span>ARTIGOS</span></button>
          <button type="button"><span>PROJETOS</span></button>
        </ul>
      </div>
    </header>
  );
}
