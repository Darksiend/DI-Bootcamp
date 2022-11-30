import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import ProfileScreen from "./Components/ProfileScreen";
import ShopScreen from "./Components/ShopScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/shop" element={<ShopScreen />} />
    </Routes>
  );
}

export default App;
