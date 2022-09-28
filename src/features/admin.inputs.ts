import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdminInputState } from '../interface/Admin.interfaces';

const INITIAL_STATE: IAdminInputState = {
  title: '',
  content: '',
  linkToRepo: '',
  linkToProd: '',
  thumbnail: '',
  category: 0,
  categories: [],
};

const adminInputSlice = createSlice({
  name: 'controlAdmin',
  initialState: INITIAL_STATE,
  reducers: {
    setInputs(state, payload: PayloadAction<IAdminInputState>) {
      state.title = payload.payload.title;
      state.content = payload.payload.content;
      state.linkToRepo = payload.payload.linkToRepo;
      state.linkToProd = payload.payload.linkToProd;
      state.thumbnail = payload.payload.thumbnail;
    },
    setCategory(state, payload: PayloadAction<number>) {
      state.category = payload.payload;
    },
    setCategoriesToPost(state, payload: PayloadAction<number>) {
      state.categories = [ ...state.categories, payload.payload ];
    }
  }
});

export const { setInputs, setCategory,
  setCategoriesToPost } = adminInputSlice.actions;

export default adminInputSlice.reducer;
