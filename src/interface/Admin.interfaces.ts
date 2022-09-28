export interface IAdminInputState {
  title: string;
  content: string;
  linkToRepo: string;
  linkToProd: string;
  thumbnail: string;
  category: ICategory;
  categories: ICategory[];
}

export interface IProject {
  title: string;
  description: string;
  linkToRepo: string;
  linkToProd: string;
  thumbnail: string;
  categoryIds: number[];
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IAdminGeneralState {
  isButtonOff: boolean;
}

