import React, { useEffect, useState } from "react";
// import "Quote.css";
import quotes from "../Data/QuotesDatabase";
const Quote = () => {
  const [data, setData] = useState(quotes);
  const [oldQoutes, setoldQoutes] = useState([]);
  const getRandomQuote = () => {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    setoldQoutes([...oldQoutes, quote]);
    console.log(quote);
    console.log(oldQoutes);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);
  return (
    <>
      <button onClick={getRandomQuote}>Get Quote</button>
    </>
  );
};

export default Quote;
