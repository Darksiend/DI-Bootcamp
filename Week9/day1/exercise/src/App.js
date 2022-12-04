import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/counterSlice";

function App() {
  const { value } = useSelector((state) => state.counter);
  console.log(value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {value}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
