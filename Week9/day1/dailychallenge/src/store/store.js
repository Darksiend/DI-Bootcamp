import { configureStore } from "@reduxjs/toolkit";
import filmReducer from "./filmSlice.js";
import selectedFilmReducer from "./selectedFilmSlice.js";
export default configureStore({
  reducer: { film: filmReducer, selectedFilm: selectedFilmReducer },
});
