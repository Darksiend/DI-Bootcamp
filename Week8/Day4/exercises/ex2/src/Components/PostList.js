import React from "react";
import Data from "../data.json";
const PostList = () => {
  return (
    <div>
      {Data.map((item) => {
        return (
          <>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </>
        );
      })}
    </div>
  );
};

export default PostList;
