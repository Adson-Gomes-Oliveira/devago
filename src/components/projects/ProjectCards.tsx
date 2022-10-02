import { v4 as uuidv4 } from 'uuid';
import { IGetProject } from '../../interface/Admin.interfaces';

import './style.project.cards.css';

interface IDataProject {
  data: IGetProject[];
}

export default function ProjectCards({ data }: IDataProject) {
  return (
    <section>
      {data && data.map((project) => {
        const { title, thumbnail, categories } = project;
        const techCategories = categories.filter((cat) => cat.type === 'tech');

        return (
          <div key={uuidv4()} className="project-card">
            <img src={thumbnail} alt={title} />
          </div>
        );
      })}
    </section>
  );
}
