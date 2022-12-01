import React, { useEffect, useState } from "react";
import "./Quote.css";
import quotes from "../Data/QuotesDatabase";
const Quote = () => {
  const [data, setData] = useState(quotes);
  const [quote, setQuote] = useState("");
  const [oldQuotes, setOldQuotes] = useState([]);
  const getRandomQuote = () => {
    let newQuote = quotes[Math.floor(Math.random() * quotes.length)];

    if (oldQuotes.length === quotes.length) {
      newQuote = { quote: "No more Quotes for today!" };
    } else {
      while (oldQuotes.includes(newQuote)) {
        newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      }
      setQuote(newQuote);
    }

    setQuote(newQuote);

    setOldQuotes([...oldQuotes, newQuote]);
    console.log(newQuote);
    console.log(oldQuotes);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);
  return (
    <>
      <div className="quoteContainer">
        <p>
          <h3>{quote.quote}</h3>
        </p>
        <h3>{quote.author}</h3>
      </div>
      <button onClick={getRandomQuote}>Get Quote</button>
    </>
  );
};

export default Quote;
