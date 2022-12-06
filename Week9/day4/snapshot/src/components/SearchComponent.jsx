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
  return (
    <>
      <input type="text" />
      <button onClick={() => dispatch(fetchPhotoByText("sun"))}>Search</button>
    </>
  );
};

export default SearchComponent;
