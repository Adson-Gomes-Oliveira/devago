import LogoDevago from '../../assets/images/devago-light-logo.svg';

import './style.header.css';

export default function Header(): JSX.Element {
  return (
    <header className="main-header">
      <img src={LogoDevago} alt="Logomarca Devago" />
    </header>
  );
}
