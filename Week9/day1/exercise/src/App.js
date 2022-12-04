import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/counterSlice";

function App() {
  const count = useSelector((state) => state.counter);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>0
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
