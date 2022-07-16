import {configureStore} from "@reduxjs/toolkit";
import search from "./slice/searchSlice";

export const store = configureStore({
  reducer: {
    search,
  },
});
