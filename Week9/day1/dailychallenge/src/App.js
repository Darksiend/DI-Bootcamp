import { useSelector, useDispatch } from "react-redux";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
function App() {
  return (
    <>
      <MovieList />
      <MovieDetail />
    </>
  );
}

export default App;
