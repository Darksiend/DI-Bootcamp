import axios from "axios";
const KEY = "e14045af";
const instance = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${KEY}&`,
});

export default instance;
