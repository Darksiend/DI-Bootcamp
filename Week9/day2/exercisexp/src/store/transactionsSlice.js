import { createSlice, current } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: { list: [], index: 0 },
  reducers: {
    addTransaction(state, action) {
      state = { list: state.list.push(action), index: state.index++ };
    },
    deleteTransaction(state, action) {
      // console.log(action.payload.payload);
      // state.list.forEach((item) => {
      //   console.log(current(item.payload));
      //   if (item.payload.fsc == action.payload.payload.fsc) {
      //     console.log("found");
      //   }
      // });
      let { index } = action.payload;
      console.log(index);
      state.list.splice(index, 1);
    },
  },
});
export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
