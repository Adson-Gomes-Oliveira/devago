import { v4 as uuidv4 } from 'uuid';

import { IGetProject } from '../../interface/Admin.interfaces';
import { setProjectToShow } from '../../features/projectModal';

import './style.project.cards.css';
import { useAppDispatch } from '../../app/hooks';

interface IDataProject {
  data: IGetProject[];
}

export default function ProjectCards({ data }: IDataProject) {
  const dispatch = useAppDispatch();
  const handleClickProject = (project: IGetProject): void => {
    dispatch(setProjectToShow(project));
  };

  return (
    <section className="projects-card-section">
      {data && data.map((project) => {
        const { title, thumbnail, categories } = project;
        return (
          <div
            key={uuidv4()}
            className="project-card"
            role="button"
            onClick={() => handleClickProject(project)}
          >
            <img className="card-thumb" src={thumbnail} alt={title} />
            <div className="card-stacks">
              <span>Tecnologias:</span>
              <div className="stacks">
                {categories.map((cat) => <span key={uuidv4()}>
                  {cat.name}
                </span>)}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
