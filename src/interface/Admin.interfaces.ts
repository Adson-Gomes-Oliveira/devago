export interface IAdminInputState {
  title: string;
  content: string;
  linkToRepo: string;
  linkToProd: string;
  thumbnail: string;
  category: number;
  categories: number[];
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IAdminGeneralState {
  isButtonOff: boolean;
}

