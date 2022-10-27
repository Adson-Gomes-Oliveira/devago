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
    </div>
  );
}
