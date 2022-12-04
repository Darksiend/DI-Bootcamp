import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilm } from "../store/selectedFilmSlice";

const MovieList = () => {
  const { filmList } = useSelector((state) => state.film);

  console.log(filmList);
  const dispatch = useDispatch();
  return (
    <>
      {filmList.map((film) => {
        return (
          <h1 key={film.title}>
            {film.title}
            <button onClick={() => dispatch(setFilm(film))}>
              Get Information
            </button>
          </h1>
        );
      })}
    </>
  );
};

export default MovieList;
