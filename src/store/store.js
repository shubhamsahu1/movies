import {combineReducers, configureStore} from "@reduxjs/toolkit";
import search from "./slice/searchSlice";
import loader from "./slice/loaderSclice";
const reducer = combineReducers({
  search,
  loader,
});
export const store = configureStore({
  reducer: reducer,
});
