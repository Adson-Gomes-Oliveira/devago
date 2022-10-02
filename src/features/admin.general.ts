import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ConsoleModeType,
  IAdminGeneralState
} from '../interface/Admin.interfaces';

const INITIAL_STATE: IAdminGeneralState = {
  isButtonOff: true,
  consoleMode: 'CREATE'
};

const adminGeneralSlice = createSlice({
  name: 'generalState',
  initialState: INITIAL_STATE,
  reducers: {
    setButton(state, payload: PayloadAction<boolean>) {
      state.isButtonOff = payload.payload;
    },
    setConsoleMode(state, payload: PayloadAction<ConsoleModeType>) {
      state.consoleMode = payload.payload;
    }
  }
});

export const { setButton, setConsoleMode } = adminGeneralSlice.actions;
export default adminGeneralSlice.reducer;
