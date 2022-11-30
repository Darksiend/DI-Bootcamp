import React from "react";
import Data from "../Data/data.json";
const Example1 = () => {
  return (
    <>
      {Data.Skills.map((item, index) => {
        return (
          <>
            <h1>{item.Area}</h1>
            <ol>
              {item.SkillSet.map((item) => {
                return <li>{item.Name}</li>;
              })}
            </ol>
          </>
        );
      })}
    </>
  );
};

export default Example1;
