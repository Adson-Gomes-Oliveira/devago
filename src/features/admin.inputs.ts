import { ICategory } from './../interface/Admin.interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdminInputState } from '../interface/Admin.interfaces';
import { IMPOSSIBLE_ID } from '../components/admin/Console';

const INITIAL_STATE: IAdminInputState = {
  title: '',
  content: '',
  linkToRepo: '',
  linkToProd: '',
  thumbnail: '',
  category: {
    id: 1,
    name: 'FRONT-END'
  },
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
    setCategory(state, payload: PayloadAction<ICategory>) {
      state.category = payload.payload;
    },
    setCategoriesToPost(state, payload: PayloadAction<ICategory>) {
      state.categories = [ ...state.categories, payload.payload ];
    },
    removeCategoryFromPost(state, payload: PayloadAction<number>) {
      if (payload.payload === IMPOSSIBLE_ID) {
        state.categories = state.categories
          .filter((cat) => cat.id === payload.payload);

        return;
      }

      state.categories = state.categories
        .filter((cat) => cat.id !== payload.payload);
    }
  }
});

export const { setInputs, setCategory,
  setCategoriesToPost, removeCategoryFromPost } = adminInputSlice.actions;

export default adminInputSlice.reducer;
