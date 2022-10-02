import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loadingToggle',
  initialState: INITIAL_STATE,
  reducers: {
    setLoading(state, payload: PayloadAction<boolean>) {
      state.isLoading = payload.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
