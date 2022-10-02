import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import './style.contact.css';

const TRYBE_CERT_ONE = 'https://www.credential.net/7dd5fbdb-';
const TRYBE_CERT_TWO = '488e-451c-b06c-6d2f0bdd0e39#gs.xw260o';

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
          <span>adson@devago.com.br</span>
        </div>
        <div className="tel" >
          <span className="material-icons-outlined icon">phone</span>
          <span>{'+55 (77) 98834-2289'}</span>
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
        <span>{'Estudando Desenvolvimento Web na Trybe [Back-End]'}</span>
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
            <span>Certificado de Desenvolvimento Front-End</span>
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
