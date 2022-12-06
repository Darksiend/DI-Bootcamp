import "./App.css";
import SearchComponent from "./components/SearchComponent";
import ImagesGallery from "./components/ImagesGallery";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "./redux/photoSlice";
function App() {
  const dispatch = useDispatch();

  const { photos, status } = useSelector((state) => state.photos);
  console.log(photos, status);
  const isLoading = status === "loading";
  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);
  return (
    <div className="App">
      <SearchComponent />
      {isLoading ? <h1>Loading</h1> : <ImagesGallery photos={photos} />}
    </div>
  );
}

export default App;
