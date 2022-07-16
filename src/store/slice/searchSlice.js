import {createSlice} from "@reduxjs/toolkit";

const initialState = {value: ""};

const counterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setInputStoreVal(state, action) {
      state.value = action.payload;
    },
  },
});
export const selectInputValue = (state) => state.search.value;
export const {setInputStoreVal} = counterSlice.actions;
export default counterSlice.reducer;
