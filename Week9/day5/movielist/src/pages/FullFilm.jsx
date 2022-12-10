import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const FullFilm = () => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();
  useEffect(() => {});
  return <div>Full Film</div>;
};

export default FullFilm;
