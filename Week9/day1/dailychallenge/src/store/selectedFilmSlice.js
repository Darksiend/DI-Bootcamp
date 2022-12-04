import { createSlice } from "@reduxjs/toolkit";

export const selectedFilmSlice = createSlice({
  name: "selectedFilm",
  initialState: {},
  reducers: {
    setFilm(state, action) {
      return action.payload;
    },
  },
});

export const { setFilm } = selectedFilmSlice.actions;
export default selectedFilmSlice.reducer;
