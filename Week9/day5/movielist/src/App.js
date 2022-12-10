import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import FullFilm from "./pages/FullFilm";

function App() {
  return (
    <>
      <Header />
      <div className="container"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films/:id" element={<FullFilm />} />
      </Routes>
    </>
  );
}

export default App;
