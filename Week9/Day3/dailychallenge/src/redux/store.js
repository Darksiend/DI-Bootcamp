import { configureStore } from "@reduxjs/toolkit";
import robotSlice from "./slices/robotsSlice";

export default configureStore({ reducer: { robots: robotSlice } });
