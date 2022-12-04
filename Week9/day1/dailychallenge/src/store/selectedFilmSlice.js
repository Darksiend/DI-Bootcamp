import { createSlice } from "@reduxjs/toolkit";

export const selectedFilmSlice = createSlice({
  name: "selectedFilm",
  initialState: {
    title: "",
    releaseDate: "",
    rating: 0,
  },
});

export default selectedFilmSlice.reducer;
