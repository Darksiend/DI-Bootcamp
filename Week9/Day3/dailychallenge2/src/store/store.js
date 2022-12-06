import { configureStore } from "@reduxjs/toolkit";
import roboReducer from "./roboSlice";

export default configureStore({ reducer: { robo: roboReducer } });
