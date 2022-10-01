import ParticlesBackground from '../helpers/particles/ParticlesBG';
import Header from '../components/articles/Header';

import DevPicture from '../assets/images/dev-picture.png';
import GithubLogo from '../assets/images/github-logo.svg';
import WhatsappLogo from '../assets/images/whatsapp-logo.svg';
import LinkedinLogo from '../assets/images/linkedin-logo.svg';
import MediumLogo from '../assets/images/medium-logo.svg';

import './style.aboutme.css';

export default function AboutMe(): JSX.Element {
  return (
    <>
      <ParticlesBackground />
      <section className="about-me">
        <Header />
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
            <button type="button">
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
        <div className="footer-about">
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
      </section>
    </>
  );
}
