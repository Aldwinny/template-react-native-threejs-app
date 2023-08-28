import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foo: "bar",
};

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    toggleSample: (state) => {
      state.foo = "bar";
    },
  },
});

export const { toggleSample } = sampleSlice.actions;

export default sampleSlice.reducer;
