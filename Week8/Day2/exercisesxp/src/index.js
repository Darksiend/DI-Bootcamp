import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./Components/Car";
import Car from "./Components/Car";
const root = ReactDOM.createRoot(document.getElementById("root"));
const carinfo = { name: "Ford", model: "Mustang" };
root.render(
  <React.StrictMode>
    <Car car={carinfo} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
