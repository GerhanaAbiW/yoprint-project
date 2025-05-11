import axios from "axios";
const CONSTANT_API = "https://api.jikan.moe/v4";
export const AxiosInstance = axios.create({
  baseURL: CONSTANT_API,
  headers: {
    "Content-Type": "application/json",
  },
});
