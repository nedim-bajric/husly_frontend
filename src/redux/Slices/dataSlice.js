import { createSlice } from "@reduxjs/toolkit";
const initialState = { data: [], cat: {}, agent: [] };
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
    pickAgent: (state, action) => {
      state.agent = action.payload;
    },
  },
});

export const { pickData, pickCat, pickAgent } = dataSlice.actions;

export default dataSlice.reducer;
