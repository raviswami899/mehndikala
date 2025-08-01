require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
//const adminRoutes = require("./routes/adminRoutes");

// Middleware setup
// const corsOptions = {
//   origin: "*",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true,
// };
//app.use(cors(corsOptions));
app.use(express.json());
// In your backend (e.g., Express):
// app.use(cors({
//   origin: 'https://mehndiidesign.netlify.app',
//   credentials: true
// }));
// Middleware
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3000', 'https://mehndiidesign.netlify.app'],
  credentials: true
}));

app.options('*', cors()); // Handles preflight



// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the MehndiKala API");
});
app.use("/api/designs", require("./routes/designRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
//app.use("/api/admin", adminRoutes); // ✅ Prefix

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
