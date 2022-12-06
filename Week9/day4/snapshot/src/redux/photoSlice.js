import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios/axios";

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  const { data } = await axios.get("?query=nature&per_page=10");
  return data.photos;
});
export const photoSlice = createSlice({
  name: "robo",
  initialState: {
    photos: [],
    status: "loading",
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
    [fetchPhotos.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.status = "loaded";
    },
    [fetchPhotos.rejected]: (state, action) => {
      state.photos = [];
      state.status = "error";
    },
  },
});
export const { filterRobots } = photoSlice.actions;
export default photoSlice.reducer;
