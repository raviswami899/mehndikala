

import axios from "axios";

// Create an axios instance with default config
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Backend base URL
  timeout: 10000, // Optional: timeout after 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true, // Enable if your backend uses cookies/auth
});

export default axiosInstance;
