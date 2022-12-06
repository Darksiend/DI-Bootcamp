import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios/axios";
export const fetchRobots = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get();
  return data;
});
export const roboSlice = createSlice({
  name: "robo",
  initialState: {
    robots: [],
    status: "loading",
    filteredRobots: [],
  },
  reducers: {
    filterRobots(state, action) {
      console.log(action);
      state.filteredRobots = state.robots.filter((robot) =>
        robot.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      console.log();
    },
  },
  extraReducers: {
    [fetchRobots.pending]: (state) => {
      state.status = "loading";
    },
    [fetchRobots.fulfilled]: (state, action) => {
      state.robots = action.payload;
      state.filteredRobots = action.payload;
      state.status = "loaded";
    },
    [fetchRobots.rejected]: (state, action) => {
      state.robots = [];
      state.status = "error";
    },
  },
});
export const { filterRobots } = roboSlice.actions;
export default roboSlice.reducer;
