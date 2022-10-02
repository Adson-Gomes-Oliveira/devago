import GithubLogo from '../../assets/images/github-logo.svg';
import WhatsappLogo from '../../assets/images/whatsapp-logo.svg';
import LinkedinLogo from '../../assets/images/linkedin-logo.svg';
import MediumLogo from '../../assets/images/medium-logo.svg';

import './style.footer.css';

export default function Footer(): JSX.Element {
  return (
    <>
      <div className="footer-home">
        <span>Ⓒ Developed by Adson Gomes Oliveira</span>
        <div className="footer-icons">
          <a href="https://wa.me/5577988342289">
            <img src={WhatsappLogo} alt="Icone para Whatsapp" />
          </a>

          <a href="https://www.linkedin.com/in/adson-gomes-oliveira/">
            <img src={LinkedinLogo} alt="Icone para LinkedIn" />
          </a>

          <a href="https://github.com/Adson-Gomes-Oliveira/">
            <img src={GithubLogo} alt="Icone para Github" />
          </a>

          <a href="https://medium.com/@adson_4490">
            <img src={MediumLogo} alt="Icone para Medium" />
          </a>
        </div>
      </div>
    </>
  );
}
