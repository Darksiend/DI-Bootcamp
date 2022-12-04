import React from "react";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const { selectedFilm } = useSelector((state) => state.selectedFilm);
  console.log(selectedFilm);
  return <div></div>;
};

export default MovieDetail;
