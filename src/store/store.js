import {configureStore} from "@reduxjs/toolkit";
import search from "./slice/searchSlice";
import loader from "./slice/loaderSclice";
//const reducer = combineReducers();
export const store = configureStore({
  reducer: {
    search,
    loader,
  },
});
