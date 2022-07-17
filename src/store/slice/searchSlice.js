import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getMovies} from "../../api/movies";

const initialState = {
  value: "",
  result: {},
  page: 1,
};
export const fetchMovies = createAsyncThunk(
  "search/fetchByName",
  async (_, thunkAPI) => {
    let state = thunkAPI.getState();
    let {page, value} = state.search;

    const response = await getMovies({page, searchinput: value});

    return response.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setInputStoreVal(state, action) {
      state.value = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      // Add user to the state array

      state.result = action.payload;
    });
  },
});
export const selectInputValue = (state) => state.search.value;
export const searchResult = (state) => state.search.result;
export const searchPage = (state) => state.search.page;

export const {setInputStoreVal, setPage} = searchSlice.actions;
export default searchSlice.reducer;
