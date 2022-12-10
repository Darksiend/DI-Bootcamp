import React from "react";
import "./Card.css";
const Card = (props) => {
  const { Poster, Title, Year } = props.film;
  console.log(Poster, Title, Year);
  return (
    <div className="card">
      <img src={Poster} alt="" />
      <h1>{Title}</h1>
      <div>{Year}</div>
    </div>
  );
};

export default Card;
