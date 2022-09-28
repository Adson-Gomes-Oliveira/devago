export interface IAdminInputState {
  title: string;
  content: string;
  linkToRepo: string;
  linkToProd: string;
  thumbnail: string;
  category: ICategory;
  categories: ICategory[];
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IAdminGeneralState {
  isButtonOff: boolean;
}

