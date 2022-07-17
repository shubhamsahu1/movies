import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoader(state, action) {
      state.value = state.value + 1;
    },
    removeLoader(state, action) {
      state.value = state.value - 1;
    },
  },
});
export const loaderValue = (state) => state.loader.value;

export const {setLoader, removeLoader} = loaderSlice.actions;
export default loaderSlice.reducer;
