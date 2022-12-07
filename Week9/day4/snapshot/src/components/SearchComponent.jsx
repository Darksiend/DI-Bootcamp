import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPhotoByText,
  fetchPhotos,
  setSearchText,
  getSearchText,
} from "../redux/photoSlice";
import store from "../redux/store";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.photos);

  const inputHandler = (event) => {
    dispatch(setSearchText(event.target.value));
  };

  return (
    <>
      <input type="text" onChange={(event) => inputHandler(event)} />
      <button
        onClick={(event) => dispatch(fetchPhotos({ searchText: searchText }))}
      >
        Search
      </button>
    </>
  );
};

export default SearchComponent;
