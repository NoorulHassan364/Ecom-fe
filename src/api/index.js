import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  // baseURL: "http://3.84.159.128:5000/api/v1",
});

export default api;
