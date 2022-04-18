import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./Slices/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
