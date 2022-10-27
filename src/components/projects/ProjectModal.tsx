import { useAppSelector } from '../../app/hooks';

export default function ProjectModal() {
  const data = useAppSelector((state) => state.projectModal);

  return (
    <div className="project-modal">
      <h1>{data.title}</h1>
    </div>
  );
}
