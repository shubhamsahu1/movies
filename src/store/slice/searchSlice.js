import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getMovies} from "../../api/movies";

const initialState = {
  value: "",
  result: {},
  page: 1,
};
export const fetchUserById = createAsyncThunk(
  "search/fetchByName",
  async (_, thunkAPI) => {
    let state = thunkAPI.getState();
    let {page, value} = state.search;

    const response = await getMovies({page, searchinput: value});

    return response.data;
  }
);

const counterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setInputStoreVal(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array

      state.result = action.payload;
    });
  },
});
export const selectInputValue = (state) => state.search.value;
export const {setInputStoreVal} = counterSlice.actions;
export default counterSlice.reducer;
