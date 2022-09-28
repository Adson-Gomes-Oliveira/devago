import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdminGeneralState } from '../interface/Admin.interfaces';

const INITIAL_STATE: IAdminGeneralState = {
  isButtonOff: true,
};

const adminGeneralSlice = createSlice({
  name: 'generalState',
  initialState: INITIAL_STATE,
  reducers: {
    setButton(state, payload: PayloadAction<boolean>) {
      state.isButtonOff = payload.payload;
    }
  }
});

export const { setButton } = adminGeneralSlice.actions;
export default adminGeneralSlice.reducer;
