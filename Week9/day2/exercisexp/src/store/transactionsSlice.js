import { createSlice } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: { list: [], index: 0 },
  reducers: {
    addTransaction(state, action) {
      state = { list: state.list.push(action), index: state.index++ };
    },
  },
});
export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
