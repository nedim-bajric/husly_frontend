import { createSlice } from "@reduxjs/toolkit";
const initialState = { data: [] };
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    pickData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { pickData } = dataSlice.actions;

export default dataSlice.reducer;
