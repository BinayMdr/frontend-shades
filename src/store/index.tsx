import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { splashReducer } from "./reducers/SplashReducer";
import { settingReducer } from "./reducers/SettingReducer";
import { popUpModalReducer } from "./reducers/PopUpModalReducer";

export const store = configureStore({
  reducer: { splash: splashReducer, 
            setting: settingReducer ,
            popUp: popUpModalReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;