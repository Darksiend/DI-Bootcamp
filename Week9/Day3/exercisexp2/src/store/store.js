import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const myMiddleware = (store) => (next) => (action) => {
  console.log("Catched in middelware:", store.getState().counter);
  next(action);
};
export default configureStore({
  reducer: { counter: counterReducer },
  middleware: [myMiddleware],
});
