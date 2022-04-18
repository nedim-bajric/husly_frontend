import { createSlice } from "@reduxjs/toolkit";
const initialState = { hidden: true };
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    handleMenu: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const { handleMenu } = menuSlice.actions;

export default menuSlice.reducer;
