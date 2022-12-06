import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchRobots, filterRobots } from "./store/roboSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { filteredRobots, status } = useSelector((state) => state.robo);

  const isRobotsLoading = status === "loaded";

  const searchHandler = (searchText) => {
    dispatch(filterRobots(searchText));
  };
  useEffect(() => {
    dispatch(fetchRobots());
  }, []);
  return (
    <>
      <input
        type="text"
        onChange={(event) => searchHandler(event.target.value)}
      />
      <div className="card-container">
        {isRobotsLoading ? (
          filteredRobots.map((robot) => (
            <div key={robot.id} className="card">
              <img
                src={`https://robohash.org/${robot.id}?200x200`}
                alt="Robot Avatar"
              />
              <h1>{robot.name}</h1>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}

export default App;
