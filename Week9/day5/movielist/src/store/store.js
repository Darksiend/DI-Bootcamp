import { configureStore } from "@reduxjs/toolkit";
import { filmsReducer } from "./slices/filmsSlice";

const store = configureStore({ reducer: { films: filmsReducer } });

export default store;
