interface IProject<T> {
  id?: T;
  title: string;
  description: string;
  thumbnail: string;
  categoryIds?: number[];
}

export default IProject;