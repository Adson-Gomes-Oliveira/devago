import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProject } from '../interface/Admin.interfaces';

const INITIAL_STATE: IProject = {
  title: '',
  description: '',
  linkToRepo: '',
  linkToProd: '',
  thumbnail: '',
  categoryIds: [],
  showMode: false,
};

const projectModalSlice = createSlice({
  name: 'projectModalState',
  initialState: INITIAL_STATE,
  reducers: {
    setProjectToShow(state, payload: PayloadAction<IProject>) {
      state = { ...payload.payload };
      state.showMode = true;
    },
    closeProject(state) {
      state.showMode = false;
    },
  },
});

export const { setProjectToShow, closeProject } = projectModalSlice.actions;
export default projectModalSlice.reducer;
