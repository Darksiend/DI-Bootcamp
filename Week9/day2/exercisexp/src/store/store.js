import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./transactionsSlice";
export default configureStore({
  reducer: { transactions: transactionReducer },
});
