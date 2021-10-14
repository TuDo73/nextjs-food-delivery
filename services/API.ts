import axios from "axios";

const GLOBAL_BACKEND = "http://54.93.83.177:80";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const API = axios.create({
  baseURL: `${GLOBAL_BACKEND}`,
  withCredentials: false,
  headers,
});

export default API;
