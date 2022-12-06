import React from "react";
import Image from "./Image";
import "./ImageGallery.css";

const ImagesGallery = (props) => {
  return (
    <div className="img-gallery">
      {props.photos.map((photo) => (
        <Image key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default ImagesGallery;
