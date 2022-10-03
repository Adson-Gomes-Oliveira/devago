import { v4 as uuidv4 } from 'uuid';
import { IGetProject } from '../../interface/Admin.interfaces';
import CategoriesThumb from './CategoriesThumb';

import './style.project.cards.css';

interface IDataProject {
  data: IGetProject[];
}

export default function ProjectCards({ data }: IDataProject) {
  return (
    <section className="projects-card-section">
      {data && data.map((project) => {
        const { title, thumbnail, categories,
          linkToProd, linkToRepo } = project;

        return (
          <div key={uuidv4()} className="project-card">
            <a
              href={linkToProd !== '' ? linkToProd : linkToRepo}
              rel="noreferrer"
              target="_blank">
              <img className="card-thumb" src={thumbnail} alt={title} />
            </a>
            <div className='card-stacks'>
              <span>Tecnologias:</span>
              <CategoriesThumb categories={categories} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
