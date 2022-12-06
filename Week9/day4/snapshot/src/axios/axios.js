import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.pexels.com/v1/search/",
  headers: {
    Authorization: `563492ad6f917000010000018a1d0cc096474a7ba99d9ab80e1396fa`,
  },
});

export default instance;
