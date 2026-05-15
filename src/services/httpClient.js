import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

export const httpClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10s — prevents hanging on cold Render starts
  headers: {
    "Content-Type": "application/json",
  },
});
