import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SettingState {
  settingState: Object;
}

const initialState: SettingState = {
  settingState: [],
};

export const SettingReducer = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSettingState: (state, action: PayloadAction<Object>) => {
      state.settingState = action.payload?.data ;
    },
  },
});

export const { setSettingState } = SettingReducer.actions;
export const settingReducer = SettingReducer.reducer;