// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://localhost:5000/api", // your backend server base URL
// });

// export default instance;
// src/api/axiosInstance.jsx

import axios from "axios";

// Create an axios instance with default config
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Backend base URL
  timeout: 10000, // Optional: timeout after 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true, // Enable if your backend uses cookies/auth
});

export default axiosInstance;
