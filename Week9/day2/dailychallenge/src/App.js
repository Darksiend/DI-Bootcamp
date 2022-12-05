import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { filterRobots } from "./store/roboSlice";
function App() {
  const dispatch = useDispatch();
  const { robots, filteredRobots } = useSelector((state) => state.robo);
  const searchHandler = (searchText) => {
    dispatch(filterRobots(searchText));
  };
  return (
    <>
      <input
        type="text"
        onChange={(event) => searchHandler(event.target.value)}
      />
      <div className="card-container">
        {filteredRobots.map((robot) => (
          <div className="card">
            <img src={robot.image} alt="" />
            <h1>{robot.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
