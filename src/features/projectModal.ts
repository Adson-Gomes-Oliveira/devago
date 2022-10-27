import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGetProject } from '../interface/Admin.interfaces';

const INITIAL_STATE: IGetProject = {
  id: '',
  title: '',
  description: '',
  linkToRepo: '',
  linkToProd: '',
  thumbnail: '',
  categories: [],
  showMode: false,
  status: false
};

const projectModalSlice = createSlice({
  name: 'projectModalState',
  initialState: INITIAL_STATE,
  reducers: {
    setProjectToShow(state, payload: PayloadAction<IGetProject>) {
      state.id = payload.payload.id;
      state.title = payload.payload.title;
      state.description = payload.payload.description;
      state.linkToRepo = payload.payload.linkToRepo;
      state.linkToProd = payload.payload.linkToProd;
      state.thumbnail = payload.payload.thumbnail;
      state.categories = payload.payload.categories;
      state.showMode = true;
    },
    closeProject(state) {
      state.showMode = false;
    },
  },
});

export const { setProjectToShow, closeProject } = projectModalSlice.actions;
export default projectModalSlice.reducer;
