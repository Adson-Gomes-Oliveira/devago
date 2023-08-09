import {  useAppDispatch, useAppSelector } from '../../app/hooks';
import { closeProject } from '../../features/projectModal';
import CategoriesThumb from './CategoriesThumb';

import './style.project.modal.css';

export default function ProjectModal() {
  const data = useAppSelector((state) => state.projectModal);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeProject());
  };


  return (
    <div className="project-modal">
      <button
        type="button"
        className="modal-close-button" 
        onClick={handleCloseModal}
      >
        <span className="material-icons-outlined">close</span>
      </button>
      <div className="modal-header">
        <img src={data.thumbnail} alt={`Capa do projeto ${data.title}`} />
        <div className="modal-stacks">
          <CategoriesThumb categories={data.categories} />
        </div>
      </div>
      <div className="modal-body">
        <div className="modal-body-bio">
          <h1>{data.title}</h1>
          {data.description.includes('Web App') && (
            <span><b>* Apenas para dispositivos móveis</b></span>
          )}
          <p>{data.description}</p>
        </div>
        <div className="modal-body-button">
          <a href={data.linkToRepo} target="_blank" rel="noreferrer">
            <button>
              <span>Repositório do Projeto</span>
            </button>
          </a>
          {data.linkToProd !== 'no_link' && (
            <a href={data.linkToProd} target="_blank" rel="noreferrer">
              <button>
                <span>Site do Projeto</span>
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
