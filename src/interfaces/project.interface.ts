interface IProject<T> {
  id?: T;
  title: string;
  description: string;
  thumbnail: string;
}

export default IProject;