import logo from "./logo.svg";
import "./App.css";
import Car from "./Components/Car";
import Phone from "./Components/Phone";
import Color from "./Components/Color";
const carinfo = { name: "Ford", model: "Mustang" };
function App() {
  return (
    <div>
      <Car name={carinfo.name} model={carinfo.model} />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
