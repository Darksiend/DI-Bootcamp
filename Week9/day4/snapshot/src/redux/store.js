import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./photoSlice";

export default configureStore({ reducer: { photos: counterReducer } });
