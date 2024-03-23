import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PopUpState {
  popUpModalState: boolean;
}

const initialState: PopUpState = {
  popUpModalState: true,
};

export const PopUpModalReducer = createSlice({
  name: "popUpModal",
  initialState,
  reducers: {
    setPopUpModalState: (state, action: PayloadAction<boolean>) => {
      state.popUpModalState = action.payload;
    },
  },
});

export const { setPopUpModalState } = PopUpModalReducer.actions;
export const popUpModalReducer = PopUpModalReducer.reducer;