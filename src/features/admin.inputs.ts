import { ICategory } from './../interface/Admin.interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdminInputState } from '../interface/Admin.interfaces';
import { IMPOSSIBLE_ID } from '../components/admin/Console';

const INITIAL_THUMB_SLICE_ONE = 'https://t4.ftcdn.net/jpg/04/00/24/31/360_F_40';
const INITIAL_THUMB_SLICE_TWO = '0243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg';

const INITIAL_STATE: IAdminInputState = {
  title: '',
  content: '',
  linkToRepo: '',
  linkToProd: '',
  thumbnail: INITIAL_THUMB_SLICE_ONE + INITIAL_THUMB_SLICE_TWO,
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
