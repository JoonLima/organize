import axios from "axios";

const http = axios.create({
  baseURL: "https://organize-jsonserver.vercel.app",
});

export default http;