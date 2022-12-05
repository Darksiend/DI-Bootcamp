import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const incrementAsync = createAsyncThunk(
  "posts/fetchPosts",
  async () => {}
);
export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [incrementAsync.fulfilled]: (state, action) => {
      state.value += 1;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
