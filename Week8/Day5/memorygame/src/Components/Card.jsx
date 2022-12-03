import React from "react";
import "./Card.css";
const Card = (props) => {
  const item = props.item;
  const handleChoice = props.handleChoice;
  const handleClick = () => {
    handleChoice(item);
  };
  return (
    <div className="Card" onClick={handleClick}>
      <div className="img-container">
        <img src={item.image} alt="" className="img" />
      </div>
      <h3>{item.name}</h3>
    </div>
  );
};

export default Card;
