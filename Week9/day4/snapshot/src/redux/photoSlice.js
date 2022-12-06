import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "../axios/axios";

export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async (text) => {
    // console.log(text);
    if (text) {
      console.log(text);
    }
    const { data } = await axios.get("?query=nature&per_page=10");
    return data.photos;
  }
);

// const exampleThunkFunction = (dispatch, getState) => {
//   const stateBefore = getState()
//   console.log(`Counter before: ${stateBefore.counter}`)
//   dispatch(increment())
//   const stateAfter = getState()
//   console.log(`Counter after: ${stateAfter.counter}`)
// }

export const fetchPhotoByText = (text) => async (dispatch) => {
  const { data } = await axios.get(`?query=${text}&per_page=10`);
  console.log(data);
  dispatch(photosLoaded(data.photos));
};

export const photoSlice = createSlice({
  name: "robo",
  initialState: {
    photos: [],
    status: "loading",
    searchText: "Apple",
  },
  reducers: {
    filterRobots(state, action) {
      console.log(action);
      state.filteredRobots = state.robots.filter((robot) =>
        robot.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      console.log();
    },

    getSearchText(state, action) {},

    setPhotosFromRequest(state, action) {},

    photosLoaded(state, action) {
      state.status = "loaded";
      state.photos = action.payload;
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
export const { filterRobots, getSearchText, photosLoaded } = photoSlice.actions;
export default photoSlice.reducer;
