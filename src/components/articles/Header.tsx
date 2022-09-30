import LogoDevago from '../../assets/images/devago-light-logo.svg';
import './style.header.css';

export default function Header(): JSX.Element {
  return (
    <header className="articles-header">
      <img src={LogoDevago} alt="Logomarca Devago" />
      <div className="header-menu">
        <ul>
        </ul>
      </div>
    </header>
  );
}
