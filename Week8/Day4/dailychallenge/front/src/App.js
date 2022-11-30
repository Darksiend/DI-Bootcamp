import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let data;
  const [header, setHeader] = useState("");
  const [formText, setFormText] = useState("");
  const [textFromFetch, setTextFromFetch] = useState("");
  const formHandler = (event) => {
    setFormText(event.target.value);
  };
  const formSend = async (event) => {
    event.preventDefault();
    console.log("Form text:", formText);

    await fetch("http://localhost:3001/api/world", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: new URLSearchParams({
        textFromInput: formText,
      }),
    })
      .then((res) => res.json())
      .then((res) => setTextFromFetch("Text from Fetch: " + res.textFromInput));
  };
  useEffect(() => {
    fetch("http://localhost:3001/api/hello")
      .then((res) => res.json())
      .then((res) => setHeader(res.msg));
  }, []);

  return (
    <>
      <header>{header}</header>
      <form>
        <input onChange={(event) => formHandler(event)} type="text" />
        <input onClick={(event) => formSend(event)} type="submit" />
      </form>
      <p>{textFromFetch}</p>
    </>
  );
}

export default App;
