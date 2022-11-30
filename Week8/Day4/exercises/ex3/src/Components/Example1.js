import React from "react";
import Data from "../Data/data.json";
const Example1 = () => {
  return (
    <>
      {Data.SocialMedias.map((item, index) => {
        return (
          <>
            <h1 key={index}>{item}</h1>
          </>
        );
      })}
    </>
  );
};

export default Example1;
