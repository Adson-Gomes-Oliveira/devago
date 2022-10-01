import { v4 as uuidv4 } from 'uuid';
import { IGetProject } from '../../interface/Admin.interfaces';

interface IDataProject {
  data: IGetProject[];
}

export default function Frontend({ data }: IDataProject) {
  return (
    <section>
      {data.map((project) => {
        const { id, title, description, linkToRepo,
          linkToProd, thumbnail, status, categories } = project;

        return (
          <div key={uuidv4()} className="project-card">
            <span className="project-card-title">{title}</span>
            <div className="project-card-categories">{
              categories.map((cat) => {
                return (
                  <span key={uuidv4()}>{cat.name}</span>
                );
              })
            }</div>
            
          </div>
        );
      })}
    </section>
  );
}
