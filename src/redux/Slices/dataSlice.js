import { createSlice } from "@reduxjs/toolkit";
const initialState = { data: [], cat: {} };
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    pickData: (state, action) => {
      state.data = action.payload;
    },
    pickCat: (state, action) => {
      state.cat = action.payload;
    },
  },
});

export const { pickData, pickCat } = dataSlice.actions;

export default dataSlice.reducer;
