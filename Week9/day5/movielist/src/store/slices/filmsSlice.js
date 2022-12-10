import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPostsByTitle = createAsyncThunk(
  "films/fetchPostsByTitle",
  async (text) => {
    const { data } = await axios.get(`?apikey=e14045af&s=${text}`);
    return data;
  }
);

export const fetchPostsByTitle = createAsyncThunk(
  "films/fetchPostsByTitle",
  async (text) => {
    const { data } = await axios.get(`?apikey=e14045af&s=${text}`);
    return data;
  }
);

const initialState = {
  films: { items: [], status: "loading" },
  selectedFilm: { item: [], status: "loading" },
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPostsByTitle.pending]: (state) => {
      state.films.status = "loading";
    },
    [fetchPostsByTitle.fulfilled]: (state, action) => {
      state.films.items = action.payload;
      state.films.status = "loaded";
    },
    [fetchPostsByTitle.rejected]: (state) => {
      state.films.items = [];
      state.films.status = "error";
    },
  },
});

export const filmsReducer = filmsSlice.reducer;
