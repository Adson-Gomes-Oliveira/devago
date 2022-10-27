import { useAppSelector } from '../../app/hooks';
import CategoriesThumb from './CategoriesThumb';

import './style.project.modal.css';

export default function ProjectModal() {
  const data = useAppSelector((state) => state.projectModal);

  return (
    <div className="project-modal">
      <div className="modal-header">
        <img src={data.thumbnail} alt={`Capa do projeto ${data.title}`} />
        <div className="modal-stacks">
          <CategoriesThumb categories={data.categories} />
        </div>
      </div>
      <div className="modal-body">
        <div className="modal-body-bio">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
        <div className="modal-body-button">
          <a href={data.linkToRepo} target="_blank" rel="noreferrer">
            <button>
              <span>Repositório do Projeto</span>
            </button>
          </a>
          <a href={data.linkToRepo} target="_blank" rel="noreferrer">
            <button>
              <span>Site do Projeto</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
