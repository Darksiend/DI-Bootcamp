import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const fetchRobots = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get();
  return data;
});

export const robotSlice = createSlice({
  name: "robots",
  initialState: { robots: [], status: "loading" },
  reducers: {},
  extraReducers: {
    [fetchRobots.pending]: (state) => {
      state.status = "loading";
    },
    [fetchRobots.fulfilled]: (state, action) => {
      state.robots = action.payload;
      state.status = "loaded";
    },
    [fetchRobots.rejected]: (state, action) => {
      state.robots = [];
      state.status = "error";
    },
  },
});

export default robotSlice.reducer;
