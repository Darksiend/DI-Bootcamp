import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByTitle } from "../store/slices/filmsSlice";
import Card from "../components/Card";
const Home = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (text !== "" && text.length >= 3) {
      dispatch(fetchPostsByTitle(text));
    }
  }, [text]);
  const { films } = useSelector((state) => state.films);
  const isFilmsLoading = films.status === "loading";
  const dispatch = useDispatch();
  const changeHandler = (text) => {
    setText(text);
  };
  console.log(films.items.Search);
  return (
    <div className="main-container">
      <input
        className="input"
        onChange={(e) => changeHandler(e.target.value)}
        type="text"
        placeholder="Type Here..."
      />
      <div className="container">
        {text.length < 3 ? (
          <div></div>
        ) : isFilmsLoading ? (
          <div>Loading...</div>
        ) : films.items.Search && films.items.Search.length > 1 ? (
          films.items.Search.map((film) => <Card film={film} />)
        ) : (
          <div>No Results</div>
        )}
      </div>
    </div>
  );
};

export default Home;
