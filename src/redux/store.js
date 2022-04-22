import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Slices/dataSlice";
import menuReducer from "./Slices/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    data: dataReducer,
  },
});
