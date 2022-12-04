import React from "react";
import { useSelector } from "react-redux";

const MovieList = () => {
  const { filmList } = useSelector((state) => state.film);
  console.log(filmList);
  return (
    <>
      {filmList.map((film) => {
        return (
          <h1 key={film.title}>
            {film.title}
            <button>Get Information</button>
          </h1>
        );
      })}
    </>
  );
};

export default MovieList;
