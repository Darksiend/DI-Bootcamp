import axios from "axios";
const KEY = "e14045af";
const instance = axios.create({
  baseURL: `https://www.omdbapi.com`,
});

export default instance;
