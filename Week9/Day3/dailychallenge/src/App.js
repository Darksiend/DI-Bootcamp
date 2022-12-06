import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRobots } from "./redux/slices/robotsSlice";

function App() {
  const dispatch = useDispatch();
  const { robots } = useSelector((state) => state.robots);
  useEffect(() => {
    dispatch(fetchRobots());
  }, []);
  console.log(robots);
  return (
    <>
      {robots.map((item) => {
        return (
          <>
            <img src={item} alt="" />
            <h1>{item.name}</h1>
          </>
        );
      })}
    </>
  );
}

export default App;
