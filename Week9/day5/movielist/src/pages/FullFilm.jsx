import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPostsByID } from "../store/slices/filmsSlice";
import axios from "../axios";
import Card from "../components/Card";
import "./FullFilm.css";
const FullFilm = () => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`?apikey=e14045af&i=${id}`)
      .then((r) => {
        setData(r.data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert("Error with getting Film!");
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="donut"></div>
      ) : (
        <div className="fullFilm">
          <img src={Poster} alt="" />
          <h1>{Title}</h1>
          <div>Release Year:{Year}</div>
          <div> Runtime:{Runtime}</div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default FullFilm;
