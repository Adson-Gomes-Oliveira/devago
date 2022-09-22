interface IProject<T> {
  id?: T;
  title: string;
  description: string;
  linkToRepo: string;
  linkToProd: string;
  thumbnail: string;
  status?: boolean;
  categoryIds?: number[];
}

export default IProject;
