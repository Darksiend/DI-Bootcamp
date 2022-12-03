import React, { useEffect, useState } from "react";
import Data from "../data/superheroes.json";
import Card from "./Card";
import "./Body.css";
const Body = () => {
  let CardsArr = Data.superheroes;
  const [score, setScore] = useState(0);
  const [top, setTop] = useState(0);
  const [oldId, setOldId] = useState([]);
  const [Cards, setCards] = useState([]);

  useEffect(() => {
    setCards(CardsArr);
  }, []);
  // console.log(Data.superheroes);
  const handleChoice = (card) => {
    console.log(card.id);

    if (oldId.includes(card.id)) {
      if (top < score) {
        setTop(score);
      }
      restartGame();
    } else {
      setScore(score + 1);
      setOldId([...oldId, card.id]);
      shuffle();
    }
  };

  const restartGame = () => {
    setScore(0);
    setOldId([]);
    shuffle();
  };

  const shuffle = () => {
    setCards(Cards.sort(() => Math.random() - 0.5));
  };
  return (
    <>
      <div className="score">
        Your Score: {score}. Top Score: {top}
      </div>
      <div className="CardsContainer">
        {Cards.map((item) => (
          <div className="CardContainer" key={item.id}>
            <Card item={item} handleChoice={handleChoice} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;
