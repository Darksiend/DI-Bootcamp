import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  const { Poster, Title, Year, imdbID } = props.film;
  console.log(Poster, Title, Year, imdbID);
  return (
    <div className="card">
      <img src={Poster} alt="" />
      <Link to={`/films/${imdbID}`}>{Title}</Link>
      <div>{Year}</div>
    </div>
  );
};

export default Card;
