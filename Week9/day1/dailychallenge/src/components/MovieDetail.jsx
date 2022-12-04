import React from "react";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const { title, releaseDate, rating } = useSelector(
    (state) => state.selectedFilm
  );

  return (
    <>
      <h1>Selected Movie:</h1>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <h5>{rating}</h5>
    </>
  );
};

export default MovieDetail;
