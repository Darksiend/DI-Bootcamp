import React from "react";

const Image = (props) => {
  console.log(props.photo);

  return (
    <>
      <img className="img" src={props.photo.src.small} alt="" />
    </>
  );
};

export default Image;
