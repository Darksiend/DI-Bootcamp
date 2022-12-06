import React from "react";
import "./Image.css";
const Image = (props) => {
  console.log(props.photo);

  return (
    <div className="img-card-container">
      <img className="img" src={props.photo.src.small} alt="" />
    </div>
  );
};

export default Image;
