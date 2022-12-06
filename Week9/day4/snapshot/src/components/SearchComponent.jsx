import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPhotoByText,
  fetchPhotos,
  getSearchText,
} from "../redux/photoSlice";
import store from "../redux/store";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.photos);
  const inputHandler = (event, text) => {};
  console.log(searchText);
  return (
    <>
      <input type="text" onChange={() => inputHandler} />
      <button
        onClick={(event) => dispatch(fetchPhotos({ searchText: searchText }))}
      >
        Search
      </button>
    </>
  );
};

export default SearchComponent;
