import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import './style.contact.css';

const TRYBE_CERT_ONE = 'https://www.credential.net/0463eaa9-';
const TRYBE_CERT_TWO = 'bfc0-453a-9e04-f5a0d50ec385#gs.42vlfz';

const ALURA_CERT_ONE = '';
const ALURA_CERT_TWO = '';

export default function Contact(): JSX.Element {
  const navigate = useNavigate();

  return (
    <motion.section
      className="contact"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: '-100%', transition: { duration: 0.3 } }}
    >
      <h1>Contato</h1>
      <button type="button" onClick={() => navigate('/')}>
          HOME
        <span className="material-icons-outlined">home</span>
      </button>
      <div className="items-contact">
        <div className="email">
          <span className="material-icons-outlined icon">email</span>
          <span>adsongoliveira2022@outlook.com</span>
        </div>
        <div className="tel" >
          <span className="material-icons-outlined icon">phone</span>
          <span>{'+55 (77) 99143-1531'}</span>
        </div>
        <div className="address" >
          <span className="material-icons-outlined icon">home</span>
          <span>Vitória da Conquista/BA - Brasil</span>
        </div>
        <div className="addressChange">
          <span className="material-icons-outlined icon">flight_takeoff</span>
          <span>Não disponível para mudança de cidade</span>
        </div>
      </div>
      <div className="info-contact">
        <h2>Informações Adicionais</h2>
        <div className='efset'>
          <span className="material-icons-outlined icon">language</span>
          <a
            href="https://www.efset.org/cert/w2TNg9"
            rel="noreferrer"
            target="_blank"
          >
            <span>EFSET English Certificate C2 Advanced</span>
          </a>
        </div>
        <div className='trybe'>
          <span className="material-icons-outlined icon">code</span>
          <a
            href={TRYBE_CERT_ONE+TRYBE_CERT_TWO}
            rel="noreferrer"
            target="_blank"
          >
            <span>Certificado de Desenvolvimento Fullstack</span>
          </a>
        </div>
        <div className='trybe'>
          <span className="material-icons-outlined icon">code</span>
          <a
            href={ALURA_CERT_ONE+ALURA_CERT_TWO}
            rel="noreferrer"
            target="_blank"
          >
            <span>Certificado Alura LevelUp</span>
          </a>
        </div>
      </div>
      <div className="footer-contact">
        <h3>Obrigado pela visita!</h3>
        <span>Ao final da página estão disponíveis
          links para minhas redes</span>
      </div>
    </motion.section>
  );
}
