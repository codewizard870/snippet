import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface globalStates {
  bWaitList: boolean;
  bMobileMenu: boolean;
}

const initialState: globalStates = {
  bWaitList: false,
  bMobileMenu: false
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleWaitList: (state, action: PayloadAction<boolean>) => {
      state.bWaitList = action.payload;
    },
    toggleMobileMenu: (state, action: PayloadAction<boolean>) => {
      state.bMobileMenu = action.payload;
    }, 
  },
});

export const {
  toggleWaitList,
  toggleMobileMenu
} = globalSlice.actions;
export default globalSlice.reducer;
