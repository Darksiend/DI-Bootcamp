import React from "react";
import Image from "./Image";

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
