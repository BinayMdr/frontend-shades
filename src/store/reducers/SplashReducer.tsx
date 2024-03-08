import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PopUpState {
  splashState: boolean;
}

const initialState: PopUpState = {
  splashState: true,
};

export const SplashReducer = createSlice({
  name: "splash",
  initialState,
  reducers: {
    setSplashState: (state, action: PayloadAction<boolean>) => {
      state.splashState = action.payload;
    },
  },
});

export const { setSplashState } = SplashReducer.actions;
export const splashReducer = SplashReducer.reducer;