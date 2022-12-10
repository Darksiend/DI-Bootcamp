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
  console.log(data);
  return (
    <>
      {isLoading ? (
        <div className="donut"></div>
      ) : (
        <div className="fullFilm">
          <img src={data.Poster} alt="" />
          <h1>{data.Title}</h1>
          <div>Release Year:{data.Year}</div>
          <div> Runtime:{data.Runtime}</div>
          <div>Country:{data.Country}</div>
          <div>iMDB Rating:{data.imdbRating}</div>
        </div>
      )}
    </>
  );
};

export default FullFilm;
