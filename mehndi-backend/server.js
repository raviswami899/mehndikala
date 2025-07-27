require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
//const adminRoutes = require("./routes/adminRoutes");

// Middleware setup
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

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
