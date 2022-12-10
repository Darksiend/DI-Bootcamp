import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPosts = createAsyncThunk(
  "films/fetchPosts",
  async (state) => {
    const { data } = await axios.get("/posts");

    return data;
  }
);

const initialState = {
  films: { items: [], status: "loading" },
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
});

export const filmsReducer = filmsSlice.reducer;
